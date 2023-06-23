
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/home';
import Profile from './components/profile';
import Studentsignin from './components/studentsignin';
import ParentSignin from './components/parentsignin'
import Teachersignin from './components/teachersignin';
import ParentRegister from './components/parentregister'
import Studentregister from './components/studentregister';
import Teacherregister from './components/teacherregister';
import Studentmainpage from './components/studentmainpage';
import ParentMainPage from './components/parentmainpage';
import TeacherMainPage from './components/teacherMainPage';


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
        <Route path="/parentSignin" element={<ParentSignin/>}/>
        <Route path="/teachersignin" element={<Teachersignin/>}/>
       
        <Route path="/parentRegister" element={<ParentRegister/>}/>
        <Route path="/studentregister" element={<Studentregister/>}/>
        <Route path="/teacherregister" element={<Teacherregister/>}/>
        <Route path="/parentMainPage" element={<ParentMainPage/>}/>
        <Route path="/studentmainpage" element={<Studentmainpage/>}/>
        <Route path="/teacherMainPage" element={<TeacherMainPage/>}/>

   
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
