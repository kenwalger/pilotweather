pilotweather
============

Node.js app to check the current status of US airports and their associated weather conditions.

The JSON data comes from http://weather.gov and the NOAA's National Weather Service via the FAA's 
API (instructions for the API http://services.faa.gov/).


From a command prompt, run the app using

`node app` + the three character code (IATA) of the airport of which you want to check the weather.

###Example

To check the status of Portland International Airport in Portland, Oregon (PDX) you would use:

`node app pdx`
