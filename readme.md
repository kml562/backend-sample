Write a POST api /students/:rollNumber where rollNumber will be received in path params. This api will receive some new mobile and address values for a student in the request body. The details will be updated for student with the given roll number. Mobile number is unique in collection so you have to handle cases for duplicate mobile number and return proper error message.

Instead of using DB, let’s keep an array of student details in the route handler. In this api	we will update the mobile and address of the student with the specified roll number.

for kamal