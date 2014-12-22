$(function () {
    $('#chart_container1').highcharts({
        title: {
            text: 'Ragam Footfall',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Thousands)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'K'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [15, 20, 24, 30, 45, 60]
        }]
    });
});

$(function () {
    $('#chart_container2').highcharts({
        title: {
            text: 'Ragam Participation',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Thousands)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'K'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [1, 1.2, 1.5, 2, 2.8, 3.5]
        }]
    });
});

$(function () {
    $('#chart_container3').highcharts({
        title: {
            text: 'Ragam Online Reach',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Lakhs)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'L'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [0, 0.5, 1.5, 2.5, 3.5, 5]
        }]
    });
});

$(function () {
    $('#chart_container4').highcharts({
        title: {
            text: 'Ragam Online Reach',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Lakhs)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'L'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [8, 9, 10, 12, 15, 20]
        }]
    });
});

$(function () {
    $('#chart_container5').highcharts({
        title: {
            text: 'Ragam Proshows Demand',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Thousands)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'K'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [8, 10, 12, 14, 18, 20]
        }]
    });
});

$(function () {
    $('#chart_container6').highcharts({
        title: {
            text: 'Online Likes',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Numbers(In Thousands)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'K'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [0, 5, 10, 24, 42, 85]
        }]
    });
});

$(function () {
    $('#chart_container7').highcharts({
        title: {
            text: 'Celebrity Value',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Scale'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Ragam',
            data: [7, 8, 8, 9, 9, 10]
        }]
    });
});
