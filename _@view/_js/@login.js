$(document).ready(function () {
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});

let verify = () => {
    let userId = document.getElementById('empId').value;
    let userKey = document.getElementById('empIdKey').value;
    let button = document.getElementById('button');
    let verifybox = document.getElementById('verification-input');


    if (userId == '') {
        document.getElementById('empId').setAttribute('class', 'border border-danger');
    }
    else {
        document.getElementById('empId').removeAttribute('class');
    }

    if (userKey == '') {
        document.getElementById('verification').setAttribute('class', 'border border-danger');
    }
    else {
        document.getElementById('verification').removeAttribute('class');
    }

    if (userKey && userId) {
        verifybox.removeAttribute('hidden');
        verifybox.removeAttribute('disabled');
        button.value = 'Update';

        document.getElementById('empId').setAttribute('disabled', true);
        document.getElementById('empIdKey').setAttribute('type', 'password');
        document.getElementById('empIdKey').setAttribute('disabled', true);
        document.getElementById('hide').setAttribute('hidden', true);

        conn = new XMLHttpRequest();
        conn.open("POST", '/_ignator/_@hostScript/_@email.php?code=' + userId, open);
        conn.send();
        conn.onreadystatechange = () => {
            if (conn.readyState == 4 && conn.status == 200) {
                document.getElementById('otpsms').innerHTML = conn.responseText.split(',')[8];
            }
        }

        button.setAttribute('onclick', 'updateKey()');
    }
    else {
        document.getElementById('empId').setAttribute('class', 'border border-danger');
        document.getElementById('verification').setAttribute('class', 'border border-danger');
    }

}

let revarse_revarse = () => {
    let whiteBox = document.getElementsByClassName('white-panel')[0];
    let redBox = document.getElementsByClassName('register-info-box')[0];
}

let loginFunction = () => {
    let whiteBox = document.getElementsByClassName('white-panel')[0];
    let redBox = document.getElementsByClassName('register-info-box')[0];
    let paragrap = document.getElementById('pageMassage');
    let password = document.getElementById('passwordRestore');
    let otpVerificationBox = document.getElementById('verification-input');
    let button = document.getElementById('button');
    let userKey = document.getElementById('empIdKey');
    let userId = document.getElementById('empId');

    whiteBox.style.animation = 'animate_11 1s ease-in-out';
    redBox.style.animation = 'animate_22 1s ease-in-out';

    redBox.style.opacity = '0';
    whiteBox.style.opacity = '0';

    // Revarse Animation Update
    setTimeout(() => {
        paragrap.innerText = 'Login With EMS';
        password.innerText = 'Forgot password?';
        password.setAttribute('onclick', 'forgetPassword()');
        document.getElementById('otpsms').setAttribute('hidden', true);
        button.value = 'login';
        button.setAttribute('onclick', 'authenticate()');
        otpVerificationBox.setAttribute('hidden', true);
        userKey.removeAttribute('disabled');
        userId.removeAttribute('disabled');
        userKey.value = null;
        userId.value = null;
    }, 500);

    setTimeout(() => {
        whiteBox.style.left = 'calc(-45.3%)';

        redBox.style.left = ((748.725 / 1200) * 100) + '%';

        redBox.style.textAlign = 'right';

        whiteBox.style.animation = 'animate_1 1s ease-in-out';
        redBox.style.animation = 'animate_2 1s ease-in-out';
        redBox.style.opacity = '1';
        whiteBox.style.opacity = '1';
    }, 1000);
}

let revarse = () => {

    let whiteBox = document.getElementsByClassName('white-panel')[0];
    let redBox = document.getElementsByClassName('register-info-box')[0];
    let paragrap = document.getElementById('pageMassage');
    let password = document.getElementById('passwordRestore');
    let otpVerificationBox = document.getElementById('verification-input');

    setTimeout(() => {
        paragrap.innerText = 'Reset Your Password';
        password.innerText = 'Login';
        // otpVerificationBox.removeAttribute('hidden');
        otpVerificationBox.setAttribute('disabled', true);
    }, 500);
    password.setAttribute('onclick', 'loginFunction()');

    redBox.style.opacity = '0';
    whiteBox.style.opacity = '0';
    setTimeout(() => {
        let whiteBox = document.getElementsByClassName('white-panel')[0];
        let redBox = document.getElementsByClassName('register-info-box')[0];

        whiteBox.style.left = 'calc(-5%)';
        redBox.style.left = 0;
        redBox.style.textAlign = 'left';
    }, 800)
    whiteBox.style.marginLeft = '50%';
    setTimeout(() => {
        let whiteBox = document.getElementsByClassName('white-panel')[0];
        let redBox = document.getElementsByClassName('register-info-box')[0];
        whiteBox.style.opacity = '1'
        whiteBox.style.animation = 'animate_1 .5s linear';
        redBox.style.opacity = '1';
        redBox.style.animation = 'animate_2 .5s linear';
    }, 1000);

}

let forgetPassword = () => {

    let whiteBox = document.getElementsByClassName('white-panel')[0];
    let redBox = document.getElementsByClassName('register-info-box')[0];
    let button = document.getElementById('button');

    let style = document.styleSheets[1];

    whiteBox.style.animation = 'animate_11 1s ease-in-out';
    redBox.style.animation = 'animate_22 1s ease-in-out';

    // Forword Animation 
    setTimeout(() => {
        button.value = 'verify';
        button.setAttribute('onclick', 'verify()');
        document.getElementById('empId').value = null;
        document.getElementById('empIdKey').value = null;
    }, 500);

    revarse();
}

let vison = (param) => {
    if (param === 'show') {
        document.getElementById('tf65').style.display = 'none';
        document.getElementById('hgv41').style.display = 'block';
        document.getElementById('empIdKey').setAttribute('type', 'text');
    }
    if (param === 'hide') {
        document.getElementById('tf65').style.display = 'block';
        document.getElementById('hgv41').style.display = 'none';
        document.getElementById('empIdKey').setAttribute('type', 'password');
    }
}

setInterval(() => {
    let passValue = document.getElementById('empIdKey').value;
    if (passValue.length > 0) {
        document.getElementById('hide').style.display = 'block';
    } else {
        document.getElementById('hide').style.display = 'none';
    }
}, 100);

let authenticate = () => {
    let userId = document.getElementById('empId').value;
    let userKey = document.getElementById('empIdKey').value;

    let session = (userId) => {
        conn = new XMLHttpRequest();
        conn.open("POST", '/_ignator/_@hostScript/_sessionControl/_sessionControl.php?userId=' + userId, open);
        conn.send();
    }

    let fail = () => {
        document.getElementById('msmg-box').innerText = 'Authentication failed. Please check your credentials.';
        $('#msmg-box').fadeIn(200);
        setTimeout(() => {
            $('#msmg-box').fadeOut(1000);
        }, 900);
    }

    conn = new XMLHttpRequest();
    conn.open("POST", '/_ignator/_@hostScript/_security/_@passwordVerification.php?id=' + userId + '&password=' + userKey, open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            // Authentication successful

            if (conn.responseText == true) {
                console.log(conn.responseText);
                session(userId);
                window.location = '/_ignator/_@view/_PHP/@dashbord.php';
            }
            else {
                console.log(500);
                fail();
            }
        }
    };
}

let updateKey = () => {
    let userId = document.getElementById('empId').value;
    let userKey = document.getElementById('empIdKey').value;
    let otp = document.getElementById('verification-input').value;
    conn = new XMLHttpRequest();
    conn.open("POST", '/_ignator/_@hostScript/_security/_@otpVerificationAndUpdate.php?id=' + userId + '&password=' + userKey + '&otp=' + otp, open);
    conn.send();
    conn.onreadystatechange = () => {
        if (conn.readyState == 4 && conn.status == 200) {
            if (conn.responseText == false) {
                document.getElementById('otpsms').innerHTML = 'OTP Expired';
            }
            else {
                loginFunction();
            }
        }
    }
}