
    // ParentComponent.js

import React from 'react';
import ParentMainPage from './parentmainpage';

const ParentComponent = () => {
  const studentData = [
    { id: 1, name: "John", class: "Grade 10", subjects: ["Math", "Science"], teacher: "Mr. Smith", remark: "Good student" },
  { id: 2, name: "Jane", class: "Grade 9", subjects: ["English", "History"], teacher: "Ms. Johnson", remark: "Hardworking student" },
  ];

  return (
    <div>
      {/* Pass the studentData prop to ParentMainPage */}
      <ParentMainPage studentData={studentData} />
    </div>
  );
};

export default ParentComponent;

  

