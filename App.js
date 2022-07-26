import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/form.js";

function App () {
  return (
    <div>
      <CustomNavbar/>
      <Sidebar/>
      <SignIn/>
    </div>
  );
};

export default App;
