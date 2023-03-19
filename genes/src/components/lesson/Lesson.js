import React, {useState} from "react";
import './lesson.css';

const Lesson = ({lessonData, onClick}) => {
    //const {title, duration, order, type, status, link, previewImageLink} = lessonData;

    const [title, setTitle] = useState(lessonData.title); 
    const [duration, setDuration] = useState(lessonData.duration); 
    const [order, setOrder] = useState(lessonData.order); 
    const [type, setType] = useState(lessonData.type); 
    const [lessonStatus, setStatus] = useState(lessonData.status); 
    const [link, setLink] = useState(lessonData.link); 
    const [imageLink, setImageLink] = useState(lessonData.previewImageLink);

    const handleOnClick = () => {
        const data = {
          title: title,
          link: link,
          order: order,
          type : type,
          lessonStatus : lessonStatus
        };
        
        onClick(data);
      };
      
   

    return (<div className="lesson" onClick={handleOnClick}>
        <h2>{title}</h2>
        <div className="duration ">{duration} s.</div>
        <div className="num">Lesson number : {order}</div>
        {lessonStatus === 'unlocked' ? (
            <div className="unlocked">click to watch</div>
            ) : (
            <div className='locked'>can't watch yet</div>
            )}
            <div className="image">
                <img src={`${imageLink}/lesson-${order}.webp`}></img>   
            </div>    
         
    </div>)
}

export default Lesson;