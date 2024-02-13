import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* Route improts */
import Main from './Main';
import SignUp from './Credential/SignUp';
import SignIn from './Credential/SignIn';
import Explore from './Explore';

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/explore",
    element: <Explore/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
