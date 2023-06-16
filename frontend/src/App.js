
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/home';
import Profile from './components/profile';
import Studentsignin from './components/studentsignin';
import Parentsignin from './components/parentsignin';
import Teachersignin from './components/teachersignin';
import Parentmainpage from './components/parentmainpage';

function App() {
  // const handleProfileSelection = (profile) => {
  //   console.log(`Selected profile: ${profile}`);
  // };
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Nav/>

      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>

        <Route path="/studentsignin" element={<Studentsignin/>} />
        <Route path="/parentsignin" element={<Parentsignin/>}/>
        <Route path="/teachersignin" element={<Teachersignin/>}/>
        <Route path="/parentmainpage" element={<Parentmainpage/>}/>
        {/* <Route path="/Signup" element={<Signup/>}/> */} 
      </Routes>
      </BrowserRouter>
      
      
      <Footer/>
    </div>
  );
}

export default App;
