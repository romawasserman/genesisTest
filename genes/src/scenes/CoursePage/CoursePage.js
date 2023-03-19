import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Lesson from '../../components/lesson/Lesson';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { getCourse } from "../../getAPI";
import './coursePage.css';


const CoursePage = ({id}) => {

    const [course, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState('');
    const [isLesson, setIsLesson] = useState(false);
    const [lessonNumber, setLessonNumber] = useState('');
    const [isVideo, setIsVideo] = useState(false)


    useEffect(() => {
        getCourse(id)
          .then((data) => {
            console.log(data);
            setCourse(data);
            setIsLoading(false);
            setVideo(data.meta.courseVideoPreview.link);
            if (data.meta.courseVideoPreview.link) {
                setIsVideo(true);
            }
            setTitle(data.description);
          })
          .catch((error) => console.error(error));
      }, []);

      const handleClick = (data) => {
        if (data.lessonStatus === 'unlocked') {
            setTitle(data.title);
            setVideo(data.link)
            setIsLesson(true);
            setLessonNumber(data.order);
        }
        if (data.link) {
            setIsVideo(true)
        } else {
            setIsVideo(false)
        }

      };

      return (
        <div>
            {isLoading ? (
                <h2>loading...</h2>
            ) : (
                <>
                    <Header/>
                    
                    <div className='lessons-container'>
                        {course.lessons.map((lesson, index) => {
                            return <Lesson key={index} lessonData={lesson} onClick={(data) => handleClick(data)}/>
                        })}
                    </div>
                    <div className='left-panel'>
                        <h3>{title}</h3>
                        {isLesson ? (<div>Lesson : {lessonNumber}</div>) : (<></>)}
                        {isVideo ? (<VideoPlayer videoUrl={video}/>) : (<div>Its not a video</div>)}  
                    </div>
            
                </>    
            )}
        </div>
    )}
    

export default CoursePage
