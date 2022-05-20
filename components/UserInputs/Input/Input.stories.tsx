import Input, {inputProps} from './Input';
import { Meta, Story } from '@storybook/react';

export default {
    title: 'Input',
    component: Input,
} as Meta;

// With named export we define component's story
const Template: Story<inputProps> = (args) =>
    <Input {
                ...args
            } />
;

export const Primary = Template.bind({})

// Define default arguments for the Default story
Primary.args = {
    containerClassName: "bg-red",
    inputClassName: "bg-green"
};