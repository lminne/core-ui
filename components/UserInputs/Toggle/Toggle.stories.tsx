import Toggle, {toggleProps} from './Toggle';
import { Meta, Story } from '@storybook/react';

// This tells Storybook how to list your stories and provide information
export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        checked: { control: { type: "boolean" }},
        colorClass: { control: { type: "select" }}
    }
} as Meta;

// With named export we define component's story
const Template: Story<toggleProps> = (args) =>
    <Toggle {
        ...args
    } />
;

export const Primary = Template.bind({})

// Define default arguments for the Default story
Primary.args = {
    checked: true,
    colorClass: 'indigo-600'
};