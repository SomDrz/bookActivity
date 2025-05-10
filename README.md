
Tecnology i used :

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: jwt

Validation: express-validator

Password Hashing: bcrypt

Testing Tool: Postman
 
 
 1 Installation 
 
    git clone  https://github.com/SomDrz/bookActivity.git

    npm install

2 Config environment

      PORT= 8000
      
      MONGO_URI= give your dbs uri
      
      JWT_SECRET =your_jwt_secret

 3 run surver 

      npm start or nodemon

4 test apis using postman :

   import json file in your postman to check apis or use below demo jsons

   authentication apis :

   1 for register user (post apis):  http://127.0.0.1:8000/api/auth/register  
   
       
  {
  "name": "mohan",
  "email": "mohan@gmail.com",
  "phone": "9876543098",
  "password": "mohan234"
  }


2  alogin user (post apis): http://127.0.0.1:8000/api/auth/login

 
  {
  "email": "mohan@gmail.com",
  "password": "mohan234"
   }

      

   3 create Activty apis(post) : http://127.0.0.1:8000/api/activities/create

   
        
   {
    "title": "football Match",
    "description": "footabll match nearn jp nagar",
    "location": "jp nagar",
    "datetime": "2025-05-10T15:00:00Z"
  }


  2 book API (post)   http://127.0.0.1:8000/api/activities/book/:id

  3 get my booking(get) : http://127.0.0.1:8000/api/activities/my-bookings

  4 get list of activity : http://127.0.0.1:8000/api/activities/

  
      
      

        

        
