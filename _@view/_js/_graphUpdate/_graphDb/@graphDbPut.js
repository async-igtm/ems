// Send Data to the server
let dataSend = () => {
    conn = new XMLHttpRequest();
    conn.open("POST", '/_ignator/_@hostScript/_updateGraph/_@insertGraphData.php?countPerHoure=' + Math.round(Math.random() * 100), open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            console.log(conn.responseText);
        }
    };
}

setInterval(() => {
    let dt = new Date();
    let reportTime = dt.getHours() + '' + dt.getMinutes() + '' + dt.getSeconds();
    // console.log(reportTime);
    if (
        reportTime == 8000 || // reporting Time 7 -8
        reportTime == 9000 || // reporting Time 8 - 9
        reportTime == 1000 || // reporting Time 9 - 10
        reportTime == 1100 || // reporting Time 10 - 11
        reportTime == 1200 || // reporting Time 11 - 12
        reportTime == 1300 || // reporting Time 12 - 13
        reportTime == 1400 || // reporting Time 13 - 14
        reportTime == 1500 || // reporting Time 14 -15
        reportTime == 1600 || // reporting Time 15 - 16
        reportTime == 1700 || // reporting Time 16 - 17
        reportTime == 1800 || // reporting Time 17 - 18
        reportTime == 1900 || // reporting Time 18 -19
        reportTime == 2000 || // reporting Time 19 - 20
        reportTime == 2100 || // reporting Time 20 - 21
        reportTime == 2200 // reporting Time 21 - 22
    ) {
        dataSend();
        console.log(reportTime);
    }
}, 1000);


/*
   // reportTime == 75959 || 
        reportTime == 85959 || // reporting Time 7 -8
        reportTime == 95959 || // reporting Time 8 - 9
        reportTime == 1000 || // reporting Time 9 - 10
        reportTime == 115959 || // reporting Time 10 - 11
        reportTime == 125959 || // reporting Time 11 - 12
        reportTime == 135959 || // reporting Time 12 - 13
        reportTime == 145959 || // reporting Time 13 - 14
        reportTime == 155959 || // reporting Time 14 -15
        reportTime == 165959 || // reporting Time 15 - 16
        reportTime == 175959 || // reporting Time 16 - 17
        reportTime == 185959 || // reporting Time 17 - 18
        reportTime == 195959 || // reporting Time 18 -19
        reportTime == 205959 || // reporting Time 19 - 20
        reportTime == 215959 || // reporting Time 20 - 21
        reportTime == 225959 // reporting Time 21 - 22
    */

/*

// let z = []; // Initialize an empty array

// function startAdding() {
//     //let x = setInterval(() => {
//     let dt = new Date();
//     if (dt.getSeconds() === 59) {
//         z.push('ENTER'); // Add 'ENTER' to the end of the array
//         console.log(z.length);
//         console.log(z);

//         let u = Math.random() * (60 - 30) + 30; // Generate a random number between 30 and 60
//         console.log(Math.round(u));

//         if (z.length === 8) {
//             clearInterval(x);
//             console.log("Reached 8 entries. Interval stopped.");
//         }
//     }


//     //  }, 600); // Update intervalPer Minute

//     return x; // Return the interval ID
// }

// // Start the first interval
// // let x = startAdding();

// // Second setInterval to check for seconds
// setInterval(() => {
//     let dt = new Date();
//     if (dt.getSeconds() === 59) {
//         console.log("It's the 59th second! Restarting the interval.");

//         z = []; // Clear the array
//         clearInterval(startAdding()); // Stop the current interval
//         x = startAdding(); // Restart the interval
//     }
// }, 60000);
*/