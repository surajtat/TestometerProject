import Header from '../dashboard/header'
import Footer from '../dashboard/footer'
import { Outlet } from "react-router-dom";


function Home() {

    //var navigate = useNavigate();
    
    return (
      <>
      <Header></Header>

      <Outlet></Outlet>

       <Footer></Footer>
      
      </>
                
    );
  }
  
  export default Home;