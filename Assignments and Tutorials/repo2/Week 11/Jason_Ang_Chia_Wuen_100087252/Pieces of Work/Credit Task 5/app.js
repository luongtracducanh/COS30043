var app = angular.module("weatherApp", []);

app.controller("weatherCTRL", function($scope, $http){
    
    // Card with Current Weather, Time, Data, Location
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/currentconditions/v1/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true
    // Backup JSON: currentConditions_backup.json
    $http.get("http://dataservice.accuweather.com/currentconditions/v1/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true")
    .then (
        // Request Success
        function (response){
            $scope.requestText1 = "";
            $scope.currentCond_data = response.data;
            angular.forEach($scope.currentCond_data, function(item){
                
                $scope.currentLocalTime = item.LocalObservationDateTime;
                $scope.stringArray = $scope.currentLocalTime.split("T");
                $scope.currentDate = $scope.stringArray[0];
                $scope.currentTime = $scope.stringArray[1].split("+")[0];
                
                $scope.currentWeather = item.WeatherText;
                $scope.currentTemp = item.Temperature.Metric.Value;
                $scope.currentPressure = item.Pressure.Metric.Value;
                $scope.currentWindSpeed = item.Wind.Speed.Metric.Value;
            });
        },
        // Request Error
        function (response){
            $scope.requestText1 = "Failed to obtain data from Accuweather.com.";
        }
    );
    
    // Acquire 12 Hours of Hourly Forecasts
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true
    // Backup JSON: twelveHour_backup.json
    $http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true")
    .then (
        // Request Success
        function(response){
            $scope.requestText2 = "";
            $scope.array1 = response.data;
            
            $scope.tempArray = [];
            $scope.wind = [];
            $scope.humidity = [];
            angular.forEach($scope.array1, function(item){
                $scope.tempArray.push(item.Temperature.Value);
                $scope.wind.push(item.Wind.Speed.Value);
                $scope.humidity.push(item.RelativeHumidity);
            });
            Highcharts.chart("chart1", {
                chart: {
                    type: "line"
                },
                title: {
                    text: "12 Hours of Hourly Forecasts"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["12 hours","24 hours","36 hours","48 hours","60 hours","72 hours","84 hours","96 hours","108 hours","120 hours","132 hours","144 hours"]
                },
                yAxis: {
                    title: {
                        text: "Value (C, km/h, %)"
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    name: "Temperature (C)",
                    data: $scope.tempArray
                },{
                    name: "Wind (km/h)",
                    data: $scope.wind
                },{
                    name: "Relative Humidity (%)",
                    data: $scope.humidity
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText2 = "Failed to obtain data from Accuweather.com."
        }
    );
    
    // 5 Day Weather Forecast
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/forecasts/v1/daily/5day/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true
    // Backup JSON: fiveDayForecast_backup.json
    $http.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true")
    .then (
        // Request Sucess
        function (response){
            $scope.requestText3 = "";
            // Points to Daily Forecasts part of the JSON data retrieved
            $scope.array2 = response.data.DailyForecasts;
            
            $scope.minTemp_array = [];
            $scope.maxTemp_array = [];
            $scope.thunderProb_array = [];
            $scope.rainProb_array = [];
            $scope.wind_array = [];
            
            angular.forEach($scope.array2, function(item){
                $scope.minTemp_array.push(item.Temperature.Minimum.Value);
                $scope.maxTemp_array.push(item.Temperature.Maximum.Value);
                $scope.thunderProb_array.push((item.Day.ThunderstormProbability + item.Night.ThunderstormProbability) / 2);
                $scope.rainProb_array.push((item.Day.RainProbability + item.Night.RainProbability) / 2);
                
                var avg_wind = ((item.Day.Wind.Speed.Value + item.Night.Wind.Speed.Value) / 2).toFixed(2);
                var wind = parseFloat(avg_wind);
                $scope.wind_array.push(wind);
            });
            Highcharts.chart("chart2",{
                chart: {
                    type: "line"
                },
                title: {
                    text: "5 Days of Forecasts"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5"]
                },
                yAxis: {
                    title: {
                        text: "Value (C, km/h, %)"
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    name: "Min Temperature (C)",
                    data: $scope.minTemp_array
                },{
                    name: "Max Temperature (C)",
                    data: $scope.maxTemp_array
                },{
                    name: "Wind Speed (km/h)",
                    data: $scope.wind_array
                },{
                    name: "Thunderstorm Probability (%)",
                    data: $scope.thunderProb_array
                },{
                    name: "Rain Probability (%)",
                    data: $scope.rainProb_array
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText3 = "Failed to obtain data from Accuweather.com."
        }
    );
    
    // 24 Hour Historical Current Conditions
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/currentconditions/v1/230204/historical/24?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true
    // Backup JSON: twentyfourHours_backup.json
    $http.get("http://dataservice.accuweather.com/currentconditions/v1/230204/historical/24?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true")
    .then (
        // Request Success
        function(response){
            $scope.requestText4 = "";
            $scope.array3 = response.data;
            
            $scope.highestTemp_array = [];
            $scope.lowestTemp_array = [];
            $scope.windSpeed_array = [];
            $scope.weatherType_array = [];
            angular.forEach($scope.array3, function(item){
                $scope.highestTemp_array.push(item.TemperatureSummary.Past24HourRange.Maximum.Metric.Value);
                $scope.lowestTemp_array.push(item.TemperatureSummary.Past24HourRange.Minimum.Metric.Value);
                $scope.windSpeed_array.push(item.Wind.Speed.Metric.Value);
                $scope.weatherType_array.push(item.WeatherText);
            });
            Highcharts.chart("chart3", {
                chart: {
                    type: "line"
                },
                title: {
                    text: "24-Hour Historical of Current Conditions"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["1st hour","2nd hour","3rd hour","4th hour","5th hour","6th hour","7th hour","8th hour","9th hour","10th hour","11th hour","12th hour","13th hour","14th hour","15th hour","16th hour","17th hour","18th hour","19th hour","20th hour","21st hour","22nd hour","23rd hour","24th hour",]
                },
                yAxis: {
                    title: {
                        text: "Value (C, km/h)"
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    name: "Highest Temperature (C)",
                    data: $scope.highestTemp_array
                },{
                    name: "Lowest Temperature (C)",
                    data: $scope.lowestTemp_array
                },{
                    name: "Wind Speed (km/h)",
                    data: $scope.windSpeed_array
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText4 = "Failed to obtain data from Accuweather.com.";
        }
    );
    
    // Additional Chart from Any Data From Accuweather API
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us
    // Backup JSON: topFiftyCities.json
    $http.get("http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us")
    .then (
        // Request Success
        function (response){
            $scope.requestText5 = "";
            $scope.array4 = response.data;
            
            $scope.city_array = [];
            $scope.city_temp = [];
            angular.forEach($scope.array4, function(item){
                $scope.city_array.push(item.EnglishName);
                $scope.city_temp.push(item.Temperature.Metric.Value);
            });
            
            Highcharts.chart("chart4", {
                chart: {
                    type: "column"
                },
                title: {
                    text: "Temperature of Top 50 Cities in the World"
                },
                subtitle:{
                    text: "Source: https://developer.accuweather.com/"
                },
                accessbility: {
                    announceNewData: {
                        enabled: true
                    }
                },
                xAxis: {
                    categories: $scope.city_array
                },
                yAxis: {
                    title: {
                        text: "Temperature (C)"
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    name: "Temperature",
                    colorByPoint: true,
                    data: $scope.city_temp
                }]
            });
        },
        // Request Error
        function (response){
            $scope.requestText5 = "Failed to obtain data from Accuweather.com.";
        }
    );
});