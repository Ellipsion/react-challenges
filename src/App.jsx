import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ColorQuiz from './components/ColorQuiz'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import HomeSimple from './pages/HomeSimple';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSimple />,
  },
  {
    path: "challenge/1",
    element: <ColorQuiz />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
