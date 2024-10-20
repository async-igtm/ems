
let chart3 = document.getElementById('myChart_3');
const ctx3 = chart3.getContext('2d');

chart3.style.width = '100%';
chart3.style.height = '100%';

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        datasets: [{
            label: '# of Votes',
            // data: [13, 19, 3, 5, 3, 3],
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












