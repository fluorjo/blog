'use client';
import Button from './Button';
interface PostCRUDComponentProps {
    id: string;
}

export default function PostCRUDComponent({ id }: PostCRUDComponentProps) {
    return (
        <div>
            <Button
                type="button"
                onClick={() => {
                    fetch(`/api/posts/${id}`, {
                        method: 'DELETE',
                    });
                }}
            >
                crud
            </Button>
        </div>
    );
}
