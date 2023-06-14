
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/home';
import Profile from './components/profile';

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

        {/* <Route path="/register" element={<Register/>} /> */}
        {/* <Route path="/parent" element={<h1>parent component</h1>}/>
        <Route path="/teachers" element={<h1>teacherscomponent</h1>}/> */}
        <Route path="/contact-us" element={<h1>contact-us component</h1>}/>
        {/* <Route path="/Signup" element={<Signup/>}/> */}
      </Routes>
      </BrowserRouter>
      
      
      <Footer/>
    </div>
  );
}

export default App;
