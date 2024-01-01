import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import HomeSimple from './pages/HomeSimple';

import ColorQuiz from './challenges/01/ColorQuiz'
import WordSearch from './challenges/02/WordSearch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSimple />,
  },
  {
    path: "challenge/",
    children: [
      {
        path: "1",
        element: <ColorQuiz />
      },
      {
        path: "2",
        element: <WordSearch />
      },
    ]
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
