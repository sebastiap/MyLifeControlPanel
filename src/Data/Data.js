// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: "Customers",
    },
    {
      icon: UilPackage,
      heading: 'Products'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];

  export const CardsData = [
    {title: "Sales", 
    color: {backgroundColor: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
    boxShadow:"0px 10px 20px 0px #e0c6f5"},
    bacValue:70,
    value: "25,970",
    //png: UilUsdSquare,
    series: [{
      name:"Sales",
      data: [31,40,28,51,42,109,100]
    }]},
    {},{}]