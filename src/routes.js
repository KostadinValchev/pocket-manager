import Account from "./pages/account/account";
import Summary from "./pages/summary/summary";
import Wallet from "./pages/wallet/wallet";
import AddRecord from "./pages/add-record/add-record.component";
import Records from "./pages/records/records.component";

// import WithSpinner from "./components/with-spinner/with-spinner.component";

// const SummaryWithSpinner = WithSpinner(Summary);

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
  {
    path: "/add-record",
    name: "Record",
    component: AddRecord,
  },
  {
    path: "/records",
    name: "Records",
    component: Records,
  },
];

export default dashboardRoutes;
