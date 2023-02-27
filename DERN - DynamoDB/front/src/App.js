import React from 'react'
import { useRoutes } from "react-router-dom"

import Home from './pages/Home'


function App() {
  return useRoutes([
      //Main
    {path:'/',element:<Home />},

      ]);
}

export default App;
