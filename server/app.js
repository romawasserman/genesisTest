import  express  from 'express';
const app = express();
import fetch from 'node-fetch';



let token;
let courseList;

app.get('/api/token', async (req, res) => {
    try {
      const response = await fetch('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
      const data = await response.json();
      token = data.token;
      res.send(data);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });


app.get('/api/allcourses', async (req, res) => {

  try {
    const tokenResponse = await fetch('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
    const tokenData = await tokenResponse.json();
    const token = tokenData.token;
    const coursesResponse = await fetch('http://api.wisey.app/api/v1/core/preview-courses', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const coursesData = await coursesResponse.json();
    const courseList = coursesData;
    res.send(courseList);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


app.get('/api/course/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const tokenResponse = await fetch('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
    const tokenData = await tokenResponse.json();
    const token = tokenData.token;
    const response = await fetch(`http://api.wisey.app/api/v1/core/preview-courses/${courseId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

  




 
 
  
app.listen(5000, () => console.log('Server running on port 5000'));