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




    </div>

  );
}

export default Home;