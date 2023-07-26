import React, { useEffect, useState } from "react";

const ParentMainPage = () => {
  const [parentData, setParentData] = useState(null);
  const [parentName, setParentName] = useState('');
  const currentParent = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    // Get the user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      // If the user data exists and contains the name, set it in the state
      setParentName(currentUser.name);
    }
    // Fetch parent details from the API
    fetch(`/api/parents`)
      .then((response) => response.json())
      .then((data) => setParentData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!parentData) {
    // You can show a loading state while fetching the data
    return (
 
    <div>
      <h2>Welcome, {currentParent.existingParent.parentName}!</h2>
      <p>Student DETAILS: { parentData?.student_Id}</p>
    </div>
  );
}
};

export default ParentMainPage;
