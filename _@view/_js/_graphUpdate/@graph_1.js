// Call Per Houre

let chart = document.getElementById('myChart_1');
const ctx = chart.getContext('2d');

chart.style.width = '100%';
chart.style.height = '100%';

let data = {
    type: 'bar',
    data: {
        labels: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        datasets: [{
            label: '# of Votes',
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
}

let x = new Chart(ctx, data);
/*
() => {
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10,
    //    Math.random() * 10
}
*/
setInterval(() => {
    conn = new XMLHttpRequest();
    conn.open("POST", '/_ignator/_@hostScript/_updateGraph/_@redGraphData.php?duration=call_per_houre', open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {

            let x8c = conn.responseText.split(',');

            let xx = [];

            xx[0] = x8c[0];
            xx[1] = x8c[1];
            xx[2] = x8c[2];
            xx[3] = x8c[3];
            xx[4] = x8c[4];
            xx[5] = x8c[5];
            xx[6] = x8c[6];
            xx[7] = x8c[7];
            xx[8] = x8c[8];
            xx[9] = x8c[9];
            xx[10] = x8c[10];
            xx[11] = x8c[11];
            xx[12] = x8c[12];
            xx[13] = x8c[13];
            xx[14] = x8c[14];
            xx[15] = x8c[15];

            data.data.datasets[0].data = xx;

            x.update();
        }
    }
}, 1000);
