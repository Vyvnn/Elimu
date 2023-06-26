
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/home';
import Profile from './components/profile';
import Studentsignin from './components/student/studentsignin';
import ParentSignin from './components/parent/parentsignin'
import Teachersignin from './components/teacher/teachersignin';
import ParentRegister from './components/parent/parentregister'
import Studentregister from './components/student/studentregister';
import Teacherregister from './components/teacher/teacherregister';
import Studentmainpage from './components/student/studentmainpage';
import ParentMainPage from './components/parent/parentmainpage';
import TeacherMainPage from './components/teacher/teacherMainPage';
import SubjectSelectPage from './components/student/subjectsSelectPage';
import ContactUs from './components/contact_Us';




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

        <Route path="/student/studentsignin" element={<Studentsignin/>} />
        <Route path="/parent/parentSignin" element={<ParentSignin/>}/>
        <Route path="/teacher/teachersignin" element={<Teachersignin/>}/>
       
        <Route path="/parent/parentRegister" element={<ParentRegister/>}/>
        <Route path="/student/studentregister" element={<Studentregister/>}/>
        <Route path="/teacher/teacherregister" element={<Teacherregister/>}/>
        <Route path="/parent/parentmainpage" element={<ParentMainPage/>}/>
       
        <Route path="/student/studentmainpage" element={<Studentmainpage/>}/>
        <Route path="/teacher/teacherMainpage" element={<TeacherMainPage/>}/>
        <Route path="/student/subjectsSelectPage" element={<SubjectSelectPage />} />

        <Route path="/contact_Us" element={<ContactUs />} />

   
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
