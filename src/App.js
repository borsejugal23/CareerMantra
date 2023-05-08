

import  Navbar  from './components/Navbar'
import Footer from './components/Footer';
import { MainRoutes } from "./components/MainRoutes";
import { AdminMainRoutes } from './pages/AdminPages/AdminMainRoutes';



function App() {
  return (
    <div >
  
    <Navbar />
    <MainRoutes/>
   {/* <AdminMainRoutes/> */}
    <Footer />

    </div>
  );
}

export default App;
