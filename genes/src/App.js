import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {getToken, getAllCourses, getCourse} from './getAPI'

import CoursePage from "./scenes/CoursePage/CoursePage";
import MainPage from "./scenes/MainPage/MainPage";

const App = () =>  {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(localStorage.getItem('id') || '');
  useEffect(() => {
    getAllCourses()
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const getId = (data) => {
    setId(data);
    localStorage.setItem('id', data);
    console.log(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage courses={courses} isLoading={isLoading} getId={getId}/>} />
        {!isLoading && (
          <Route path="/course/:id" element={<CoursePage id={id}/>} />
        )}
      </Routes>
    </Router>
  );
}


export default App;