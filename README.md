# student-app-node-server
 student-app-node-server

# End-points:

## Courses
1. GET /api/course -> retrieves all the courses
2. POST /api/course -> adds a new course
sample payload:
{
	"name": "newtest",
	"type": "test",
	"subjects": "subject6225;subject4522244"
}

## University
1. GET /api/uni -> retrieve data for all universities
2. POST /api/uni -> Adds a new university
sample payload:
{
    "name": "Concordiatest",
    "type": "Science",
    "Address": {
        "city": "Montreal",
        "zipcode": "ABC111",
        "country": "Canada"
    },
    "url": "http://www.test.com",
    "totalStudents": 34000,
    "establishedDate": 1286649000000,
    "courses": "62249644ef8192b8933ab8a8"
}

3. PUT /api/uni/:name -> updates a univerisity
4. DELETE /api/uni/:name -> deletes a university


## Students
1. GET /api/student -> retrieves data for all students
2. POST /api/student -> adds a new student
sample payload:
{
  "rollno": 8999,
  "name": "NewStudent",
  "degreeEnrolled": "Bachelors",
  "address": {
    "city": "Pune",
    "zipcode": "IND111",
    "country": "India"
  },
  "url": "https://www.test.com",
  "grade": 82,
  "enrolledDate": 1609439400000,
  "course": "622496a0ef8192b8933ab8b4",
  "university": "6224a9a9945bdd73dfa24078"
}
3. PUT /api/student/:rollno -> updates a student
4. DELETE /api/student/:rollno -> deletes a student
5. GET /api/student/:rollno -> retrieves data for one student by rollno
6. GET /api/student/byuni/:id -> retrieves data for all students for a given university
7. GET /api/student/bysubject/:id -> retrieves data for average grades per course for all students in a given university

hosting url:
https://studentnodeapp.herokuapp.com/
