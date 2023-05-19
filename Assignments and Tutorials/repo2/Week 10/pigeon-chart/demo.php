<!DOCTYPE html>

<!-- data-ng-app="pigeon-chart" in the html is essential to inject ngPigeon-chart into the webpage-->
<html lang="en" data-ng-app="pigeon-chart" data-ng-cloak>
<head>
    <title>Demo: pigeon-chart</title>
	<!-- The includes.php file is required to include all necessary dependencies-->
    <?php
		include "pigeon-chart/php/includes.php"
	?>
    
    <link rel="stylesheet" href="pigeon-chart/css/bootstrap.min.css"/>
</head> 

<body>
    <div>
		<!-- Line / Column Chart with Title, Subtitle, axies title, data label and legend -->
        <div class="col-md-6">
            <pigeon-chart query="SELECT relyear, count(relyear) 'Movie Count'
                                 FROM movie
                                 GROUP BY relyear"
                          type="column"
                          title="Total Number of Movies"
                          subtitle="since 1953 - 2016"
                          axisx-title="Year"
                          axisy-title="Count"
                          data-data-label="true"
                          show-legend="true">
            </pigeon-chart> 
        </div>
        
        
		<!-- Line / Column Chart with Multi Series -->
        <div class="col-md-6">
            <pigeon-chart query="SELECT relyear, 
                                 min(runtime) 'Min. Duration' , 
                                 avg(runtime) 'Avg. Duration' , 
                                 max(runtime) 'Max. Duration' 
                                 FROM movie
                                 GROUP BY relyear"
                          type="line"
                          title="Movie Runtime Since 1953 - 2016"
                          subtitle="Min, Average & Max"
                          axisx-title="Year"
                          axisy-title="Runtime"
                          show-legend="true">
            </pigeon-chart> 
        </div>
        
        <div class="col-md-6">
            <pigeon-chart query="SELECT ratingcode, SUM(IF(tmdb_score >= 7, 1 , 0)) as 'Good Movie', 
                                    SUM(IF(tmdb_score < 7, 1 , 0)) as 'Bad Movie'
                                 FROM movie 
                                 GROUP BY ratingcode"
                          type="column"
                          title="Number of Movies based by Ratings"
                          subtitle="Good Movie if TMDB Score more than 7. Poor otherwise"
                          axisx-title="Rating / Tag"
                          axisy-title="Movie Count"
                          data-data-label="true"
                          show-legend="true">
            </pigeon-chart>
        </div>
		
        <div class="col-md-6">
            <pigeon-chart query="SELECT ratingcode, count(ratingcode)
                                 FROM movie
                                 GROUP BY ratingcode"
                          title="Total Number of Movie by Rating"
                          type="pie"
                          axisy-title="Movie Count"
                          show-legend="true"
                          data-data-label="true">

            </pigeon-chart>
        </div>
        
    </div>    
</body>
</html>

