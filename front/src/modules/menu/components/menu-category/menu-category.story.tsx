import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuCategory} from "@app/modules/menu/components/menu-category/menu-category.component";

export default {
    title: 'Menu/Menu Category',
    component: MenuCategory,
} as ComponentMeta<typeof MenuCategory>;

const Template: ComponentStory<typeof MenuCategory> = (args) =>
    <div className="flex">
        <MenuCategory {...args}/>
    </div>

export const View = Template.bind({});

View.args = {
    data: {
        id: "2a2426f1-094d-4b0f-87dd-e2198060b57b",
        slug: "Sushi",
        title: "Суші",
        menu_items: [
            {
                id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "fukuro.jpeg",
                ingredients: "salmon, nori, rice, unagi sauce, avocado, snow crab, pistachios, goose pate, cane",
                price: 400,
                title: "Fukuro",
                weight: 320
            },
            {
                id: "11c63454-6cbe-43f7-a742-2ca2a6a164cd",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "california.jpeg",
                ingredients: "salmon, nori, cucumber, rice, avocado, caviar",
                price: 470,
                title: "California",
                weight: 290
            },
            {
                id: "00212005-1f26-4fa5-941e-3685ef3ecb34",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679825879",
                ingredients: "nori, cucumber, rice, cream cheese, tuna",
                price: 400,
                title: "Tuna",
                weight: 310
            },
            {
                id: "a1f1bbb9-3bd9-42b7-9144-4062def76ed8",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "hokage.jpeg",
                ingredients: "salmon, nori, rice, caviar, shrimp, snow crab",
                price: 535,
                title: "Hokage",
                weight: 285
            },
            {
                id: "de38b78b-7555-48dc-b640-74e59b814ac9",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "watsumoto-grill.jpeg",
                ingredients: "almon, nori, rice, unagi sauce, eel, caviar, green onions, processed cheese",
                price: 555,
                title: "Matsumoto grill",
                weight: 335
            },
            {
                id: "3488564f-5034-423b-830f-4ecf0ab61a56",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679826159",
                ingredients: "nori, rice, cream cheese, unagi sauce, tuna, avocado, mango, japanese tamago",
                price: 350,
                title: "Enigma",
                weight: 295
            },
            {
                id: "abbec7bc-4a03-4f0b-a0fa-2c66ce275da1",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679826167",
                ingredients: "almon, nori, rice, cream cheese, unagi sauce, eel, avocado, cuttlefish ink",
                price: 520,
                title: "Canada",
                weight: 325
            },
            {
                id: "20a390a0-d09c-4fff-a336-28f2724e484a",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "http://localhost:3000/assets/sushi/alaska.jpeg",
                ingredients: "salmon, nori, cucumber, rice, cream cheese, caviar",
                price: 415,
                title: "Alaska",
                weight: 310
            },
            {
                id: "4aac5d21-dbf7-46a3-9eaa-754fdb8548a0",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679826195",
                ingredients: "nori, rice, cream cheese, avocado, caviar, shrimp, sriracha sauce, japanese mayonnaise",
                price: 435,
                title: "Baked Spicy Shrimp",
                weight: 350
            },
            {
                id: "5ff3a14c-3c34-4885-95bd-7e59819538d3",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679826210",
                ingredients: "nori, rice, cream cheese, sesame, eel, avocado, cheese cap",
                price: 420,
                title: "Baked eel",
                weight: 325
            },
            {
                id: "59e10ea3-565c-4471-8305-402a4917a0a2",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679661346",
                ingredients: "salmon, nori, rice, cream cheese, avocado, caviar, shrimp, snow crab",
                price: 500,
                title: "Yamamoto",
                weight: 365
            }
            ,
            {
                id: "d7c602be-050f-4dec-bc9d-e99f5a726c71",
                category_id: "86588e40-1e6a-4ed8-a3e9-65dbda48cabe",
                image: "menu/menu-1679825858",
                ingredients: "salmon, rice, avocado, japanese mayonnaise, mamenori",
                price: 340,
                title: "Yagami",
                weight: 185
            },
        ],
    },
};