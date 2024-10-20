
let chart2 = document.getElementById('myChart_2');
const ctx2 = chart2.getContext('2d');

chart2.style.width = '100%';
chart2.style.height = '100%';

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        datasets: [{
            label: '# of Votes',
            // data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false  // Hide dataset label (legend)
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});












