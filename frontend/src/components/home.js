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


    </div>

  );
}

export default Home;