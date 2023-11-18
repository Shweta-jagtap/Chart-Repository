import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const ResponseDateTime = () => {
  useEffect(() => {
    const chart = am4core.create('responseDateTime', am4charts.XYChart);

    // data
    chart.data = [
      {"date": "2023-05-01", "average_time": 0.4},
      {"date": "2023-05-02", "average_time": 0.42},
      {"date": "2023-05-03", "average_time": 0.35},
      {"date": "2023-05-04", "average_time": 0.5},
      {"date": "2023-05-05", "average_time": 0.47}
    ];
  
    // create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';
    categoryAxis.title.text = 'Dates';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Average Response Time';

    // create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'average_time';
    series.dataFields.categoryX = 'date';
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.fill = am4core.color('#74B266')
    series.name = 'Average Response Time (day_wise)';
    
    chart.cursor = new am4charts.XYCursor();

    return () => {
      chart.dispose(); 
    };
  }, []);

  return (
    <> 
    <h3>Response Times (Date Wise)</h3>
    <div id="responseDateTime" style={{ width: '100%', height: '300px' }}>
  </div>
  </>
  );
};

export default ResponseDateTime;
