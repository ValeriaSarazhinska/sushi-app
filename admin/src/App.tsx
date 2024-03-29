import {Admin, CustomRoutes, DataProvider, Loading, Resource} from 'react-admin';
import {CssBaseline} from '@mui/material';
import {useEffect, useState} from 'react';
import {authProvider} from "@app/core/auth-provider";
import {theme} from "@app/core/theme";
import {i18nProvider} from "@app/core/i18n";
import {SettingEdit} from "@app/modules/settings/components/setting-edit/setting-edit.component";
import {Route} from "react-router-dom"
import {Layout} from "@app/common/components/layout/layout.component";
import {buildDataProvider} from "@app/core/data-provider";
import {menuResource} from "@app/modules/menu/menu.resource";
import {categoryResource} from "@app/modules/category/category.resource";
import {ordersResource} from "@app/modules/orders/orders.resource";
import {useGetSettingsQuery} from "@app/core/types";
import {Dashboard} from "@app/modules/dashboard/components/dashboard/dashboard.component";

export const App = () => {

    const {data: settings} = useGetSettingsQuery()

    const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);
    useEffect(() => {
        const getDataProvider = async () => {
            const dp = await buildDataProvider()
            setDataProvider(dp);
        };

        getDataProvider();
    }, []);

    if (!dataProvider || !settings) {
        return <Loading/>;
    }

    return (
        <>
            <CssBaseline/>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                i18nProvider={i18nProvider}
                requireAuth
                theme={theme}
                layout={Layout}
                dashboard={Dashboard}
            >
                <Resource{...menuResource}/>
                <Resource{...categoryResource}/>
                <Resource{...ordersResource}/>
                <Resource name="settings"/>
                <Resource name="order_status"/>
                <Resource name="orders_menu"/>
                <Resource name="last_week_orders"/>
                <CustomRoutes>
                    <Route path="/settings" element={<SettingEdit/>}/>
                </CustomRoutes>
            </Admin>
        </>
    );
};

export default App;
