// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const PrivateRoute = ({ children, ...rest }) => {
//   const { isSignedIn } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isSignedIn ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// const ParentComponent = () => {
//   // ...
// };

// export default PrivateRoute;
