import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuList} from "./menu-list-component";
import sushiMenu from '@app/mocks/sushi.json'


export default {
    title: 'Menu/Menu List',
    component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => <MenuList{...args}/>;

export const View = Template.bind({});

View.args ={
    items: sushiMenu
}