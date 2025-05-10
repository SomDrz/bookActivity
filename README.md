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

2  alogin user (post apis) : http://127.0.0.1:8000/api/auth/login
 
  {
  "email": "mohan@gmail.com",
  "password": "mohan234"
   }

      

   2 Activty apis :
        
      create 
      
      http://127.0.0.1:8000/api/activities/create

        

        
