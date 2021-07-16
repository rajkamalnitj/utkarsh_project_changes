
const request = require('request')

const psearch = ( callback) => {
    const url ='https://api.thedogapi.com/v1/breeds?attach_breed=1&page=2&limit=10';
    
    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to  service!', undefined);

        } 
        else {
           // console.log()
            callback(undefined,res.body);
        }
    })
}

module.exports = psearch; 