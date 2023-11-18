import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const InsightSummary = () => {
    useEffect(() => {
        const chart = am4core.create('insightSummary', am4charts.XYChart);
    
        // data
        chart.data = Object.entries({
            total_queries: 1500,
            successful_queries: 1350,
            failed_queries: 150,
            average_response_time: 0.45
        }).map(([category, value]) => ({ category, value }));
    
        // create axes
        const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.title.text = 'Categories';
    
        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'Values';
    
        // create series
        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.categoryX = 'category';
        series.name = 'Category Distribution';
    
        chart.cursor = new am4charts.XYCursor();
    
        return () => {
          chart.dispose();
        };
      }, []);
    
  return ( <> 
  <h3>Insight Summary</h3>
  <div id="insightSummary" style={{ width: '100%', height: '300px' }}>
</div>
</>);
};

export default InsightSummary;