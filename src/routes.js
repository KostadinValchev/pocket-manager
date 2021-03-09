import Account from "./pages/account/account";
import Summary from "./pages/summary/summary";

const dashboardRoutes = [
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

export default dashboardRoutes;
