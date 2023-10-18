import { Route,Routes} from 'react-router-dom'
import AddLead from '../src/components/addLead';
import Home from './components/dashboard/home';
import AllUser from './components/alluser';
import Update from './components/udate';
import Countrys from './components/practice/countrys';


function App() {
  return (
    <>
    <Routes>
               
               <Route  path="/" element={ <Home/> }>
               <Route path ="addlead" element={ <AddLead/> }></Route>
               <Route path ="all_lead" element={ <AllUser/> }></Route>
               <Route path ="update" element={ <Update/> }></Route>
               <Route path ="countrys" element={ <Countrys/> }></Route>

               </Route>

    </Routes>

    </>
              
  );
}

export default App;
