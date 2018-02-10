var ctx = document.getElementById("bar-chart").getContext("2d");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Medical Treatment', 'Nursing & care', 'Food & Beverages', 'Maintenance'],
        datasets: [
            {
                label: "Issues",
                backgroundColor: ["#fc808e", "#fc808e", "#fc808e", "#fc808e"],
                data: [16, 16, 20, 16]
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Open Issues By Departments',
            fontColor: '#9b9b9b',
            fontSize: 18,
            fontStyle: '400',
            fontFamily: "'Helvetica Neue', 'Helvetica', sans-serif"
        },
        scales: {
            yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        max: 25,
                    }
            },
],
            xAxes: [{
                barPercentage: 0.4,
                gridLines: false,
        }]
        }
    }
});