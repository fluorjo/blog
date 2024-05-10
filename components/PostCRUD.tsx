'use client';
import Button from './Button';

export default function PostCRUDComponent() {
    return (
        <div>
            <Button
                type="button"
                onClick={() => {
                    fetch('/api/posts', {
                        method: 'DELETE',
                    });
                }}
            >
                crud
            </Button>
        </div>
    );
}
