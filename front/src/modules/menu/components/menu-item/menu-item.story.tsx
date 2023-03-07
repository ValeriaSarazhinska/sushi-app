import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuItem} from "./menu-item.component";

export default {
    title: 'Menu/Menu Item',
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args}/>;

    export const View = Template.bind({});

    View.args={
        imagePath: '/assets/sushi/yamamoto.jpeg',
        weight: 555,
        title: 'Yamamoto',
        ingredients: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium',
        price: 400,
    };
