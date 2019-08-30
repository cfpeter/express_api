'use strict';

const fs = require('fs');
const lineReader = require('line-reader'),
Promise = require('bluebird');

module.exports = async () =>{ 
     

    const getLog = async () => {   
        const arrayOfErrorLog = [];
        
        var eachLine = await Promise.promisify(lineReader.eachLine);
        //unhandledRejectionException
        return eachLine('./combined.log', function(line) { 
            if(line.length){
                arrayOfErrorLog.push(JSON.parse(line))
            }
        }).then(function() {  
            return arrayOfErrorLog.slice().reverse()
        }).catch(function(err) {
            console.error('Reading log file error: ', err);
        }); 
  
    }

    return {
        getLog        
    }
}
  
