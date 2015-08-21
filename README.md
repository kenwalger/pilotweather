pilotweather
============

Node.js app to get the airport status for any major airport, including known delays and 
weather data from NOAA..

The JSON data comes from http://weather.gov and the NOAA's National Weather Service via the FAA's 
API (instructions for the API http://services.faa.gov/).

###Installation



###Useage

From a command prompt, run the app using

`node app` + the three character code (IATA) of the airport of which you want to check the weather.

###Example

To check the status of Portland International Airport in Portland, Oregon (PDX) you would use:

`node app pdx`
