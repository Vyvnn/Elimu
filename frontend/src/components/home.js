import '../index.css';

import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (

    <div className='homepage'>
      <div id="welcome"><p>Welcome to</p>

        <h3>Elimu</h3>

        <Link to={"/profile"} id="welcomesignin" ><button id="welcomesignin" >SIGN IN
        <div className='homepic'><img src="./images/elimucover.jpg" alt="Parent" className="bottom-right-image"/></div>

        </button></Link>



      </div>




    </div>

  );
}

export default Home;