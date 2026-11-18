import React from 'react';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router";
import './App.css'
import { Navbar } from './custom-components/Navbar/navbar'
function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default App
