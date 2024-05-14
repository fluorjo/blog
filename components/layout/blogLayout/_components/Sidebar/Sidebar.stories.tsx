import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './';

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarStory: Story = {};
