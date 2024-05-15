import { Meta, StoryObj } from '@storybook/react';
import IconButton from './';
import { AiOutlineSetting } from 'react-icons/ai';

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    args:{
        children: AiOutlineSetting
    }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButtonStory: Story = {};
