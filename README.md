## How to run app locally

To run app locally - uncomment <br>
<i>const response = await fetch("http://localhost:4000/api/tasks")</i> <br>
in Home.jsx file <br>
To run frontend locally, cd into frontend folder and run: npm run dev <br>
To run backend locally, cd into backend folder and run: npm run dev <br>
<br>

## Production

To see deployed app on a temporary domain visit: <br>
<i>https://darksalmon-parrot-134599.hostingersite.com/</i><br>
<strong>If no task visible at first, please wait around 20 second and refresh the page.</strong><br>
<strong>Delay is caused due Node.js backend deployed on Render free tier. Server spin down when inactive, hence delay. </strong><br>

## API Endpoints

GET /tasks --> Gets all tasks <br>
GET /tasks/:id --> Gets single task by id <br>
POST /tasks --> Creates a new task <br>
PATCH /tasks/:id --> Updates a single task by id<br>
DELETE /tasks/:id --> Deletes a single task by id <br>
