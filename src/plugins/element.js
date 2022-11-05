import Vue from "vue";
import {
    Button, Card, Table,
    TableColumn, Form,
    FormItem, Input,
    Header, Container,
    Aside, Menu, Submenu,
    MenuItem,
    MenuItemGroup,
    Main, Footer,
    Breadcrumb, BreadcrumbItem,
    Pagination, Dialog, Radio,
    DatePicker, MessageBox,
    Loading, Tree, Upload,
    Message,

} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(DatePicker);

Vue.use(Loading);
Vue.use(Tree);
Vue.use(Upload);


Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

