import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
//import Hello from './components/Hello';
// import Student from './components/Stateeg';
// import Counter from './components/Counter';
//import ParentCompoment from './components/parentCompoment';
//import UserGreet from './components/UserGreet';

import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';

//component
import Home from './components/pages/Home';
import About from './components/pages/About';
import Conatct from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/pages/AddUser';
import NameList from './components/NameList';
import Hooks from './components/Hooks/Hooks';
import EditUser from './components/pages/EditUser';
import DetailUser from './components/pages/DetailUser';
import ReduxEg from './components/Redux/ReduxEg';
import ReduxIncDec from './components/Redux/ReduxIncDec';
import FormControls from './components/Form/FormControls';
import HomeAnt from './components/Antdesign/HomeAnt';
import InsertUser from './components/Antdesign/InsertUser';
import EditAnt from './components/Antdesign/EditAnt';

//Redux
// import Store from './components/Redux/Store'
// import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">

      
       <div className='App'>
       <Router>
          <Navbar />
            <Routes>
              <Route  path ='/' element = {<Home/>}/>
              <Route  path ='/about' element = {<About/>} />
              <Route exact path ='/contact' element = {<Conatct/>} />
              <Route exact path ='*' element = {<PageNotFound/>} />
              <Route exact path ='/list' element={<NameList/>}/>
              <Route exact path ='/hook' element={<Hooks/>}/>
              <Route exact path ='/adduser' element={<AddUser/>}/>
              <Route  path ='/edituser/:id' element={<EditUser/>}/>
              <Route  path ='/detailuser/:id' element={<DetailUser/>}/>

              <Route  path ='/reduxeg' element={<ReduxEg/>}/>
              <Route  path ='/reduxincdec' element={<ReduxIncDec/>}/>
              <Route  path ='/formcontrol' element={<FormControls/>}/>
              <Route  path ='/homeant' element={<HomeAnt/>}/>
              <Route  path ='/insertuser' element={<InsertUser/>}/>
              <Route  path ='/editant/:id' element={<EditAnt/>}/>
            </Routes>
        </Router>
    
      </div>
 
      {/* <ParentCompoment />
     <UserGreet/>
      {/* <Student /> */}
      {/* <Counter/>
      <Greet name='JSX' surName ='Java script'>
        <p> This is child Props</p>  
      </Greet>
      <Greet name='HTML'>
        <button onClick={() => alert("Hello World")} >click Me</button>
      </Greet>
      <Greet name='World'/>
    <h3><Welcome name='World'/></h3>  */}
      {/* <Hello name='JSX'/>
      <Hello name='HTML'/>
      <Hello name='world'/> */}
    </div>
  );
}

export default App;
