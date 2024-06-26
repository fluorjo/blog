'use client';

import Button from '@/components/common/Button';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface AdminDashboardProps {
    user: User;
}

const supabase = createClient();

const AdminDashboard: FC<AdminDashboardProps> = ({ user }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-2">
            <div className="mb-8">
                <b>{user.email}</b> 로그인 성공
            </div>
            <Button type="button" onClick={() => router.push('/write')}>
                글 쓰러 가기
            </Button>
            <Button
                type="button"
                onClick={() => {
                    supabase.auth.signOut();
                    router.push('/');
                }}
            >
                Logout
            </Button>
        </div>
    );
};

export default AdminDashboard;
