import {Edit, Loading, ReferenceInput, SelectInput, SimpleForm} from 'react-admin';
import {
    SettingsEditToolbar
} from "@app/modules/settings/components/settings-edit-toolbar/settings-edit-toolbar.component";
import {useGetSettingsQuery} from "@app/core/types"

export const SettingEdit = () => {
    const {data, loading} = useGetSettingsQuery()
    if(!data || loading){
        return <Loading/>
    }

    return(
        <Edit
            mutationMode="pessimistic"
            title="Налаштування"
            id={data.settings[0].id}
            resource="settings"
        >
            <SimpleForm toolbar={<SettingsEditToolbar/>} >
                <ReferenceInput source="cocktails_category" reference="categories">
                    <SelectInput optionText="title" label="Категорія коктейлів" fullWidth/>
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}