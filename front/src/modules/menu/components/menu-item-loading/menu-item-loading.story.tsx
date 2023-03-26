import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuItemLoading} from "@app/modules/menu/components/menu-item-loading/menu-item-loading.component";

export default {
    title: 'Menu/Menu Item Loading',
    component: MenuItemLoading,
} as ComponentMeta<typeof MenuItemLoading>;

const Template: ComponentStory<typeof MenuItemLoading> = () =>
<div className="flex">
    <MenuItemLoading/>
</div>

export const View = Template.bind({});

