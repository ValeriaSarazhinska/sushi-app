import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Header} from "./header.component";

export default {
    title: 'Common/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const View = Template.bind({});
View.args = {
    categories:  [
        {
            id: "2a2426f1-094d-4b0f-87dd-e2198060b57b",
            slug: "Sushi",
            title: "Суші",
        },
        {
            id: "8c06ed3b-b528-4eb5-8e60-f55573988fde",
            slug: "cocktails",
            title: "Коктейлі",
        },
    ],
};

export const Loading = Template.bind({});
Loading.args= {
    isLoading:true,

}
