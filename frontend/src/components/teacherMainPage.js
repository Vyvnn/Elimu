
import React, { useState } from 'react';


const TeacherMainPage= ({ onSubmit }) =>{
    const [subject, setSubject] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(subject);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Select Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">-- Select Subject --</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default TeacherMainPage;