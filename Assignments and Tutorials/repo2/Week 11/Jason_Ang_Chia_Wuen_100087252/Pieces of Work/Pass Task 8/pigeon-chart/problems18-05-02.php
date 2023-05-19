<!DOCTYPE html>

<!-- data-ng-app="pigeon-chart" in the html is essential to inject ngPigeon-chart into the webpage-->
<html lang="en" data-ng-app="pigeon-chart" data-ng-cloak>
<head>
    <title>Demo: pigeon-chart</title>
	<!-- The includes.php file is required to include all necessary dependencies-->
    <?php
		include "pigeon-chart/php/includes.php"
	?>
</head> 

<body>
    <div>
		<h1>2 May 2018</h1>
        <h3>Request to add on</h3>
        <ol>
            <li>add in chart.zoomType attribute [x / y / xy]</li>
            <li>Legend: false (default) / true if [top / left / right / bottom]</li>
        </ol>
        
        
        <h3>Some other problem on graphs</h3>
        
        <ol>
            <li>pigeon-table & pigeon-chart combine?</li>
            <li>No Bootstraps by default? - Dont implement first (DISCUSSION NEEDED)</li>
            <li>Chart doesnt work with non-aggregate attributes - Chart not shown</li>
        </ol>
        <!-- doesnt work with non-aggregate attributes, unless add on GROUP BY -->
        <pigeon-chart query="SELECT relyear, runtime 
                             FROM movie" 
                      type="column"
                      title="Chart doesnt work with non-aggregate attributes"></pigeon-chart>
        
        <!-- x-axis value-label error when adding ORDER BY-->
        <pigeon-chart query="SELECT relyear, count(relyear) 
                             FROM movie
                             GROUP BY relyear
                             ORDER BY relyear DESC"
                      type="line"
                      title="x-axis value-label error when adding ORDER BY">
        </pigeon-chart>
        
        <!-- When using LIMIT, x-axis value-label show sequencial number instead of the value. -->
        <pigeon-chart query="SELECT relyear, min(runtime) 'min', 
                             avg(runtime) 'avg', max(runtime) 'max' 
                             FROM movie 
                             GROUP BY relyear 
                             LIMIT 20" 
                      type="line"
                      title="When using LIMIT, x-axis value-label show sequencial number instead of the value"></pigeon-chart>
         
        <!-- When mouse over a slice, it show 'Series 1', is there anything we can do about it? -->
        <!-- use axisy-title to set the series name -->
        <pigeon-chart query="SELECT ratingcode, count(ratingcode)
                                 FROM movie
                                 GROUP BY ratingcode"
                      type="pie"
                      show-legend="true"
                      data-data-label="true"
                      title="When mouse over a slice, it show 'Series 1', is there anything we can do about it?">

            </pigeon-chart>
        
        
        <!-- Add Ons: when having multi-attribute group by condition, allows developer to specify which non-aggregate attribute to be series instead of multi-level x-axis i.e. colourcode to be multi-series-->
        <pigeon-chart query="SELECT ratingcode, colourcode, count(ratingcode) 
                             FROM movie
                             GROUP BY ratingcode, colourcode" 
                      type="column" s
                      how-legend="true"
                      title="[DISCUSSION NEEDED] Add Ons: when having multi-attribute group by condition, allows developer to specify which non-aggregate attribute to be series instead of multi-level x-axis i.e. colourcode to be multi-series"></pigeon-chart>
        
    </div>    
</body>
</html>

