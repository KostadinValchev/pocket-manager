import Account from "./pages/account/account";
import Summary from "./pages/summary/summary";
import Wallet from "./pages/wallet/wallet";

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
  {
    path: "/add-wallet",
    name: "Wallet",
    component: Wallet,
  },
];

export default dashboardRoutes;
