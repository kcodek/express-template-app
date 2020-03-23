require('dotenv').config();


const port = process.env.PORT || 3000;
console.log(`Your port is ${process.env.PORT}`); 

// const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/test"
// console.log(mongoURL, port)

const elasticURL = process.env.ELASTIC_URL  || "http://localhost:9200"

const config = {
    app: {
      port
    },
    db: {
      elasticURL
    }
};


module.exports=config

/**
 * .env
NODE_ENV=development
PORT=3003


# Set your database/API connection information here
# MONGO_USERNAME=
# MONGO_PASSWORD=
MONGO_URL=



ELASTIC_URL=http://localhost:9200
 */