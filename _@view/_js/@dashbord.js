// Total number of Employees
setInterval(() => {
    conn = new XMLHttpRequest();
    conn.open("POST", '/_ignator/_@hostScript/_@emp.php?totalEmp=ALL', open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            // Count successful
            if (conn.responseText == true) {
                document.getElementById('empCountAll').innerHTML = conn.responseText;
            }
            else {
                document.getElementById('empCountAll').innerHTML = 'fail';
            }
        }
    };
}, 500);