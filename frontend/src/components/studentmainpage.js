import React, { useState } from 'react';

const Studentmainpage = ({ onSave }) => {
  const [performance, setPerformance] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSave = () => {
    onSave({ performance, remarks });
    setPerformance('');
    setRemarks('');
  };

  return (
    <div>
      <h3>Student Performance</h3>
      <label>
        Performance:
        <input type="text" value={performance} onChange={(e) => setPerformance(e.target.value)} />
      </label>
      <label>
        Remarks:
        <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Studentmainpage;
