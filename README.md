- Explaination of approach:

- Technology stack:
    - Node.js
    - React.js
    - MySQL
    
Database Design:
- The SQL database consists of 2 tables namely users and batches.
- users table schema
    - _id (unique id for every user)
    - fullname (name of the user)
    - age (current age of the user)
    - email 
    - password 
    - currBatchId - (Current Batch id to specify in which batch the user is currently enrolled)
    - nextBatchId - (Next Batch id to specify in which batch the user wants to be in the upcomming month. Ideally current batch id and nextBatchId are same until next batch id is updated)

- batches table schema
    - _id (batch id)
    - instructorName (Name of the instructor who is alloted to the batch)
    - startTime (at what time the batch start)
    - endTime (till what time the batch ends)
    - fee (fees of the batch - constant(500) )
    - createdAt (when the batch was created)
    - updatedAt (when was the batch updated recently)

Endpoints in the app:
- User
    - register
    - login
    - get profile
    - update profile (change batch)
    - complete payment

- Batch
    - create batch
    - get specific batch
    - get all batches

- Validations:
    - age check (between 18-65)
    - email (valid or not)
    - password (more than 3 characters)
    - username (more than 3 characters)
    - startime of a batch not more than endtime

- Future scpoe:
    - Instructor table can be added to the database which consits of the following field
        - _id
        - profile
            - name
            - age
            - other info
        - fees
    The instructor id from instructor table will be a foreign key in the batch table. Instructor can be assigned to different batches with their id.  

    - Additional features
        - add instructor to batch
        - update fees of instructor
        - add more batches
        
    
