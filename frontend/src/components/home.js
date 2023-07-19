import '../index.css';

import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (

    <div className='homepage'>
      <div id="welcome">

        <h3>Elimu</h3>
        <br />
        <h3>A one stop shop bringing together parents, teachers and students. </h3>
        <Link to={"/profile"} id="welcomesignin" ><button id="welcomesignin" >SIGN IN


        </button></Link>



      </div>

      {/* <div>
        <p>Elimu is a classroom management tool that enables schools to bring parents, teachers and students into classroom communities so they can track and enhance classroom behavior in real-time.</p>

        <p>Elimu that helps build amazing classroom and school communities. Teachers give feedback to students for any skill, like “Working hard” and “Being curious.”  Parents view their child’s feedback, message directly with teachers . </p>

      </div> */}



      <section className="work-section section" id="section-2">
        <div className="container">
          <div className="row">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                
                <h3>Student</h3>
                <p>The student is able to view his grades and teachers remark.</p>
              </div>
            </div>
<div className='containerposition'>
            <div className="container">
            <div className="row">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                
                <h3>Parent</h3>
                <p>The parent is able to view specific student performance as well as the teachers remarks.</p>
              </div>
              </div>
              </div>
            </div>
            </div>


            <div className="container">
            <div className="row">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                
                <h3>Teacher</h3>
                <p>The teacher is able to give student grade and remarks per subject taken.</p>
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="title">
            <h2>Our Work</h2>
            </div>
        </div>
      </section>
    </div>
  );
};










export default Home;