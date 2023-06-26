import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { id: 1, name: 'Mathematics' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'History' },
  // Add more subjects as needed
];

const SubjectSelectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const navigate = useNavigate();

  const handleSubjectSelect = (subjectId) => {
    const isSubjectSelected = selectedSubjects.includes(subjectId);

    if (isSubjectSelected) {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  const handleNextButtonClick = () => {
    // Perform any necessary actions before navigating to the next page

    // Example: Navigate to the next page using React Router
    navigate('/home');
  };

  const renderSubjects = () => {
    return subjects.map((subject) => (
      <div key={subject.id}>
        <input
          type="checkbox"
          checked={selectedSubjects.includes(subject.id)}
          onChange={() => handleSubjectSelect(subject.id)}
        />
        <label>{subject.name}</label>
      </div>
    ));
  };

  return (
    <div className='form-group'>
      <h2>Select Subjects</h2>
      {renderSubjects()}
      <button onClick={handleNextButtonClick}>Next</button>
    </div>
  );
};

export default SubjectSelectPage;
