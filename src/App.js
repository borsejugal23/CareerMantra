

import  Navbar  from './components/Navbar'
import Footer from './components/Footer';
import { MainRoutes } from "./components/MainRoutes";



function App() {
  return (
    <div className="App">
  
    <Navbar />
    <MainRoutes/>
  
    <Footer />
    
    </div>
  );
}

export default App;
