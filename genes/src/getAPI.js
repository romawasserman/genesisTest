export async function getToken() {
    try {
      const response = await fetch('http://localhost:5000/api/token');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export async function getAllCourses() {
    try {
      const response = await fetch('http://localhost:5000/api/allcourses');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export async function getCourse(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/course/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


/*export function getToken() {fetch('http://localhost:5000/api/token')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));}



export function getAllCourses() {
fetch('http://localhost:5000/api/allcourses')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));}

export function getCourse() {
fetch('http://localhost:5000/api/course')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));} 



//      <button onClick={getToken}>token</button>
//      <button onClick={getAllCourses}>allcourses</button>
//      <button onClick={getCourse}>OneCourse</button>
//      <img src={'https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track' + '/cover.webp'}></img> */