import Sidebar from "./components/Sidebar/Sidebar.component";
import BasicNavbar from "./components/Navbars/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <BasicNavbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
