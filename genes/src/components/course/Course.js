import React from "react";
import './course.css';
import star from '../../images/star.png';
import { useNavigate } from "react-router-dom";


const Course = ({ courseData, isLoading, onClick}) => {
    const { title, rating, lessonsCount, meta, previewImageLink, id } = courseData || {};
    const skills = meta.skills || [];
    const navigate = useNavigate();


    

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course" onClick={() => {{onClick(id); navigate(`/course/${id}`)}}} >
      <h2>{title}</h2>
      <div className="rating">Rating <b>: {rating}</b> <img src={star} alt={'star'}></img></div>
      <div className="num-lessons">Number of lessons in course : <b>{lessonsCount}</b> </div>
      <div className="skills">
        {skills.map((skill, index) => (
            <div key={index} className='skill'>{skill}</div>
        ))}
      </div>
      <div className="courseImage">
        <img src={`${previewImageLink}/cover.webp`} alt={title} />
      </div>  
    </div>
  );
};

export default Course;