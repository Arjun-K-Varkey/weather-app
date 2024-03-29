const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYXJqdW5rdmFya2V5IiwiYSI6ImNrdTU2Y2NzYjJrdzgybnFocXlxMmV1ZWkifQ.X-S2cmxIqe3RQfUJfw2qIw'
    request({url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to location service',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location.Try another search.',undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
        })
}

module.exports=geocode