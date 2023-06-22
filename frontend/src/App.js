
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/home';
import Profile from './components/profile';
import Studentsignin from './components/studentsignin';
import Parentsignin from './components/parentsignin';
import Teachersignin from './components/teachersignin';
import Parentmainpage from './components/parentmainpage';
import Parentregister from './components/parentregister';
import EmailValidation from './components/parentregister';
import Studentregister from './components/studentregister';


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
        <Route path="/parentregister" element={<Parentregister/>}/>
        <Route path="/emailvalidation" element={<EmailValidation/>}/>
        <Route path="/studentregister" element={<Studentregister/>}/>
        {/* <AuthProvider>
              <Switch>
          <Route exact path="/signin">
            <ParentComponent />
          </Route>
          <PrivateRoute path="/parentmainpage">
            <Parentmainpage />
          </PrivateRoute>
        </Switch>
     
    </AuthProvider> */}

      </Routes>
      </BrowserRouter>
      
      
      <Footer/>
    </div>
  );
}

export default App;
