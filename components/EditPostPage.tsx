'use client';

import Input from '@/components/Input';
import { MarkdownEditor } from '@/components/Markdown';
import Button from '@/components/common/Button';
import { Post } from '@/types';
import { useCategories, useTags } from '@/utils/hooks';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useRef, useState } from 'react';
import ReactSelect from 'react-select/creatable';
import Text from './common/Text';

type PostProps = Post;

const EditPostPage: FC<Post> = ({
    id,
    title,
    category: initialCategory,
    tags: initialTags,
    content: initialContent,
    created_at,
    preview_image_url,
}) => {
    const router = useRouter();
    const titleRef = useRef<HTMLInputElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    const { data: existingCategories } = useCategories();
    const { data: existingTags } = useTags();

    const [category, setCategory] = useState(initialCategory);
    const [tags, setTags] = useState(JSON.stringify(initialTags));
    const [content, setContent] = useState(initialContent);

    const handleEditPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!titleRef.current?.value || titleRef.current.value.length === 0)
            return alert('제목을 입력해주세요.');
        if (category.length === 0) return alert('카테고리를 입력해주세요.');
        if (tags.length === 0) return alert('태그를 입력해주세요.');
        if (content.length === 0) return alert('글 내용을 입력해주세요.');

        const formData = new FormData();

        formData.append('title', titleRef.current?.value ?? '');
        formData.append('category', category);
        formData.append('tags', tags);
        formData.append('content', content);

        if (fileRef.current?.files?.[0]) {
            formData.append('preview_image', fileRef.current.files[0]);
        }

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: formData,
        });

        const data = await response.json();
        if (data.id) router.push(`/posts/${data.id}`);
    };

    return (
        <div className="container flex flex-col pb-20 pt-12">
            <Text size="2xl" className="mb-8 font-medium">
                글 수정
            </Text>
            <form onSubmit={handleEditPost}>
                <div className="flex flex-col gap-3">
                    <Input type="text" ref={titleRef} defaultValue={title} />
                    <Input type="file" accept="image/*" ref={fileRef} />
                    <ReactSelect
                        options={(existingCategories ?? []).map((category) => ({
                            label: category,
                            value: category,
                        }))}
                        defaultValue={
                            category
                                ? { label: category, value: category }
                                : null
                        }
                        inputId="category"
                        placeholder="카테고리"
                        onChange={(e) => e && setCategory(e.value)}
                        isMulti={false}
                    />
                    <ReactSelect
                        options={(existingTags ?? []).map((tag) => ({
                            label: tag,
                            value: tag,
                        }))}
                        inputId="tags"
                        onChange={(e) =>
                            e && setTags(JSON.stringify(e.map((e) => e.value)))
                        }
                        defaultValue={(JSON.parse(tags) as string[]).flatMap(
                            (tag) => ({
                                label: tag,
                                value: tag,
                            }),
                        )}
                        placeholder="태그"
                        isMulti
                    />
                    <MarkdownEditor
                        height={500}
                        value={content}
                        onChange={(s) => setContent(s ?? '')}
                    />
                </div>
                <Button type="submit" className="mt-4">
                    수정하기
                </Button>
            </form>
        </div>
    );
};
export default EditPostPage;
