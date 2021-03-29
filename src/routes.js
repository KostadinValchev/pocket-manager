import Account from "./pages/account/account";
import Summary from "./pages/summary/summary";
import Wallet from "./pages/wallet/wallet";
import Record from "./pages/record/record.component";

import WithSpinner from "./components/with-spinner/with-spinner.component";

const SummaryWithSpinner = WithSpinner(Summary);

const dashboardRoutes = [
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/summary",
    name: "Summary",
    component: SummaryWithSpinner,
  },
  {
    path: "/add-wallet",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/add-record",
    name: "Record",
    component: Record,
  },
];

export default dashboardRoutes;
