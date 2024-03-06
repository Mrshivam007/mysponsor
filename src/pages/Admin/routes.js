import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/dataTables";
import EventManagement from "./views/admin/eventManagement"
import EventApproval from "./views/admin/eventApprove"
import ContentManagement from "./views/admin/contentManagement"
import ContentApproval from "./views/admin/contentApprove"
import EventPayment from "./views/admin/eventPayment"
import PaymentWithdraw from "./views/admin/PaymentWithdraw"
import ContentPaymentWithdraw from "./views/admin/ContentPaymentWithdraw"
import ContentPayment from "./views/admin/ContentPayment"
import RTL from "./views/admin/rtl";

// Auth Imports
import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/administrator",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Event Management",
    layout: "/administrator",
    path: "/event",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: EventManagement,
  },
  {
    name: "Event Approval",
    layout: "/administrator",
    path: "/approve_event",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: EventApproval,
  },
  // {
  //   name: "Event Payment",
  //   layout: "/administrator",
  //   path: "/payment_event",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: EventPayment,
  // },
  {
    name: "Event Payment Withdraw",
    layout: "/administrator",
    path: "/payment_withdraw",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: PaymentWithdraw,
  },
  {
    name: "Content Payment Withdraw",
    layout: "/administrator",
    path: "/payment_content_withdraw",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: ContentPaymentWithdraw,
  },
  {
    name: "Content Management",
    layout: "/administrator",
    path: "/content",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: ContentManagement,
  },
  {
    name: "Content Approval",
    layout: "/administrator",
    path: "/approve_content",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: ContentApproval,
  },
  // {
  //   name: "Content Payment",
  //   layout: "/administrator",
  //   path: "/payment_content",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: ContentPayment,
  // },
  {
    name: "NFT Marketplace",
    layout: "/administrator",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/administrator",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/administrator",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
