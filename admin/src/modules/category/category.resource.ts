import {CategoryList} from "@app/modules/category/components/category-list/category-list.component";
import {CategoryEdit} from "@app/modules/category/components/category-edit/catogory-edit.components";
import CategoryIcon from "@mui/icons-material/Category";

export const categoryResource = {
    name: "categories",
    list:CategoryList,
    edit: CategoryEdit,
    create: CategoryEdit,
    options: {label:'Категорії'},
    icon: CategoryIcon
}