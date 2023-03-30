import {
    Datagrid,
    EditButton,
    FunctionField,
    List,
    ReferenceField,
    ReferenceInput, SelectInput,
    TextField,
    TextInput
} from 'react-admin';
import {MenuListExpand} from "@app/modules/menu/components/menu-list-expand/menu-list-expand.components";
import {Menu} from "@app/core/types";

const filters = [
    <TextInput source="Title" label="Пошук по назві"/>,
    <ReferenceInput
        source="category_id"
        reference="categories"
        label="Пошук по категорії">
        <SelectInput optionText="title" label="Категорія"/>
    </ReferenceInput>
]

export const MenuList = () => (
    <List filters={filters} exporter={false}>
        <Datagrid
            expand={MenuListExpand}
            rowClick="expand"
            bulkActionButtons={false}>
            <TextField source="title" label="Назва"/>
            <ReferenceField
                source="category_id"
                reference="categories"
                link={false}
                label="Категорія">
                <TextField source="title"/>
            </ReferenceField>
            <FunctionField
                label="Ціна"
                render={(record: Menu) => `${record.price} грн.`}
            />
            <EditButton/>
        </Datagrid>
    </List>
);
