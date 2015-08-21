pilotweather
============

Node.js app to get the airport status for any major airport, including known delays and 
weather data from NOAA..

The JSON data comes from http://weather.gov and the NOAA's National Weather Service via the FAA's 
API (instructions for the API http://services.faa.gov/).

###Installation

`npm install pilotweather`

###Useage

From a command prompt, run the app using

`node app` + the three character code (IATA) of the airport of which you want to check the weather.

###Example

To check the status of Portland International Airport in Portland, Oregon (PDX) you would use:

`node app pdx`


###Example of Returned Data

As of 6:53 PM Local, Portland International (PDX) is not currently delayed.
There are Fair conditions and 10 miles of visibility.
The temperature is 73.0 F (22.8 C) with wind from the North at 12.7mph.
