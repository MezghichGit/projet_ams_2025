import {SubMenu} from './SubMenu';

export default interface MenuItem{
    name : String;
    icon? : String;
    url? : string;
    subMenu? : SubMenu []
}
