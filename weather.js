//Problem: We need a simple way to look at weather and delay information for a specific airport
//Solution: Use Node.js to connect to the FAA's API to get weather information to print out

var http = require("http");

//Print out message
function printMessage(airport, name, delay, updated, weather, temp, wind, visibility, delayReason, delayTime) {

  if(delay == "true") {
        var message = "\n \nAs of " + updated + ", " + name + " (" + airport.toUpperCase()
        + ") is currently delayed due to " + delayReason +". \n" +
        "The average delay time is " + delayTime + ". \n" +
        "There are " + weather + " conditions and " + visibility + " miles of visibility. \n" +
        "The temperature is " + temp + " with wind from the " + wind +".\n \n";
    console.log(message);
    } else {
    var message = "\n \nAs of " + updated + ", " + name + " (" + airport.toUpperCase()
        + ") is not currently delayed. \n" +
        "There are " + weather + " conditions and " + visibility + " miles of visibility. \n" +
        "The temperature is " + temp + " with wind from the " + wind +".\n \n";
    console.log(message);
  }
}
// Print out error messages
function printError(error) {
  console.error(error.message);
}
function get(airport){
  //Connect to the API URL (http://services.faa.gov/airport/status/airport?format=JSON)
  // AIRPORT is the three character identifier for airports in the USA (IATA code)
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
            airportInfo.weather.temp,
            airportInfo.weather.wind,
            airportInfo.weather.visibility,
            airportInfo.status.reason,
            airportInfo.status.avgDelay);
        } catch(error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the information for " + airport +". ("
          + http.STATUS_CODES [response.statusCode] +")"});
      }
    });
  });
  //Connection Error
  request.on("error", printError);
}
module.exports.get = get;