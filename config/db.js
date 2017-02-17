
module.exports = {
    hostname:process.env.MONGO_DATABASE_PORT_27017_TCP_ADDR || 'localhost',
    port:'27017',
    
    //database 
    collection:'things'
}
