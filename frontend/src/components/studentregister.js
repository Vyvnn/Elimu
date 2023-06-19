import EmailValidation from "./emailvalidation";

const Studentregister = () => {





  return (

    <div>
      <label htmlFor="full-name">FULL NAMES</label>
      <input type="text" placeholder="Enter Full name" name="full-name" id="full-name" required />

      <div>
        <EmailValidation />
        {/* <label htmlFor="email">EMAIL</label> */}
        {/* <input type="text" placeholder="Enter Email" name="email" id="email" maxlength="8"  required /> */}
      </div>
      <label for="subjects">Choose a subject:</label>
      <select id="subjects">
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
        <option value="Kiswahili">Kiswahili</option>
        <option value="C.R.E">C.R.E</option>
        <option value="I.R.E">I.R.E</option>
        <option value="Biology">Biology</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Business Studies">Business Studies</option>
      </select>


      <label for="interests">Choose a interest:</label>

      <select id="interests">
      <option value="Sports">Sports</option>
      <option value="Programming">Programming</option>
      <option value="Yoga">Yoga</option>
      <option value="Cooking">Cooking</option>
      <option value="Robotics">Robotics</option>
      </select>
    </div>




  );
}

export default Studentregister;
