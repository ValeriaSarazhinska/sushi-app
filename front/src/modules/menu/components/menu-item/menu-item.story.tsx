import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuItem} from "./menu-item.component";

export default {
    title: 'Menu/Menu Item',
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args}/>;

export const General = Template.bind({});

General.args = {
    image: 'menu/menu-1679826167',
    weight: 555,
    title: 'Yamamoto',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium',
    price: 400,
};
export const Drinks = Template.bind({});
Drinks.args = {
    image: "menu/menu-1680000295",
    price: 120,
    title: "Pina Colada",
    ingredients:'',
    fitImage: true,
}
