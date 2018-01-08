$(document).ready(function() {
    // console.log("lol");
    function renderIcons() {
        // Move icon
        if (!this.series[0].icon) {
            this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .add(this.series[2].group);
        }
        this.series[0].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
            (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
        );

        // Exercise icon
        if (!this.series[2].icon) {
            this.series[2].icon = this.renderer.path(
                ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                'M', 8, -8, 'L', 16, 0, 8, 8]
            )
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .add(this.series[2].group);
        }
        this.series[2].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
            (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
        );

        // Stand icon
        if (!this.series[1].icon) {
            this.series[1].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                'stroke': '#ffffff',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .add(this.series[1].group);
        }

        this.series[1].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
            (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
        );
    }
    var chart = {
        backgroundColor : '#ECECEA',
        type: 'solidgauge',
        height: '50%',
        events: {
            render: renderIcons
        }
    };
    var title = 'Macros in your food';
    var tooltip = {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2 +4,
                y: (this.chart.plotHeight / 2) -23
            };
        }}

        var pane = {
            center: ['50%', '50%'],
            size: '90%',
            startAngle: 0,
            endAngle: 360,

            background: [{ 
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
                borderWidth: 0
            }, { 
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
                borderWidth: 0
            }, { 
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
                borderWidth: 0
            }]
        };

        // the value axis
        var yAxis = {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        };
        var plotOptions = {
            solidgauge: {
                dataLabels: {
                    enabled : false,
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        };
        var credits = {
            enabled: false
        };
        var series = [{
            name: 'Carbohydrates',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 100 - Math.floor((400*food_item_1.nutrients[6].amount/food_item_1.nutrients[1].amount) + (100*food_item_1.nutrients[2].amount/food_item_1.nutrients[1].amount))
            }]
        }, {
            name: 'Proteins',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: Math.floor(400*food_item_1.nutrients[6].amount/food_item_1.nutrients[1].amount)
            }]
        }, {
            name: 'Fats',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: Math.floor(100*food_item_1.nutrients[2].amount/food_item_1.nutrients[1].amount)
            }]
        }];

        var chart_1_values = {};
        chart_1_values.chart = chart;
        chart_1_values.title = title;
        chart_1_values.pane = pane;
        chart_1_values.tooltip = tooltip;
        chart_1_values.yAxis = yAxis;
        chart_1_values.credits = credits;
        chart_1_values.series = series;
        chart_1_values.plotOptions = plotOptions;
        $('#radial_graph_one').highcharts(chart_1_values);
        series = [{
            name: 'Carbohydrates',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 100 - Math.floor((400*food_item_2.nutrients[6].amount/food_item_2.nutrients[1].amount) + (100*food_item_2.nutrients[2].amount/food_item_2.nutrients[1].amount))
            }]
        }, {
            name: 'Proteins',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: Math.floor(400*food_item_2.nutrients[6].amount/food_item_2.nutrients[1].amount)
            }]
        }, {
            name: 'Fats',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: Math.floor(100*food_item_2.nutrients[2].amount/food_item_2.nutrients[1].amount)
            }]
        }];
        chart_1_values.series = series;
        $('#radial_graph_two').highcharts(chart_1_values);
    });