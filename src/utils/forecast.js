const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a870974b9b0a2638aebb4d6436d67161&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'The humidity is '+body.current.humidity +'.The weather is ' + body.current.weather_descriptions[0] +'.It is currently ' + body.current.temperature + ' degress out. It feelslike ' + body.current.feelslike+ '% degrees.')
        }
    })
}

module.exports = forecast