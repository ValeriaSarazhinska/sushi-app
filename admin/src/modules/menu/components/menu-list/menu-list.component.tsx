import {Datagrid, EditButton, FunctionField, List, TextField, TextInput} from 'react-admin';
import {MenuListExpand} from "@app/modules/menu/components/menu-list-expand/menu-list-expand.components";
import {Menu} from "@app/core/types";

const filters = [
    <TextInput source="Title" label="Пошук по назві"/>
]

export const MenuList = () => (
    <List filters={filters} exporter={false}>
        <Datagrid
            expand={MenuListExpand}
            rowClick="expand"
            bulkActionButtons={false}>
            <TextField source="title" label="Назва"/>
            <FunctionField
                label="Ціна"
                render={(record: Menu) => `${record.price} грн.`}
            />
            <EditButton/>
        </Datagrid>
    </List>
);
