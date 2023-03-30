import {ReferenceField, Show, FunctionField, SimpleShowLayout, TextField, ReferenceManyField, Datagrid} from 'react-admin';
import {Menu, Orders} from "@app/core/types";

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <FunctionField
                label="Сума"
                render={(record: Orders) => `${record.sum} грн.`}/>
            <TextField source="client_address" label="Адреса"/>
            <TextField source="client_name" label="Ім'я"/>
            <TextField source="client_phone" label="Телефон"/>
            <ReferenceField
                reference="order_status"
                source="status"
                label="Статус замовлення"
                link={false}>
                <TextField source="label"/>
            </ReferenceField>
            <ReferenceManyField reference="orders_menu" target="order_id" label="Список замовлення">
                <Datagrid bulkActionButtons={false} header={<div/>}>
                    <ReferenceField reference="menu" source="menu_id" link={false}>
                        <TextField source="title"/>
                    </ReferenceField>
                    <ReferenceField reference="menu" source="menu_id" link={false}>
                        <FunctionField label="Ціна" render={(record:Menu)=> `${record.price} грн.`}/>
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);