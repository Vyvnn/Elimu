import EmailValidation from "./emailvalidation";

const Studentregister = () => {





    return ( 

<div>
<label htmlFor="full-name">FULL NAMES</label>
      <input type="text" placeholder="Enter Full name" name="full-name" id="full-name" required />

      <div>
        <EmailValidation />
        <label htmlFor="email">EMAIL</label>
        <input type="text" placeholder="Enter Email" name="email" id="email" maxlength="8"  required />
      </div>





</div>




     );
}
 
export default Studentregister  ;
