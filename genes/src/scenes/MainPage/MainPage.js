import React, { useState, useEffect } from 'react';
import Course from '../../components/course/Course';
import Header from '../../components/header/Header';
import './mainPage.css';

const MainPage = ({ courses, isLoading, getId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(10);
  
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const sendId = (id) => {
        getId(id);
      };
      
  
    const Pagination = ({ coursesPerPage, totalCourses, paginate, currentPage }) => {
      const pageNumbers = [];
  
      for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
        pageNumbers.push(i);
      }
  
      return (
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      );
    };
    return (
      <div>
        <Header />
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="component-container">
            {currentCourses.map((course, index) => (
              <Course
                key={index}
                courseData={course}
                isLoading={isLoading}
                onClick={() => sendId(course.id)}
              />
            ))}
            <Pagination
              coursesPerPage={coursesPerPage}
              totalCourses={courses.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    );
  };
  

export default MainPage;
