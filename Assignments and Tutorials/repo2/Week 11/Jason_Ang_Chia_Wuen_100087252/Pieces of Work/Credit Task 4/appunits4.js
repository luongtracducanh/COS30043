var app = angular.module("unitsApp", []);

app.controller("unitsCTRL", function($scope, $http){
    // Variables
    $scope.coreTotal = 0;
    $scope.softDevTotal = 0;
    $scope.systAnaTotal = 0;
    $scope.electiveTotal = 0;
    $scope.netTotal = 0;
    
    // Retrieves data from 'moredata.json' file to display in table
    $http.get("moredata.json")
    .then (
        function(response){
            $scope.objArray = response.data;
            // Aggregation part
            angular.forEach($scope.objArray, function(value, key){
                if (value.type === "Core"){
                    $scope.coreTotal += 1;
                    $scope.test = $scope.coreTotal;
                }else if (value.type === "Software Development") {
                    $scope.softDevTotal += 1; 
                }else if (value.type === "Systems Analysis"){
                    $scope.systAnaTotal += 1;
                }else if (value.type === "Elective"){
                    $scope.electiveTotal += 1;
                }else if (value.type === "Network"){
                    $scope.netTotal += 1;
                }
            });
            
            // Highchart section
            Highcharts.chart("theChart", {
                chart: {
                    type: "column"
                },
                title: {
                    text: "Units offered for Bachelor of Information and Communication Technology"
                },
                subtitle: {
                    text: "from Swinburne University of Technology"
                },
                accessibility: {
                    announceNewData: {
                        enabled: true
                    }
                },
                xAxis: {
                    type: "category"
                },
                yAxis: {
                    title: {
                        text: "Number of units"
                    }
                },
                legend: {
                    enabled: false
                },
                // Enables additional customisations on plotted data
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y} units'
                        }
                    }
                },
                // Gives additional info when mouse is hovered on a bar
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> units out of 35 units.<br/>'
                },
                series: [{
                    name: "Units",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Core",
                            y: $scope.coreTotal
                        },
                        {
                            name: "Software Development",
                            y: $scope.softDevTotal
                        },
                        {
                            name: "Network",
                            y: $scope.netTotal
                        },
                        {
                            name: "Systems Analysis",
                            y: $scope.systAnaTotal
                        },
                        {
                            name: "Elective",
                            y: $scope.electiveTotal
                        }
                    ]
                }]

            });
        }
    );
});