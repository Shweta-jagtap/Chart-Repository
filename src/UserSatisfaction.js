import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const UserSatisfaction = () => {
  useEffect(() => {
    const chart = am4core.create('userSatisfaction', am4charts.XYChart);

    // data
    chart.data =  [
          {"rating": 1, "count": 15},
          {"rating": 2, "count": 35},
          {"rating": 3, "count": 200},
          {"rating": 4, "count": 500},
          {"rating": 5, "count": 600}
        ]
      

    // create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'rating';
    categoryAxis.title.text = 'Rating';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Count';

    // create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'rating';
    series.name = 'Count';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.fill = am4core.color('#74B266');

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;

    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, []);

  return ( <> 
  <h3>User Satisfaction</h3>
  <div id="userSatisfaction" style={{ width: '100%', height: '300px' }}>
</div>
</>);
};

export default UserSatisfaction;