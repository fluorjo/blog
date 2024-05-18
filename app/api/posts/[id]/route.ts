// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PostRequest } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { format } from 'date-fns';
import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string | number } },
): Promise<any> {
    const supabase = await createClient(cookies());
    const { data, error } = await supabase
        .from('Post')
        .delete()
        .eq('id', parseInt(params.id.toString()));

    if (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    } else {
        return Response.json({ message: 'success' }, { status: 200 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string | number } },
): Promise<any> {
    const supabase = await createClient(cookies());
    const formEntries = Array.from((await request.formData()).entries());
    const formData = formEntries.reduce<Record<string, FormDataEntryValue>>(
        (acc, [key, value]) => {
            acc[key] = value;
            return acc;
        },
        {},
    );

    const { data: existingData, error: selectError } = await supabase
        .from('Post')
        .select('*')
        .eq('id', parseInt(params.id.toString()));

    console.log('existingData', existingData);
    if (selectError || !existingData || existingData.length === 0) {
        console.log(selectError || 'No existing data found');
        return Response.json({ error: 'Not Found' }, { status: 404 });
    }

    const { preview_image, ...fields } = formData as unknown as Omit<
        PostRequest,
        'preview_image_url'
    > & {
        preview_image?: File;
    };
    let preview_image_url: string | null = null;

    if (preview_image) {
        const fileName = `${preview_image.name}_${format(
            new Date(),
            'yyyyMMddHHmmss',
        )}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('blog-image')
            .upload(fileName, preview_image, {
                contentType: preview_image.type,
            });

        if (uploadError) {
            return Response.json(
                { error: uploadError.message },
                { status: 403 },
            );
        } else if (uploadData?.path) {
            const { data: publicUrlData } = await supabase.storage
                .from('blog-image')
                .getPublicUrl(uploadData.path);
            preview_image_url = publicUrlData.publicUrl;
        }
    }
    const { title, category, tags, content } = fields;
    console.log('fields', fields);

    const editedPostData = {
        title: title || existingData[0].title,
        category: category || existingData[0].category,
        tags: tags || existingData[0].tags,
        content: content || existingData[0].content,
        preview_image_url:
            preview_image_url || existingData[0].preview_image_url,
    } as PostRequest;

    console.log('editedPostData', editedPostData);

    const { data, error: updateError } = await supabase
        .from('Post')
        .update(editedPostData)
        .eq('id', parseInt(params.id.toString()))
        .select();
    console.log('newData', data);

    if (updateError) {
        console.log('updateError',updateError);
        return Response.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        );
    }
    if (data && data.length === 1) {
        const { tags, ...rest } = data[0];
        return Response.json(
            {
                ...rest,
                tags: JSON.parse(tags) as string[],
            },
            { status: 200 },
        );
    } else {
        return Response.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        );
    }
}
