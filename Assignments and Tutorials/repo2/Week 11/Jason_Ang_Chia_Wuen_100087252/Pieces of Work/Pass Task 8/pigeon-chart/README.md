# pigeon-chart
A dynamic tool to display mysql results in chart form in complement to Highcharts framework.

# Basic Setup
1. Copy this tool into your project root directory then inject our module name *data-ng-app="pigeon-chart"* under HTML tag.
![module name](https://user-images.githubusercontent.com/26452088/36463226-7695f2ac-1703-11e8-8f79-b199da55aa2f.PNG)
 
Make sure you include Pigeon Core, Pigeon Chart, AngularJS, Underscore, Highcharts and Highcharts related JavaScript files under head tag of your project. Take note of the sequences of the files you have included. jQuery, AngularJS, Highcharts and Underscore must be loaded before Pigeon Chart JavaScript.
<br />
![js links](https://user-images.githubusercontent.com/26452088/36463183-26808af2-1703-11e8-86a0-f03fbebf8b03.PNG)
  
If your website is running on PHP, you can just insert the "includes.php" file into your PHP project instead of insert JS file one by one. "includes.php" file is located under "pigeon-chart/php" folder.
<br />
![php includes](https://user-images.githubusercontent.com/26452088/36463203-45f03cac-1703-11e8-891e-a4efda405f02.PNG)

*Note: For having a best experience with our framework, the versions of AngularJS, Highcharts related and Underscore frameworks that we are currently using are as follows:
<br />
-AngularJs v1.6.4
<br />
-Underscore v1.8.3
<br />
-grouped-categories (Highcharts related) v1.1.2

Configure your MySQL hostname, username, password and the database in the "pigeon-core/configdb.php". This PHP must be configured properly in order to communicate with MySQL server.
<br />
![configure db](https://user-images.githubusercontent.com/26452088/36461630-8e54c350-16f9-11e8-8111-1c93bd458914.PNG)

# Include pigeon-chart HTML tag
In order to display data in different chart forms on your choice, you are required to insert the MySQL query command to retrieve the data from mySQL database. Pigeon chart supports basic query, aggregate function with grouping query and multi-series chart. State the title, subtitle, y-axis and x-axis titles for your chart. Pigeon chart supports basic chart types: Line, Column, Bar and Pie. By changing the value of type attribute, your webpage will then display the chart type that you have specified. You may choose to show or not to show all data with values labelled by alternating between "true" and "false".
![pigeon html tag](https://user-images.githubusercontent.com/26452088/36461979-abbd8cd6-16fb-11e8-97f8-f1abd2141898.PNG)

# Chart Display
The data will be displayed in chart form with different query and chart type stated. Pigeon Chart also supports displaying multiple charts in one page.
<br />
### 1. Basic Query 
![basic query pie](https://user-images.githubusercontent.com/26452088/36462456-86fa27bc-16fe-11e8-8142-dc385a0d7c69.PNG)
<br />
#### Pie
![pie ss](https://user-images.githubusercontent.com/26452088/36462406-206abd18-16fe-11e8-93f4-e70a790fe4ea.PNG)
<br />

#### Column
![basic query column](https://user-images.githubusercontent.com/26452088/36462479-ae00ab4c-16fe-11e8-9afb-ca034c0c37be.PNG)
<br />

### 2. Query with aggregated function
![aggregated function query column](https://user-images.githubusercontent.com/26452088/36462412-32a0d08a-16fe-11e8-960c-1a26d99917a3.PNG)
<br />
#### Column
![aggregated function query column ss](https://user-images.githubusercontent.com/26452088/36462526-f88b9ca8-16fe-11e8-9579-d01ce7596691.PNG)
<br />

#### Bar
![aggregated function query bar ss](https://user-images.githubusercontent.com/26452088/36462544-16685ce8-16ff-11e8-829b-bc3693d7aa7d.PNG)
<br />

### 3. Multi-series
![multi-series line query](https://user-images.githubusercontent.com/26452088/36462604-57111e6a-16ff-11e8-8f6c-d770a3d3f595.PNG)
<br />

#### Line
![multi-series line ss](https://user-images.githubusercontent.com/26452088/36462626-7e924fe0-16ff-11e8-86cb-9661dcbc6739.PNG)

