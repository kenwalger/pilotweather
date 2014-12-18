//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var http = require("http");



//Print out message
function printMessage(airport, name, delay, updated, weather, visibility) {

  if(!delay) {
    var message = "As of " + updated + ", " + name + " (" + airport.toUpperCase() + ") is currently delayed with " + weather + " conditions and " + visibility + " miles of visibility";
    console.log(message);
    } else {
    var message = "As of " + updated + ", " + name + " (" + airport.toUpperCase() + ") is not currently delayed with " + weather + " conditions and " + visibility + " miles of visibility";
    console.log(message);
  }
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}

function get(airport){
  //Connect to the API URL (http://services.faa.gov/airport/status/airport?format=JSON)
  // AIRPORT is the three character identifier for airports in the USA
  var request = http.get("http://services.faa.gov/airport/status/" + airport +"?format=JSON", function(response){
    var body = "";
  //Read the data
    response.on('data', function (chunk) {
      body += chunk;    
    });
  
    response.on('end', function (){
      if(response.statusCode === 200) {
        try {          
          //Parse the data       
          var airportInfo = JSON.parse(body);
          //Print the data
          printMessage(
            airport, 
            airportInfo.name,
            airportInfo.delay, 
            airportInfo.weather.meta.updated,
            airportInfo.weather.weather,
            airportInfo.weather.visibility);
        } catch(error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the information for " + airport +". (" + http.STATUS_CODES [response.statusCode] +")"});
      }
    });


   
  });
  
  //Connection Error
  request.on("error", printError);
}

module.exports.get = get;