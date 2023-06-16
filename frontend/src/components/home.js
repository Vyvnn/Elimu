import '../index.css';

import { Link } from "react-router-dom";


const Home= () => {
    return ( 
      
<div>
  <div id="welcome"><p>Welcome to</p>

  <h3>Elimu</h3>

  <Link to={"/profile"}id="welcomesignin" ><button >SIGN IN 
     
     </button></Link>
  


  </div>

  


</div>

     );
}
 
export default Home;