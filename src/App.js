import "./App.css";
import React from "react";
import Discussion from "./components/Discussion/Discussion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
