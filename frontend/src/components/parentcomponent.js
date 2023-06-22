// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ParentComponent = () => {
//   const [redirectToMainPage, setRedirectToMainPage] = useState(false);
//   const { isSignedIn, signIn } = useAuth();

//   const handleSignIn = () => {
//     signIn(); // Implement your sign-in logic here
//     setRedirectToMainPage(true);
//   };

//   if (redirectToMainPage && isSignedIn) {
//     return <Redirect to="/parentmainpage" />;
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <button onClick={handleSignIn}>Sign In</button>
//     </div>
//   );
// };

// export default ParentComponent;
