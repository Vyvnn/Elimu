import React, { useState } from 'react';
import Studentdata from './studentdata';
import {FaUserCircle} from 'react-icons/fa'

const Parentmainpage = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  const handleChildSelection = (child) => {
    setSelectedChild(child);
  };

  return (
    <div>
      <h1>Student List</h1>
      <div>
        {Studentdata
          .sort((a, b) => a.id - b.id) // Sort by oldest child to youngest
          .map((child) => (
            
            <div key={child.id} onClick={() => handleChildSelection(child)}>
              <img src={child.picture} alt={child.name} />
              <h2>{child.name}</h2>
              <p>{child.grade}</p>
              <p>{child.school}</p>
            </div>
          ))}
      </div>
      

      {selectedChild && (
        <div>
          <h1>Child Details</h1>
          <h2>{selectedChild.name}</h2>
          <p>Grade: {selectedChild.grade}</p>
          <h3>Attendance: {selectedChild.attendance}%</h3>
          <p>Performance: {selectedChild.performance}</p>
          <h3>Assessment Results</h3>
          <ul>
            {selectedChild.assessmentResults.map((result, index) => (
              <li key={index}>Assessment {index + 1}: {result}</li>
            ))}
          </ul>
          <p>Syllabus Coverage: {selectedChild.syllabusCoverage}%</p>
          <h3>Teacher Remarks</h3>
          <ul>
            {selectedChild.teacherRemarks.map((remark, index) => (
              <li key={index}>{remark}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Parentmainpage;
