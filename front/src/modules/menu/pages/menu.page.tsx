import {useGetMenuQuery} from "@app/core/types";
import {MenuList} from "@app/modules/menu/components/menu-list/menu-list-component";
import {MenuListLoading} from "@app/modules/menu/components/menu-item-list-loading/menu-item-list-loading.component";
import {ShowInfo} from "@app/common/commonts/show-info/show-info.component";


export const MenuPage = () => {
    const {data, loading, error} = useGetMenuQuery()

    if (error) {
        return <ShowInfo type="error">
            <p>Упс, сталася помилка</p>
            <p>Спробуйте трохи пізніше</p>
        </ShowInfo>
    }
    if (loading) {
        return <MenuListLoading items={9}/>
    }
    if (!data) {
      return  <ShowInfo type="info">
            <p>Нажаль меню пусте</p>
        </ShowInfo>
    }

    return (
        <MenuList items={data.menu}/>
    )
}