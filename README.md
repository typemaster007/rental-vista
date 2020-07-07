# Advanced Web Services
## Flask Backend
```
Date Created: July 07, 2020
Date Modified: -
Group: 5
```

### Description:
We understand what MongoDB Atlas is and how it works. We used **pymongo** in this tutorial to communicate with MongoDB Atlas and updated old API endpoint to make it work with mongodb database.

As assigned we developed following API endpoints:

1. GET request to get all user data from MongoDB database
2. GET request with param to get data with specific email
3. PUT request with data passed in body to update existing username in the database with a new one
4. Post request with data passed in body to add new data

### Working:

1. **GET**: API pulls all data from server when requested without param. One can use URL shown below with *GET* method in postman to get results.  
*URL:* `https://csci5709-tutorial.herokuapp.com/users`

2. **GET with username**: API pulls specific data from server. One can use URL shown below with *GET* method in postman to get results.  
*URL:* `https://csci5709-tutorial.herokuapp.com/getUser`

3. **PUT**: To check the PUT method, you can use URL given below in POSTMAN with the *PUT* method and body as shown below.  
*URL:* `https://csci5709-tutorial.herokuapp.com/put`  
The username field is the old username to be replaced, the newname is the new username to replace the old one.  
*Body:*
    ```
    {
    "username": "user1",
    "newname": "user443"
    }
    ``` 

4. **POST**: API pushes new data to the databse. With the help of _request.get_json_ JSON data is obtained from body and then the data is pushed to the databse. To check the *POST* method, you can use URL given below in POSTMAN with the POST method and body as shown below. 
*URL:* `https://csci5709-tutorial.herokuapp.com/adduser`  
*Body:*
    ```
    {
    "username": "user1",
    "email":"abc@pqr.com"
    }
    ``` 

### Team Contribution:

|      Name          | 							Action                                       |
|--------------------|-----------------------------------------------------------------------|
| Amogh Bangalore    | Created HTTP Put API to update username in MongoDB                    |
| Gaurav Anand       | Built Endpoint to get all the infomration                             |
| Harshitha M S      | Created database in MongoDB Atlas and created a sample get method     |
| Krupa Patel        | Generated GET API to retrieve data using parameter                    |
| Naitik Prajapati   | Build POST Endpoint post user information                             |
| Sahil Fruitwala    | Modification of Code, Created Readme file                             |

### Tasks Compeleted

1. Used previously created Virtual environment with flask in it
2. Created MongoDB Atlas cloud database instance with collections.
2. Created four Http API endpoints using Flask
3. Test endpoints using Postman
4. Deploy repository on heroku

Maintainer access given to all the TA's and Markers.

### Group Members

| Name               | Banner ID    | Email                   |
|--------------------|--------------|-------------------------|
| Amogh Bangalore    | B00833535    | am210633@dal.ca         |
| Gaurav Anand       | B00832139    | gaurav.anand@dal.ca     |
| Harshitha M S      | B00838019    | Harshitha.MS@dal.ca     |
| Krupa Patel        | B00828120    | Krupa.Patel@dal.ca      |
| Naitik Prajapati   | B00856835    | naitik.prajapati@dal.ca |
| Sahil Fruitwala    | B00844489    | sahil.fruitwala@dal.ca  |


Link to the Github repository: https://github.com/SahilFruitwala/aws-tutorial

Link of heroku application: https://aws-tutorial.herokuapp.com/

## Reference

1. "Processing Incoming Request Data in Flask", Scotch, 2020. [Online]. Available: https://scotch.io/bar-talk/processing-incoming-request-data-in-flask. [Accessed: 23- Jun- 2020]
2. M. Grinberg, "Designing a RESTful API with Python and Flask", Blog.miguelgrinberg.com, 2020. [Online]. Available: https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask. [Accessed: 23- Jun- 2020]
3. H. Flask?, A. Stone, I. Cheffer and S. Mukherjee, "How can I get the named parameters from a URL using Flask?", Stack Overflow, 2020. [Online]. Available: https://stackoverflow.com/questions/24892035/how-can-i-get-the-named-parameters-from-a-url-using-flask. [Accessed: 23- Jun- 2020]
4. J. Nash, “Flask HTTP methods: Learning Flask Ep. 19,” Home, 26-Feb-2019. [Online]. Available: https://pythonise.com/series/learning-flask/flask-http-methods. [Accessed: 22-Jun-2020].

