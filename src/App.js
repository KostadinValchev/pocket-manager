import Sidebar from "./components/Sidebar/Sidebar.component";
import BasicNavbar from "./components/Navbars/Navbar";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <BasicNavbar />
      </div>
    </div>
  );
}

export default App;
