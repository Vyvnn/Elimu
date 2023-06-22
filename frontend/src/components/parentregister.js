
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedChild, setSelectedChild] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');



    const handleChildChange = (e) => {
      setSelectedChild(e.target.value);
    };

    // const handleChildChange = (e) => {
    //   setSelectedGrade(e.target.value);
    // };
    const handleSubmit = (e) => {
      e.preventDefault();
    // Create an object with the form data
    // const  = {
    //   parentName,
    //   email,
    //   password,
    //   childName,
    //   grade,
    // };

    // Send the form data to the backend API for registration
    // You can use libraries like Axios or fetch to make the HTTP request
    // Example: axios.post('/api/register', formData)
    // Handle the backend response as needed
  };

  return (
    <div className="form-group">
    <form  className='container' onSubmit={handleSubmit}>
      <label>
        Parent's Name:
        <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
       <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type=" confirm password " value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
          Child Name:
          <select value={selectedChild} onChange={handleChildChange}>
            <option value="">Select Child</option>
            <option value="Child A">Child A</option>
            <option value="Child B">Child B</option>
            <option value="Child C">Child C</option>
            <option value="Child D">Child D</option>
            <option value="Child E">Child E</option>
            <option value="Child B">Child F</option>
            <option value="Child C">Child G</option>
            <option value="Child D">Child H</option>
            <option value="Child E">Child I</option>
            {/* Add more options for each child */}
          </select>
        </label>
      <br />
      <label>
        Grade:
        
          <select value={selectedGrade} onChange={handleChildChange}>
            <option value="">Select Class</option>
            <option value="Form 1">Form 1</option>
            <option value="Form 2">Form 2</option>
            <option value="Form 3">Form 3</option>
            <option value="Form 4">Form 4</option>
            
            {/* Add more options for each child */}
          </select>
        </label>



       
    
     {/* Other form inputs for password, child's name, grade, etc. */}
      <br />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
