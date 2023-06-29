import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { id: 1, name: 'Mathematics' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'History' },
  { id: 4, name: 'Kiswahili' },
  { id: 4, name: 'C.R.E' },
  { id: 4, name: 'Biology' },
  { id: 3, name: 'Physics' },
  { id: 4, name: 'Chemistry' },
  { id: 4, name: 'Geography' },
  { id: 4, name: 'History' },
  { id: 4, name: 'Business Studies' },
  { id: 4, name: 'I.R.E' },


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
    navigate('/student/studentmainpage');
  };

  const renderSubjects = () => {

    return (
      <div className='subjectdisplay'>
        {subjects.map((subject) => (
          <div className="subject" key={subject.id}>
            <input
              type="checkbox"
              checked={selectedSubjects.includes(subject.id)}
              onChange={() => handleSubjectSelect(subject.id)}
            />
            <label>{subject.name}</label>
          </div>
        ))}
      </div>
    );
  }
return (

  <div className='subjectheading' >
    <h2>Select Subjects</h2>
    {renderSubjects()}
    <button onClick={handleNextButtonClick}>Next</button>
  </div>
);
};


export default SubjectSelectPage;
