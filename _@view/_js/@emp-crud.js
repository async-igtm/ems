// ========================== Update 'Employee Filter' ====================================
// Filter One
let opt_8515 = () => {

    let filterSelector_one = document.getElementById('opt');
    let filterSelector_two = document.getElementById('nd2');
    let filterSelector_three = document.getElementById('rd3');

    filterSelector_one.setAttribute("class", "border border-success");

    if (filterSelector_one.value === '-- Campaign --') {

        filterSelector_one.setAttribute("class", "border border-danger");
        filterSelector_two.disabled = true;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option>Disabled</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_two.style.border = '1px solid #C0C0C0';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;

    } else if (filterSelector_one.value === 'IT') {

        filterSelector_two.disabled = true;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option>Disabled</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_two.removeAttribute('class');
        filterSelector_two.style.border = '1px solid #C0C0C0';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;

    } else if (filterSelector_one.value === 'Floor Manager') {

        filterSelector_two.disabled = true;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option>Disabled</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_two.removeAttribute('class');
        filterSelector_two.style.border = '1px solid #C0C0C0';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;

    }
    else if (filterSelector_one.value === 'Senior Manager') {

        filterSelector_two.disabled = true;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option>Disabled</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_two.removeAttribute('class');
        filterSelector_two.style.border = '1px solid #C0C0C0';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;

    } else if (filterSelector_one.value === 'Quality') {

        filterSelector_two.disabled = false;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option id="915515" > -- </option>< option > ALL</option ><option>SIB</option><option>SIC</option><option>STUDENT</option><option>SE</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_two.setAttribute("class", "border border-danger");
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = true;

    } else if (filterSelector_one.value === 'Manager') {

        filterSelector_two.disabled = false;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option id="915515" > -- </option>< option > ALL</option ><option>SIB</option><option>SIC</option><option>STUDENT</option><option>SE</option>';
        filterSelector_two.setAttribute("class", "border border-danger");
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = true;

    } else if (filterSelector_one.value === 'On Boarding') {

        filterSelector_two.disabled = false;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option id="915515" > -- </option>< option > ALL</option ><option>SIB</option><option>SIC</option><option>STUDENT</option><option>SE</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        filterSelector_two.setAttribute("class", "border border-danger");
        window.document.getElementById('btn-1').disabled = true;

    } else if (filterSelector_one.value === 'Collection') {

        filterSelector_two.disabled = false;
        filterSelector_three.disabled = true;
        filterSelector_two.innerHTML = '<option id="915515" > -- </option>< option > ALL</option ><option>SIB</option><option>SIC</option><option>STUDENT</option><option>SE</option>';
        filterSelector_three.innerHTML = '<option>Disabled</option>';
        filterSelector_three.style.border = '1px solid #C0C0C0';
        filterSelector_two.setAttribute("class", "border border-danger");
        window.document.getElementById('btn-1').disabled = true;

    }
}

// Filter Two
let opt_9443 = () => {

    let filterSelector_one = document.getElementById('opt');
    let filterSelector_two = document.getElementById('nd2');
    let filterSelector_three = document.getElementById('rd3');

    filterSelector_two.setAttribute("class", "border border-success");
    window.document.getElementById("915515").style.display = "none";

    if (filterSelector_two.value && filterSelector_one.value === 'Quality') {
        filterSelector_three.disabled = true;
        filterSelector_two.setAttribute("class", "border border-success");
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;
    } else if (filterSelector_two.value && filterSelector_one.value === 'Manager') {
        filterSelector_three.disabled = true;
        filterSelector_two.setAttribute("class", "border border-success");
        filterSelector_three.style.border = '1px solid #C0C0C0';
        window.document.getElementById('btn-1').disabled = false;
    } else if (filterSelector_two.value && filterSelector_one.value === 'On Boarding') {
        filterSelector_three.disabled = false;
        filterSelector_two.setAttribute("class", "border border-success");
        filterSelector_three.setAttribute("class", "border border-danger");
        filterSelector_three.innerHTML = '<option id="9196358" > -- </option><option>ALL</option><option>Caller</option><option>Approver</option>';
    } else if (filterSelector_two.value && filterSelector_one.value === 'Collection') {
        filterSelector_three.disabled = false;
        filterSelector_two.setAttribute("class", "border border-success");
        filterSelector_three.setAttribute("class", "border border-danger");
        filterSelector_three.innerHTML = '<option id="9196358" > -- </option><option>ALL</option><option>Caller</option><option>Approver</option>';
    }
}

// Filter Three
let opt_99513 = () => {
    let filterSelector_three = document.getElementById('rd3');
    filterSelector_three.setAttribute("class", "border border-success");
    document.getElementById('9196358').style.display = "none";
    window.document.getElementById('btn-1').disabled = false;
}

// Get Filter Data
let get_dta = () => {
    param_1 = document.getElementById('opt').value;
    param_2 = document.getElementById('nd2').value;
    param_3 = document.getElementById('rd3').value;

    url = "/_ignator/_@view/_PHP/@data.php";

    data = "fill_1=" + param_1 + "&fill_2=" + param_2 + "&fill_3=" + param_3;
    link = new XMLHttpRequest();
    link.open("POST", url, open);
    link.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    link.onreadystatechange = () => {
        if (link.readyState == 4 && link.status == 200) {
            resp = link.responseText;
            document.getElementById('result').innerHTML = resp;
            // console.log(resp);
        }
    }
    link.send(data);
}

// ========================== Search Employee By Employee ID Code ====================================
let fetch = () => { // Search Employee Code 
    ems_id = document.getElementById('ems_id').value;

    url = "/_ignator/_@view/_PHP/@data.php";

    data = "ems_id=" + ems_id;

    link = new XMLHttpRequest();
    link.open("POST", url, open);
    link.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    link.onreadystatechange = () => {
        if (link.readyState == 4 && link.status == 200) {
            resp = link.responseText;
            document.getElementById('result').innerHTML = resp;
        }
    }
    link.send(data);
}

// ============ TL update into Search PopUp ============
let autoTl = () => {
    setTimeout(() => {

        let ems_dep = document.getElementById('optxcv').value;
        let ems_camp = document.getElementById('campgin').value;
        let emp_tl_code = document.getElementsByClassName('TL_CODEUser')[0].innerText;

        url = '/_ignator/_@hostScript/_@tl.php?camp=' + ems_camp + '&dep=' + ems_dep;

        let conn = new XMLHttpRequest();
        conn.open('GET', url, open);
        conn.send();
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                document.getElementById('okttdfgmn').innerHTML = conn.responseText;
                setTimeout(() => {
                    // Select TL by TL Class Code name
                    document.getElementsByClassName(emp_tl_code)[0].selected = true;
                }, 200);
            }
        };

    }, 800);
};

/* If Department in change */
let tl_914485 = (Param_1, Param_2) => {
    let ems_dep = Param_1;
    let ems_camp = Param_2;

    url = '/_ignator/_@hostScript/_@tl.php?camp=' + ems_camp + '&dep=' + ems_dep;

    let conn = new XMLHttpRequest();
    conn.open('GET', url, open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            document.getElementById('okttdfgmn').innerHTML = conn.responseText;
        }
    }
}
let department_change = () => {
    let ems_dep = document.getElementById('optxcv').value;
    let ems_camp = document.getElementById('campgin').value;
    tl_914485(ems_dep, ems_camp);
}

// ============ TL update into Filter Data PopUp ============
let autoTlAll = (param, param_1, param_2) => {

    console.log(param, param_1, param_2);


    let getT71 = (param, param_1, param_2) => {

        let ems_dep = document.getElementById('optxcv').value;
        let ems_camp = document.getElementById('campgin').value;


        if (param === 'Quality Member') {
            url = '/_ignator/_@hostScript/_@tl.php?quality="Quality"';
            let conn = new XMLHttpRequest();
            conn.open('GET', url, open);
            conn.send();
            conn.onreadystatechange = () => {
                if (conn.readyState == 4 && conn.status == 200) {
                    document.getElementsByClassName('tlPopUp' + param_1)[0].innerHTML = conn.responseText;
                    setTimeout(() => {
                        // Select TL by TL Class Code name
                        document.getElementsByClassName(param_2)[0].selected = true;
                    }, 200);
                }
            };
        }
        else {
            url = '/_ignator/_@hostScript/_@tl.php?camp=' + ems_camp + '&dep=' + ems_dep;
            let conn = new XMLHttpRequest();
            conn.open('GET', url, open);
            conn.send();
            conn.onreadystatechange = () => {
                if (conn.readyState == 4 && conn.status == 200) {

                    document.getElementsByClassName('tlPopUp' + param_1)[0].innerHTML = conn.responseText;

                    // Chat GPT contribution 
                    setTimeout(() => {

                        // Select all elements with class param_2
                        let elements = document.getElementsByClassName(param_2);

                        console.log(elements);

                        // Loop through each element and set attribute 'selected'
                        for (let element of elements) {
                            element.setAttribute('selected', '');
                        }
                    }, 100);

                }
            };
        }
    }
    setTimeout(getT71(param, param_1, param_2), 800);
}



// document.getElementsByClassName("change5302")[0].addEventListener("change", department_change_685431);


// ========================== Update 'Add New Employee' ====================================

let update_section = () => { // Update 'Add new Employee' PopUp section
    if (window.document.getElementById("newCamp").value == "On Boarding") {
        window.document.getElementById("new_optxcv").innerHTML = '<option id="65365" value="0">--</option><option value="SIB" id="new_put_SIB">SIB</option> <option value="SIC" id="new_put_SIC">SIC</option> <option value="SE" id="new_put_SE">SE</option> <option value="STUDENT" id="new_put_STUDENT">STUDENT</option>';
        window.document.getElementById("new_optxcv").removeAttribute("disabled");
        window.document.getElementById("camp").setAttribute("class", "border border-success");
        window.document.getElementById("opt-1").setAttribute("class", "border border-danger");
    }

    if (window.document.getElementById("newCamp").value == "Collection") {
        window.document.getElementById("new_optxcv").innerHTML = '<option id="65365" value="0">--</option><option value="SIB" id="new_put_SIB">SIB</option> <option value="SIC" id="new_put_SIC">SIC</option> <option value="SE" id="new_put_SE">SE</option> <option value="STUDENT" id="new_put_STUDENT">STUDENT</option>';
        window.document.getElementById("new_optxcv").removeAttribute("disabled");
        window.document.getElementById("camp").setAttribute("class", "border border-success");
        window.document.getElementById("opt-1").setAttribute("class", "border border-danger");
    }
}

let new_optxcv_12385 = () => { // Update 'Add New Employee' Departement Manager

    window.document.getElementById("opt-1").setAttribute("class", "border border-success");
    window.document.getElementById("65365").style.display = 'none';
    window.document.getElementById("new_fastName").disabled = false;
    /*
    window.document.getElementById("opt-2").setAttribute("class", "border border-danger");
    window.document.getElementById("new_tgbkpost").removeAttribute("disabled");
    window.document.getElementById('new_tgbkpost').innerHTML = '<option id="32597" value="0">--</option><option id="new_Approver" value="Approver">Approver</option> <option id="new_Caller" value="Caller">Caller</option>';
 
    dep = window.document.getElementById("new_optxcv").value;
    cam = window.document.getElementById("newCamp").value
 
    let xajax_mt = (new_campgain, new_department) => {
        // Get Manager Name
        url = '/_ignator/_@hostScript/_@maager.php';
        conn = new XMLHttpRequest();
        conn.open("POST", url, open);
 
        conn.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        datax = "campagin=" + new_campgain + "&departm=" + new_department;
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                xcv = conn.responseText;
                if (xcv.length > 2) {
                    xcv = xcv.split(',');
                    window.document.getElementById("new_manager").innerText = xcv[0];
                    window.document.getElementById("new_manager_code").innerText = xcv[1];
                }
                else {
                    window.document.getElementById("new_manager").innerText = 'No Manager';
 
                    $('.addNewEmp2544').text('No Manager');
                    $('.addNewEmp2544').fadeIn(800);
                    setTimeout(() => {
                        $('.addNewEmp2544').fadeOut(1500);
                    }, 2900);
 
                }
            }
 
        }
        conn.send(datax);
    }
    xajax_mt(cam, dep);
    */
}

let new_tgbkpost_12385 = () => { // Update 'Add New Employee' TL Section
    window.document.getElementById("opt-2").setAttribute("class", "border border-success");
    window.document.getElementById("32597").style.display = 'none';
    window.document.getElementById("opt-3").setAttribute("class", "border border-danger");
    window.document.getElementById("new_okttdfgmn").removeAttribute("disabled");

    let xajax_tl = (param_1, param_2) => {
        // Get TL Name
        url = '/_ignator/_@hostScript/_@tl.php';
        conn = new XMLHttpRequest();
        conn.open("POST", url, open);

        conn.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data = "camp=" + param_1 + "&dep=" + param_2;
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                if (conn.responseText) {
                    window.document.getElementById("new_okttdfgmn").innerHTML = '<option id="89425"> --- </option>' + conn.responseText
                }
                else {
                    window.document.getElementById("new_okttdfgmn").innerHTML = '<option id="89425"> No Team Leader </option>';
                    $('.addNewEmp2544').text('No Team Leader');
                    $('.addNewEmp2544').fadeIn(800);
                    setTimeout(() => {
                        $('.addNewEmp2544').fadeOut(1500);
                    }, 2900);
                }
            }
        }
        conn.send(data);
    }

    let newCamp = window.document.getElementById("newCamp").value;
    let departm = window.document.getElementById("new_optxcv").value;
    xajax_tl(newCamp, departm);
}

let new_tl_841953 = () => { // Update 'Add New Employee' TL Block
    window.document.getElementById("89425").style.display = "none";
    window.document.getElementById("opt-3").setAttribute("class", "border border-success");
}

setInterval(() => { // Update 'Add New Employee' Input Form Updtation
    let nameFast = window.document.getElementById("new_fastName");
    let nameLast = window.document.getElementById("new_lastName");

    if (nameFast.value) {
        nameFast.setAttribute("class", "border border-success");
        window.document.getElementById("new_lastName").disabled = false;
    }
    else {
        nameFast.setAttribute("class", "border border-danger");
        window.document.getElementById("new_lastName").disabled = true;
    }

    if (nameLast.value) {
        nameLast.setAttribute("class", "border border-success");
        window.document.getElementById("vfds522").disabled = false;
    }
    else {
        nameLast.setAttribute("class", "border border-danger");
        window.document.getElementById("vfds522").disabled = true;
    }

    if (nameFast.value && nameLast.value) {
        document.getElementById("new_emailid").disabled = false;
    } else {
        document.getElementById("new_emailid").disabled = true;
    }

}, 500);

let autoEmailCreation = () => { // Generates Email ID for 'Add New Employee'
    firstName = document.getElementById("new_fastName").value;
    lastName = document.getElementById("new_lastName").value;
    if (firstName && lastName) {
        eail = firstName + lastName + '@gmail.com';
        document.getElementById("new_emailid").value = eail.toLocaleLowerCase();
    }
};
let autoEmail = setInterval(() => {
    autoEmailCreation();
}, 100);

let cancelAutoEmail = () => {
    clearInterval(autoEmail);
}

// ========================== Refresh Employee Code and RESET From  ====================================
let resetfrom = () => {
    document.getElementById("resetfrom").click();
    window.document.getElementById("camp").setAttribute("class", "border border-danger");
    window.document.getElementById("opt-1").removeAttribute("class", "border border-danger");
}

let RefreshEmployeeCode = () => {

    resetfrom();
    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@dynamicCode.php", true);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            document.getElementById("new_nemp_code_cod").innerText = conn.responseText;
        }
    }
}

// ========================== Add New Employee With Vlidation ====================================
let addNewEmp = () => {

    /*
        let emptyAlert = (parm) => {
            $('.addNewEmp2544').text(parm);
            $('.addNewEmp2544').fadeIn(1000);
            setTimeout(() => {
                $('.addNewEmp2544').fadeOut(500);
            }, 1500);
        }
    */

    /*
    if (empCode) {
        let conf_empCode = true;
    }
    else {
        emptyAlert('Employee Code Missing');
    }

    if (empCampgin) {
        let conf_empCampgin = true;
    }
    else {
        emptyAlert('Employee Campagin Missing');
    }

    if (empDepartment) {
        let conf_empDepartment = true;
    }
    else {
        emptyAlert('Employee Department Missing');
    }

    if (empName) {
        let conf_empName = true;
    }
    else {
        emptyAlert('Employee First Name Missing');
    }

    if (empLastName) {
        let conf_empLastName = true;
    }
    else {
        emptyAlert('Employee Last Name Missing');
    }
*/

    let empCode = document.getElementById('new_nemp_code_cod').innerText;
    let empCampgin = document.getElementById('newCamp').value;
    let empDepartment = document.getElementById('new_optxcv').value;
    let empName = document.getElementById('new_fastName').value;
    let empLastName = document.getElementById('new_lastName').value;
    let empEmail = document.getElementById('new_emailid').value;

    // if (conf_empCode == true && conf_empCampgin == true && conf_empDepartment == true && conf_empName == true && conf_empLastName == true) {

    url = "/_ignator/_@hostScript/_@addEmployee.php?empCode=" + empCode + "&empCampaign=" + empCampgin + "&empDepartment=" + empDepartment + "&empName=" + empName + "&empLastName=" + empLastName + "&empEmail=" + empEmail;

    link = new XMLHttpRequest();
    link.open("POST", url, open);
    link.send();
    link.onreadystatechange = () => {
        if (link.readyState == 4 && link.status == 200) {
            resp = link.responseText;
            console.log(resp);
        }
    }

    setTimeout(RefreshEmployeeCode, 500);

    // }
}


// ========================== Popup Value ====================================
/*
// All Popup Value Paper

let prepare_1 = (param) => {

    let url = 'http://localhost:3000/_ignator/php/_@view/_popUp.php';
let dta = "dep=" + param;

link = new XMLHttpRequest();
link.open("POST", url, open);
link.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    link.onreadystatechange = () => {

        if (link.readyState == 4 && link.status == 200) {
    // console.log(link.responseText);
    txezdd = link.responseText;

let txe = txezdd.split(',');

console.log(txe);

// Background Color
document.getElementById(txe[0] + 1).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 2).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 3).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 4).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 5).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 6).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 7).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 8).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 9).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 10).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 11).setAttribute("class", "bg-success");
document.getElementById(txe[0] + 12).setAttribute("class", "bg-success");

// Data Update

window.document.getElementById("emp_code_cod" + txe[0]).innerText = txe[0]; // code update

window.document.getElementById("fastName" + txe[0]).value = txe[1]; // first Name update

window.document.getElementById("lastName" + txe[0]).value = txe[2]; // last Name update

window.document.getElementById("email" + txe[0]).value = txe[3]; // code update

            // Department Update
            let department = (param) => {

                switch (param) {
                    case 'SIB':
return '<option selected>SIB</option> <option>SIC</option> <option>SE</option> <option>STUDENT</option>';
break;

case 'SIC':
return '<option>SIB</option> <option selected>SIC</option> <option>SE</option> <option>STUDENT</option>';
break;

case 'SE':
return '<option>SIB</option> <option>SIC</option> <option selected>SE</option> <option>STUDENT</option>';
break;

case 'STUDENT':
return '<option>SIB</option> <option>SIC</option> <option>SE</option> <option selected>STUDENT</option>';
break;
                }

            }
window.document.getElementById("sdgxdvjb" + txe[0]).innerHTML = department(txe[5]);

            // Position Update
            let position = (param) => {

                switch (param) {
                    case 'Caller':
return '<option selected>Caller</option> <option>Approver</option>';
break;

case 'Approver':
return '<option>Caller</option> <option selected>Approver</option>';
break;
                }

            }
window.document.getElementById("tgbkpost" + txe[0]).innerHTML = position(txe[6]);


            // Auto TL Detact
            // let autoTl = (param, param_1) => {

    let dta = "dep=" + txe[5] + "&camp=" + txe[12] + "&empCode=" + txe[0];
url = 'http://localhost:3000/_ignator/php/_@view/@tl.php';

let conn = new XMLHttpRequest();

conn.open("POST", url, open);

conn.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
conn.send(dta);

            conn.onreadystatechange = (param, param_111) => {
                if (conn.readyState == 4 && conn.status == 200) {
    window.document.getElementById("okttdfgmn" + txe[0]).innerHTML = conn.responseText;
                }
            }

            setTimeout(() => {
    window.document.getElementById(txe[7] + txe[5] + txe[0]).setAttribute("selected", "");
            }, 500);
        }
    }
link.send(dta);
}

let removeColor = (param) => {
    // document.getElementById(param + 2).removeAttribute("class");

    document.getElementById(param + 1).removeAttribute("class");
document.getElementById(param + 2).removeAttribute("class");
document.getElementById(param + 3).removeAttribute("class");
document.getElementById(param + 4).removeAttribute("class");
document.getElementById(param + 5).removeAttribute("class");
document.getElementById(param + 6).removeAttribute("class");
document.getElementById(param + 7).removeAttribute("class");
document.getElementById(param + 8).removeAttribute("class");
document.getElementById(param + 9).removeAttribute("class");
document.getElementById(param + 10).removeAttribute("class");
document.getElementById(param + 11).removeAttribute("class");
document.getElementById(param + 12).removeAttribute("class");
};
*/




// ========================== TL update into `Team Leader` PopUp ====================================
let get_empCodeForTl_584513 = () => {
    // console.clear();
    let emp_code = window.document.getElementById("hhbl854").value;
    url = "/_ignator/_@hostScript/_@aboutEmp.php?code=" + emp_code;
    conn = new XMLHttpRequest();
    conn.open("GET", url, open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let emp_info = conn.responseText;

            // JS RegExp
            let comFinder = /,/; // Pattern
            let resultSearch = comFinder.test(emp_info); // returns true if ',' in text

            if (resultSearch) {
                empObj = emp_info.split(',');
                console.log(empObj);
                document.getElementById('promt_emp_code').innerText = empObj[0];
                document.getElementById('promt_emp_name').innerText = empObj[1] + ' ' + empObj[2];
                document.getElementById('promt_emp_email').innerText = empObj[3];
                document.getElementById('promt_emp_camp').innerHTML = '<option>' + empObj[5] + '</option>';
                document.getElementById('promt_emp_maneger').innerText = empObj[7];
                document.getElementById('promt_emp_f_maneger').innerText = empObj[8];
                document.getElementById('promt_emp_s_maneger').innerText = empObj[9];
                document.getElementById('promt_emp_camp_gyj').innerHTML = '<option>' + empObj[12] + '</option>';
            }
            else {
                // JQ Animation 
                document.getElementsByClassName('massage88552Tl')[0].style.backgroundColor = '#dc3545';
                $('.massage88552Tl').fadeIn(1000);
                $('.massage88552Tl').text('Employee not a DCS');
                setTimeout(function () {
                    $('.massage88552Tl').fadeOut(1000);
                }, 4000);
                // console.log(5000);
                document.getElementById('promt_emp_code').innerText = '';
                document.getElementById('promt_emp_name').innerText = '';
                document.getElementById('promt_emp_email').innerText = '';
                document.getElementById('promt_emp_camp').innerHTML = '<option></option>';
                document.getElementById('promt_emp_maneger').innerText = '';
                document.getElementById('promt_emp_f_maneger').innerText = '';
                document.getElementById('promt_emp_s_maneger').innerText = '';
                document.getElementById('promt_emp_camp_gyj').innerHTML = '<option></option>';
            }
        }
    }
}
// Upgrade to TL
let upgradeToTl = () => {

    $code = document.getElementById("promt_emp_code").innerText;
    $post = document.getElementById("promt_emp_posi").value;
    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@promoteEmp.php?code=" + $code + "&upgradePosition=" + $post, true);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            setTimeout(() => {
                document.getElementsByClassName('massage88552Tl')[0].style.backgroundColor = "green";
                document.getElementsByClassName('massage88552Tl')[0].style.fontSize = "14px";
                $('.massage88552Tl').fadeIn(1000);
                $('.massage88552Tl').text('Upgrade Successful');
                setTimeout(function () {
                    $('.massage88552Tl').fadeOut(1000);
                }, 4000);
            }, 400);
        }
    }
}

// ========================== Upgrade to Quality ====================================
let qget_emp_584513 = () => {
    let emp_code = window.document.getElementById("qhhbl854").value;

    conn = new XMLHttpRequest();

    url = "/_ignator/_@hostScript/_@aboutEmp.php?code=" + emp_code;
    conn.open("GET", url, open);
    conn.send();

    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let emp_info = conn.responseText;

            // JS RegExp
            let comFinder = /,/; // Pattern
            let resultSearch = comFinder.test(emp_info); // returns true if ',' in text

            if (resultSearch) {
                empObj = emp_info.split(',');
                console.log(empObj);
                document.getElementById('qpromt_emp_code').innerText = empObj[0];
                document.getElementById('qpromt_emp_name').innerText = empObj[1] + ' ' + empObj[2];
                document.getElementById('qpromt_emp_email').innerText = empObj[3];
                document.getElementById('qpromt_emp_camp').innerHTML = '<option>' + empObj[5] + '</option>';
                document.getElementById('qpromt_emp_maneger').innerText = empObj[7];
                document.getElementById('qpromt_emp_f_maneger').innerText = empObj[8];
                document.getElementById('qpromt_emp_s_maneger').innerText = empObj[9];
                document.getElementById('qpromt_emp_camp_gyj').innerHTML = '<option>' + empObj[12] + '</option>';
            }
            else {
                // JQ Animation 
                document.getElementsByClassName('massage88552Q')[0].style.backgroundColor = '#dc3545';
                $('.massage88552Q').fadeIn(1000);
                $('.massage88552Q').text('Employee not a DCS');
                setTimeout(function () {
                    $('.massage88552Q').fadeOut(1000);
                }, 4000);
                // console.log(5000);
                document.getElementById('qpromt_emp_code').innerText = '';
                document.getElementById('qpromt_emp_name').innerText = '';
                document.getElementById('qpromt_emp_email').innerText = '';
                document.getElementById('qpromt_emp_camp').innerHTML = '<option></option>';
                document.getElementById('qpromt_emp_maneger').innerText = '';
                document.getElementById('qpromt_emp_f_maneger').innerText = '';
                document.getElementById('qpromt_emp_s_maneger').innerText = '';
                document.getElementById('qpromt_emp_camp_gyj').innerHTML = '<option></option>';
            }

            urlPosition = "/_ignator/_@hostScript/_@checkPositionalEmp.php?position=" + 'Quality Head';
            conn.open("GET", urlPosition, open);
            conn.send();
            conn.onreadystatechange = () => {
                if (conn.readyState == 4 && conn.status == 200) {
                    // console.log(conn.responseText);
                    if (conn.responseText == 1) {
                        document.getElementById("tggfg75442754").remove();
                        document.getElementById("promt_quality").setAttribute("selected", "selected");
                    }
                    else {
                        document.getElementById("qpromt_emp_posi").innerHTML = '<option id="promt_quality" value="Quality" selected>Quality</option> <option id="tggfg75442754">Quality Head</option>';
                    }
                }
            }
        }
    }

}
let upgradeToQuality = () => {
    $code = document.getElementById("qpromt_emp_code").innerText;
    // $post = document.getElementById("qpromt_emp_posi").value;
    $catagory = 'Quality';

    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@promoteEmp.php?code=" + $code + "&catagory=" + $catagory, true);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            setTimeout(() => {
                document.getElementsByClassName('massage88552Q')[0].style.backgroundColor = "green";
                document.getElementsByClassName('massage88552Q')[0].style.fontSize = "14px";
                $('.massage88552Q').fadeIn(1000);
                $('.massage88552Q').text('Upgrade Successful');
                // $('.massage88552Tl').text(conn.responseText);
                setTimeout(function () {
                    $('.massage88552Q').fadeOut(1000);
                }, 4000);
            }, 400);
        }
    }
}

// ========================== Upgrade to IT ====================================
let itget_emp_584513 = () => {
    let emp_code = window.document.getElementById("qhhbl85454").value;

    conn = new XMLHttpRequest();

    url = "/_ignator/_@hostScript/_@aboutEmp.php?code=" + emp_code;
    conn.open("GET", url, open);
    conn.send();

    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let emp_info = conn.responseText;

            // JS RegExp
            let comFinder = /,/; // Pattern
            let resultSearch = comFinder.test(emp_info); // returns true if ',' in text

            if (resultSearch) {
                empObj = emp_info.split(',');
                document.getElementById('itpromt_emp_code').innerText = empObj[0];
                document.getElementById('itpromt_emp_name').innerText = empObj[1] + ' ' + empObj[2];
                document.getElementById('itpromt_emp_email').innerText = empObj[3];
                document.getElementById('itpromt_emp_camp').innerHTML = '<option>' + empObj[5] + '</option>';
                document.getElementById('itpromt_emp_maneger').innerText = empObj[7];
                document.getElementById('itpromt_emp_f_maneger').innerText = empObj[8];
                document.getElementById('itpromt_emp_s_maneger').innerText = empObj[9];
                document.getElementById('itpromt_emp_camp_gyj').innerHTML = '<option>' + empObj[12] + '</option>';
            }
            else {
                // JQ Animation 

                document.getElementsByClassName('massage88552it')[0].style.backgroundColor = '#dc3545';
                $('.massage88552it').fadeIn(1000);
                $('.massage88552it').text('Employee not a DCS');
                setTimeout(function () {
                    $('.massage88552it').fadeOut(1000);
                }, 4000);

                document.getElementById('itpromt_emp_code').innerText = '';
                document.getElementById('itpromt_emp_name').innerText = '';
                document.getElementById('itpromt_emp_email').innerText = '';
                document.getElementById('itpromt_emp_camp').innerHTML = '<option></option>';
                document.getElementById('itpromt_emp_maneger').innerText = '';
                document.getElementById('itpromt_emp_f_maneger').innerText = '';
                document.getElementById('itpromt_emp_s_maneger').innerText = '';
                document.getElementById('itpromt_emp_camp_gyj').innerHTML = '<option></option>';
            }

            urlPosition = "/_ignator/_@hostScript/_@checkPositionalEmp.php?position=" + 'Quality Head';
            conn.open("GET", urlPosition, open);
            conn.send();
            conn.onreadystatechange = () => {
                if (conn.readyState == 4 && conn.status == 200) {
                    if (conn.responseText == 1) {
                        document.getElementById("tggfg75442754").remove();
                        document.getElementById("itpromt_quality").setAttribute("selected", "selected");
                    }
                    else {
                        document.getElementById("itpromt_emp_posi").innerHTML = '<option id="promt_quality" value="Quality" selected>Quality</option> <option id="tggfg75442754">Quality Head</option>';
                    }
                }
            }
        }
    }

}
let toIt = () => {
    $code = document.getElementById("itpromt_emp_code").innerText;
    $catagory = 'IT';

    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@promoteEmp.php?code=" + $code + "&catagory=" + $catagory, true);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            setTimeout(() => {
                document.getElementsByClassName('massage88552it')[0].style.backgroundColor = "green";
                document.getElementsByClassName('massage88552it')[0].style.fontSize = "14px";
                $('.massage88552it').fadeIn(1000);
                $('.massage88552it').text('Upgrade Successful');
                setTimeout(function () {
                    $('.massage88552it').fadeOut(1000);
                }, 4000);
            }, 400);
        }
    }
}

// ========================== Upgrade to Manager and Floor Manager ====================================
let change_51134 = (param) => {

    if (param === 'Manager') {
        document.getElementById('floor_manager_6851').style.display = 'none';
        document.getElementById('maneger_6851').style.display = 'block';

        window.document.getElementById('mng_btn_floor').setAttribute('onclick', 'toManager()');

        let conn = new XMLHttpRequest();
        conn.open("GET", "/_ignator/_@hostScript/_@maager.php?Position=" + 'Manager', true);
        conn.send();
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                // console.log(conn.responseText);
                let cont = conn.responseText.split(',');
                // console.log(cont);
                // console.log(cont.length);
                for (let index = 0; index < cont.length; index++) {
                    // console.log(cont[index]);
                    // SE,STUDENT,SIC,SIB
                    switch (cont[index]) {
                        case 'SE':
                            document.getElementsByClassName("emp_to_manager-se")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
                            document.getElementsByClassName("emp_to_manager-se-input")[0].disabled = true;
                            break;
                        case 'STUDENT':
                            document.getElementsByClassName("emp_to_manager-student")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
                            document.getElementsByClassName("emp_to_manager-student-input")[0].disabled = true;
                            break;
                        case 'SIC':
                            document.getElementsByClassName("emp_to_manager-sic")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
                            document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled = true;
                            break;
                        case 'SIB':
                            document.getElementsByClassName("emp_to_manager-sib")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
                            document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled = true;
                            break;
                    }
                }

                if (document.getElementsByClassName("emp_to_manager-se-input")[0].disabled &&
                    document.getElementsByClassName("emp_to_manager-student-input")[0].disabled &&
                    document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled &&
                    document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled
                ) {
                    document.getElementsByClassName("blyf")[0].disabled = true;
                    document.getElementsByClassName("vyjbg542")[0].disabled = true;
                    // document.getElementById("th51354").disabled = true;
                    document.getElementById("revoked").disabled = false;
                    document.getElementById("mng_btn_floor").disabled = true;
                }
                else {
                    console.log(1000);
                }
            }
        }
    }

    if (param === 'Floor Manager') {
        document.getElementById('maneger_6851').style.display = 'none';
        document.getElementById('floor_manager_6851').style.display = 'block';

        window.document.getElementById('mng_btn_floor').setAttribute('onclick', 'toFloorManager()');

        let conn = new XMLHttpRequest();
        conn.open("GET", "/_ignator/_@hostScript/_@maager.php?Position=" + 'Floor Manager', true);
        conn.send();
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                let cont = conn.responseText.split(',');
                if (cont.length > 1) {
                    window.document.getElementsByClassName('blyf_floor')[0].disabled = true;
                    window.document.getElementById('tgfghjiu74185263').disabled = true;
                    window.document.getElementsByClassName('blyf_floor')[0].value = cont[0];
                    window.document.getElementById('smpromt_emp_code_mane_floor').innerText = cont[0];
                    window.document.getElementById('smpromt_emp_name_mane_floor').innerText = cont[1];
                    window.document.getElementById('smpromt_emp_camp_mane_floor').innerText = cont[3];
                    window.document.getElementById('smpromt_emp_email_mane_floor').innerText = cont[2];
                    // window.document.getElementById('th51354_floor').disabled = true; 
                    document.getElementById("mng_btn_floor").disabled = true;
                }
            }
        }
        // == 



        // ==
    }
}


let revoked_checked = () => {
    // function name() {

    //     if (param === 'Manager') {
    //         document.getElementById('floor_manager_6851').style.display = 'none';
    //         document.getElementById('maneger_6851').style.display = 'block';

    //         window.document.getElementById('mng_btn_floor').setAttribute('onclick', 'toManager()');

    //         let conn = new XMLHttpRequest();
    //         conn.open("GET", "/_ignator/_@hostScript/_@maager.php?Position=" + 'Manager', true);
    //         conn.send();
    //         conn.onreadystatechange = () => {
    //             if (conn.readyState == 4 && conn.status == 200) {
    //                 // console.log(conn.responseText);
    //                 let cont = conn.responseText.split(',');
    //                 // console.log(cont);
    //                 // console.log(cont.length);
    //                 for (let index = 0; index < cont.length; index++) {
    //                     // console.log(cont[index]);
    //                     // SE,STUDENT,SIC,SIB
    //                     switch (cont[index]) {
    //                         case 'SE':
    //                             document.getElementsByClassName("emp_to_manager-se")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
    //                             document.getElementsByClassName("emp_to_manager-se-input")[0].disabled = true;
    //                             break;
    //                         case 'STUDENT':
    //                             document.getElementsByClassName("emp_to_manager-student")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
    //                             document.getElementsByClassName("emp_to_manager-student-input")[0].disabled = true;
    //                             break;
    //                         case 'SIC':
    //                             document.getElementsByClassName("emp_to_manager-sic")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
    //                             document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled = true;
    //                             break;
    //                         case 'SIB':
    //                             document.getElementsByClassName("emp_to_manager-sib")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
    //                             document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled = true;
    //                             break;
    //                     }
    //                 }

    //                 if (document.getElementsByClassName("emp_to_manager-se-input")[0].disabled &&
    //                     document.getElementsByClassName("emp_to_manager-student-input")[0].disabled &&
    //                     document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled &&
    //                     document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled
    //                 ) {
    //                     document.getElementsByClassName("blyf")[0].disabled = true;
    //                     document.getElementsByClassName("vyjbg542")[0].disabled = true;
    //                     // document.getElementById("th51354").disabled = true;
    //                     document.getElementById("revoked").disabled = false;
    //                     document.getElementById("mng_btn_floor").disabled = true;
    //                 }
    //                 else {
    //                     console.log(1000);
    //                 }
    //             }
    //         }
    //     }
    // }


    if (document.getElementById('revoked').checked === true) {

        document.getElementsByClassName("emp_to_manager-se-input")[0].disabled = true;
        document.getElementsByClassName("emp_to_manager-student-input")[0].disabled = true;
        document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled = true;
        document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled = true;

        document.getElementsByClassName("emp_to_manager-se")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
        document.getElementsByClassName("emp_to_manager-student")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
        document.getElementsByClassName("emp_to_manager-sic")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';
        document.getElementsByClassName("emp_to_manager-sib")[0].style.border = '1px solid rgba(118, 118, 118, 0.3)';

        window.document.getElementsByClassName('blyf')[0].disabled = true;
        window.document.getElementById("th51354").disabled = true;
        window.document.getElementById("mangbtn").disabled = true;


        document.getElementById('rtfghj686451').setAttribute("onclick", "revokedMember('Manager')");

        let conn = new XMLHttpRequest();
        conn.open("GET", "/_ignator/_@hostScript/_@maager.php?Position=" + 'Manager', true);
        conn.send();
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                let cont = conn.responseText.split(',');
                for (let index = 0; index < cont.length; index++) {
                    console.log(cont[index]);
                    // SE,STUDENT,SIC,SIB
                    switch (cont[index]) {
                        case 'SE':
                            document.getElementsByClassName("emp_to_manager-se")[0].style.border = '1px solid #DA70D6';
                            document.getElementsByClassName("emp_to_manager-se-input")[0].disabled = false;
                            document.getElementsByClassName("emp_to_manager-se-input")[0].setAttribute("onclick", "checkManager('SE')");
                            break;
                        case 'STUDENT':
                            document.getElementsByClassName("emp_to_manager-student")[0].style.border = '1px solid #DA70D6';;
                            document.getElementsByClassName("emp_to_manager-student-input")[0].disabled = false;
                            document.getElementsByClassName("emp_to_manager-student-input")[0].setAttribute("onclick", "checkManager('STUDENT')");
                            break;
                        case 'SIC':
                            document.getElementsByClassName("emp_to_manager-sic")[0].style.border = '1px solid #DA70D6';
                            document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled = false;
                            document.getElementsByClassName("emp_to_manager-sic-input")[0].setAttribute("onclick", "checkManager('SIC')");
                            break;
                        case 'SIB':
                            document.getElementsByClassName("emp_to_manager-sib")[0].style.border = '1px solid #DA70D6';;
                            document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled = false;
                            document.getElementsByClassName("emp_to_manager-sib-input")[0].setAttribute("onclick", "checkManager('SIB')");
                            break;
                    }
                }
            }
        }
    }
    else {
        document.getElementById('rtfghj686451').removeAttribute("onclick", "revokedMember('Manager')");
    }
}
// ========================== Revdoked Manager =========================
let revokedMember = (param) => {

    let delete_ = (param) => {
        let department = param;
        let code = document.getElementById('manager_promt_emp_code_mane').innerHTML;
        let conn = new XMLHttpRequest();
        url = "/_ignator/_@hostScript/_@maager.php?empCode=" + code + "&department=" + department + "&revokedManager=Manager";
        conn.open("GET", url, open);
        conn.send();
    }

    if (param === 'Manager') {
        let department = document.getElementsByName('man_to_promt');
        for (let i = 0; i < department.length; i++) {
            if (department[i].disabled === false && department[i].checked === true) {
                delete_(department[i].value);
                break;
            }
        }
    }
}







let get_emp_tl = () => {
    let emp_code = window.document.getElementsByClassName('blyf')[0].value;

    conn = new XMLHttpRequest();
    url = "/_ignator/_@hostScript/_@aboutEmp.php?managerCode=" + emp_code;
    conn.open("GET", url, open);
    conn.send();

    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let data = conn.responseText.split(',');
            if (data.length > 1) {
                window.document.getElementById("manager_promt_emp_code_mane").innerHTML = data[0];
                window.document.getElementById("manager_promt_emp_name_mane").innerHTML = data[1] + ' ' + data[2];
                window.document.getElementById("manager_promt_emp_email_mane").innerHTML = data[3];
                window.document.getElementById("manager_promt_emp_camp_mane").innerHTML = data[5];
            }
            else {
                // document.getElementsByClassName("massage88552manager")[0].innerHTML = data[0];
                document.getElementsByClassName("massage88552manager")[0].innerHTML = 'User Not TL';
            }
        }
    }

}

let toManager = () => {
    function getdep() {
        let dep = document.getElementsByName("man_to_promt");
        for (let element of dep) {
            if (element.checked) {
                return element.value;  // Return the first checked value
            }
        }
        return null; // In case no checkbox is selected
    }

    let code = window.document.getElementById("manager_promt_emp_code_mane").innerHTML;
    let permissio = window.document.getElementById("th51354");
    let ccxz = document.getElementById("border57415821");
    let code_g, dep_g;

    // if (code && dep) {
    //     (code) ? code_g = 1 : alert("Employee Code Empty"), code_g = 0;
    //     (dep) ? dep_g = 1 : alert("Employee Department Empty"), dep_g = 0;
    //     (permissio.checked === true) ? alert("Permission Granted")(ccxz.style.boxShadow = "0px 0px 2px 1px green", ccxz.style.color = "green") : alert("Please Grant permission to access")(ccxz.style.boxShadow = "0px 0px 2px 1px red", ccxz.style.color = "red");
    // }

    // if (code_g === 1 && dep_g === 1 && permissio.checked === true) {

    dep = getdep();

    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@promoteEmp.php?code=" + code + "&department=" + dep + "&position=manager", open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {

            console.log(conn.responseText);

            // setTimeout(() => {
            //     document.getElementsByClassName('massage88552manager')[0].style.backgroundColor = "green";
            //     document.getElementsByClassName('massage88552manager')[0].style.fontSize = "14px";
            //     $('.massage88552manager').fadeIn(1000);
            //     $('.massage88552manager').text('Upgrade Successful');
            // });
        }
        // }
    }
}

let getManager = () => {

    let emp_code = window.document.getElementsByClassName('blyf-fm')[0].value;

    conn = new XMLHttpRequest();
    url = "/_ignator/_@hostScript/_@aboutEmp.php?floorManagerCode=" + emp_code;
    conn.open("GET", url, open);
    conn.send();

    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let data = conn.responseText.split(',');
            if (data.length > 1) {
                window.document.getElementById("smpromt_emp_code_mane_floor").innerHTML = data[0];
                window.document.getElementById("smpromt_emp_name_mane_floor").innerHTML = data[1];
                window.document.getElementById("smpromt_emp_email_mane_floor").innerHTML = data[2];
                window.document.getElementById("smpromt_emp_camp_mane_floor").innerHTML = data[3];
            }
            else {
                // document.getElementsByClassName("massage88552manager")[0].innerHTML = data[0];
                document.getElementsByClassName("massage88552manager")[0].innerHTML = 'User Not TL';
            }
        }
    }




}

let toFloorManager = () => {
    let code = window.document.getElementById("smpromt_emp_code_mane_floor").innerHTML

    let conn = new XMLHttpRequest();
    conn.open("GET", "/_ignator/_@hostScript/_@promoteEmp.php?codeM=" + code + "&position=floorManager", open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            // setTimeout(() => {
            //     document.getElementsByClassName('massage88552manager')[0].style.backgroundColor = "green";
            //     document.getElementsByClassName('massage88552manager')[0].style.fontSize = "14px";
            //     $('.massage88552manager').fadeIn(1000);
            //     $('.massage88552manager').text('Upgrade Successful');
            // });
        }
    }
    // ======== 
}

let revoked_checked_floorM = () => {
    if (document.getElementById('htvgm5742').checked === true) {
        document.getElementsByClassName("emp_to_manager-se")[0].style.border = '1px solid #DA70D6';
        document.getElementsByClassName("emp_to_manager-se-input")[0].disabled = false;
        document.getElementsByClassName("emp_to_manager-se-input")[0].setAttribute("onclick", "checkManager('SE')");

        document.getElementsByClassName("emp_to_manager-student")[0].style.border = '1px solid #DA70D6';
        document.getElementsByClassName("emp_to_manager-student-input")[0].disabled = false;
        document.getElementsByClassName("emp_to_manager-student-input")[0].setAttribute("onclick", "checkManager('STUDENT')");

        document.getElementsByClassName("emp_to_manager-sic")[0].style.border = '1px solid #DA70D6';
        document.getElementsByClassName("emp_to_manager-sic-input")[0].disabled = false;
        document.getElementsByClassName("emp_to_manager-sic-input")[0].setAttribute("onclick", "checkManager('SIC')");

        document.getElementsByClassName("emp_to_manager-sib")[0].style.border = '1px solid #DA70D6';
        document.getElementsByClassName("emp_to_manager-sib-input")[0].disabled = false;
        document.getElementsByClassName("emp_to_manager-sib-input")[0].setAttribute("onclick", "checkManager('SIB')");
        // document.getElementById('ytfhgvkj746531').removeAttribute('disabled');
        // document.getElementById('ytfhgvkj746531').setAttribute('onclick', 'revoked_()');
    }
    else {
        document.getElementById('ytfhgvkj746531').setAttribute('disabled', 'disabled');
    }
}

let checkManager = (param) => {
    document.getElementById('ctyuih85245').innerHTML = 'Position :';
    document.getElementById('rdftkuj7451653').innerHTML = 'Managers Only';

    conn = new XMLHttpRequest();
    url = "/_ignator/_@hostScript/_@aboutEmp.php?managerCode=" + param;
    conn.open("GET", url, open);
    conn.send();

    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            let data = conn.responseText.split(',');
            window.document.getElementById("manager_promt_emp_code_mane").innerHTML = data[0];
            window.document.getElementById("manager_promt_emp_name_mane").innerHTML = data[1];
            window.document.getElementById("manager_promt_emp_email_mane").innerHTML = data[2];
            window.document.getElementById("manager_promt_emp_camp_mane").innerHTML = data[3];
        }
    }
}

let revoked = () => {
    let getdata = () => {
        let manager = document.getElementsByName('man_to_promt');
        for (const value of manager) {
            if (value.checked === true) {
                return value.value;
            }
        }
    }

    let dataManager = getdata();
    let conn = new XMLHttpRequest();
}


let logout = () => {

    // window.location = '/_ignator/_@hostScript/_sessionControl/_sessionDestroy.php';
    // alert('logout');
    conn = new XMLHttpRequest();
    conn.open("GET", '/_ignator/_@hostScript/_sessionControl/_sessionDestroy.php', open);
    conn.send();
    // /_ignator/_@view/_PHP/@dashbord.php
    // conn.onreadystatechange = () => {
    //     if (conn.readyState == 4 && conn.status == 200) {
    //         window.location = '/_ignator/_@view/_PHP/@dashbord.php';
    //     }
    // }
    window.location.reload();

}