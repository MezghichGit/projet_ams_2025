import Menu from "./Menu";

 const adminMenu: Menu = {
   isDisabled:false,
   menuItems:[
     {
       name: "Dashboard",
       icon: "dashboard",
       url: "/dashboard/admin"
     },

     {
       name: "Users",
       icon: "team",
       subMenu: [
         { name: "All Users", url: "/users" },
        //  { name: "Add User", url: "/admin/users/add" }
       ]
     },
     {
      name: "Providers",
      icon: "team",
      subMenu: [
        { name: "All Providers", url: "/providers" },
        { name: "Add Provider", url: "/admin/providers/add" }
      ]
    },
    {
      name: "Articles",
      icon: "team",
      subMenu: [
        { name: "All Articles", url: "/articles" },
        { name: "Add Article", url: "/admin/articles/add" }
      ]
    }
   ]
 };


export default adminMenu;
