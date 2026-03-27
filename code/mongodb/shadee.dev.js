// mongosh -u root -p --authenticationDatabase admin
// use shadee_dev 
//show dbs - montrer les tables
// db.dropDatabase() - supp database
// load("shadee.dev.js") - charger database
// show collections - montrer les collections
// db.contact.find - montrer les contacts


db.contact.insertMany([
    {
        email: 'user1@user.com', 
        subject: 'heyyy',
        message: 'hi',
        date: '2026-03-27'
    }, 
    {
        email: 'user2@user.com', 
        subject: 'hi',
        message: 'helloooo',
        date: '2026-03-27'  
    }, 
]);