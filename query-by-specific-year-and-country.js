// importing mongodb libraries
const {MongoClient, ObjectID} = require('mongodb')

const connection_url = "mongodb://127.0.0.1:27017"
const databaseName = 'DataScienceDB'

MongoClient.connect(
    connection_url,
    { useUnifiedTopology: true },
    (error, client) => { 
        if (error) {
            return console.log("Unable to connect database!")
        }
        const db =  client.db(databaseName)
        //console.log("Database Successfully Connected!")

        db.collection('CO2EmissionFromNaturalGas').find({$and:[{Year:'2013'},{Location:'China'}]}).toArray(
            (error, CO2EmissionFromNaturalGas) => {
                // console.log(globalAvgTemp)
                CO2EmissionFromNaturalGas.forEach(function(CO2EmissionFromNaturalGas){
                    console.log(CO2EmissionFromNaturalGas.Location)
                    console.log(CO2EmissionFromNaturalGas.Year)
                    console.log(CO2EmissionFromNaturalGas.CO2KilotonnesEmitted)
                    console.log("================================")
                })
                
            }
        )
    }
)