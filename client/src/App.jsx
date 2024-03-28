import React from "react";

// import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";
import DisplayTask from "./components/DisplayTask";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/updateTask" element={<UpdateTask />} />
          <Route path="/deleteTask" element={<DeleteTask />} />
          <Route path="/displayTask" element={<DisplayTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
