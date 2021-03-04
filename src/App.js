import Sidebar from "./components/sidebar/Sidebar.component";
import Footer from "./components/footer/Footer.component";
import BasicNavbar from "./components/navbars/Navbar";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div className="wrapper">
      {/* <SignInAndSignUpPage /> */}
      <Sidebar />
      <div className="main-panel">
        <BasicNavbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
