# SOFKA CHALLENGE FOR SORKA U - FELIPE RAMIREZ RIVERA - WEB DEVELOPMENT BILINGUAL PROGRAM
Personal repository for my challenge project.

All the files you need are located inside the src directory.

# DATABASE
First of all you will need to create the database into your system. You will need to have installed MYSQL, you will login using: mysql -u root -h localhost -p .  

Then you will have to open the file database.sql in your editor, copying all the content of the file and pasting it inside the mysql command line interface. There should be no prooblem with this. This will create a database called questions_db, and inside of it will create two tables, one called questions and the other one called users.

In order to connect node.js with mysql you will have to make three simple changes:
