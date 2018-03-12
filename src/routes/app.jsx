import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

// import {
//   Dashboard,
//   Person,
//   ContentPaste,
//   LibraryBooks,
//   BubbleChart,
//   Notifications
// } from "material-ui-icons";

import {
  Dashboard,
  Person,
  VideogameAsset,
  LibraryBooks,
  BubbleChart,
  ShowChart,
  History
} from "material-ui-icons";

// const appRoutes = [
//   {
//     path: "/dashboard",
//     sidebarName: "Dashboard",
//     navbarName: "Dashboard",
//     icon: Dashboard,
//     component: DashboardPage
//   },
//   {
//     path: "/user",
//     sidebarName: "User Profile",
//     navbarName: "Profile",
//     icon: Person,
//     component: UserProfile
//   },
//   {
//     path: "/table",
//     sidebarName: "Table List",
//     navbarName: "Table List",
//     icon: ContentPaste,
//     component: TableList
//   },
//   {
//     path: "/typography",
//     sidebarName: "Typography",
//     navbarName: "Typography",
//     icon: LibraryBooks,
//     component: Typography
//   },
//   {
//     path: "/icons",
//     sidebarName: "Icons",
//     navbarName: "Icons",
//     icon: BubbleChart,
//     component: Icons
//   },
//   {
//     path: "/notifications",
//     sidebarName: "Notifications",
//     navbarName: "Notifications",
//     icon: Notifications,
//     component: NotificationsPage
//   },
//   { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
// ];

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Bettapoint",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "Practice Game",
    navbarName: "Table List",
    icon: VideogameAsset,
    component: TableList
  },
  {
    path: "/icons",
    sidebarName: "Matches for the Week",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/typography",
    sidebarName: "Leaderboard",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Activity",
    navbarName: "Icons",
    icon: ShowChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "History",
    navbarName: "Notifications",
    icon: History,
    component: NotificationsPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
