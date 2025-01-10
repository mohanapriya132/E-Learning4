// Add CSS styles dynamically
const styles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  nav .logo img {
    height: 40px;
    margin-right: 10px;
  }

  nav .logo p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }

  nav .srch {
    display: flex;
    align-items: center;
  }

  .search {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 200px;
  }

  #login-container {
    display: flex;
    align-items: center;
  }

  #login-btn {
    padding: 10px 20px;
    background-color: #5e6dff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #login-btn:hover {
    background-color: #4c5bd9;
  }

  #username {
    margin-left: 15px;
    font-weight: bold;
    color: #333;
  }

  #logout-btn {
    padding: 10px 20px;
    background-color: #ff3d3d;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  }

  #logout-btn:hover {
    background-color: #e03535;
  }

  .form-box {
    width: 400px;
    margin: 50px auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .toggle-btn {
    padding: 10px 20px;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }

  .toggle-btn:hover {
    background-color: #ddd;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .input-field {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  .submit-btn {
    padding: 10px;
    background-color: #5e6dff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #4c5bd9;
  }

  .reg-btn {
    background-color: #4caf50;
  }

  .reg-btn:hover {
    background-color: #45a049;
  }
`;

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");

function register() {
    x.style.left = "-400px"; // Move login form off-screen
    y.style.left = "50px";   // Move register form into view
    z.style.left = "110px";  // Move the indicator to the "Register" button
    b.style.color = "#fff";  // Change "Register" button text color
    a.style.color = "#000";  // Change "Log In" button text color
}

function login() {
    x.style.left = "50px";   // Move login form into view
    y.style.left = "450px";  // Move register form off-screen
    z.style.left = "0px";    // Move the indicator to the "Log In" button
    b.style.color = "#000";  // Change "Register" button text color
    a.style.color = "#fff";  // Change "Log In" button text color
}

function goFurther() {
    if (document.getElementById("chkAgree").checked == true) {
        document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
    } else {
        document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
}

function google() {
    window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if (side == 0) {
        menu.style = 'transform: translateX(0vh); position:fixed;';
    } else {
        menu.style = 'transform: translateX(-100%);';
    }
    side++;
}


// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Handle login form
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Simulating login (you can replace this with an actual backend call)
  localStorage.setItem('username', email);  // Store username in localStorage
  window.location.href = "lo.html"; // Redirect to lo.html
}

// Handle registration form
function handleRegister(event) {
  event.preventDefault();
  const fullName = document.querySelector('input[placeholder="Full Name"]').value;
  const email = document.querySelector('input[placeholder="Email Address"]').value;
  const password = document.querySelector('input[placeholder="Create Password"]').value;
  const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Simulate registration (replace with actual backend logic)
  localStorage.setItem('username', fullName);  // Store the username in localStorage
  window.location.href = ""; // Redirect to lo.html
}

// Logout function
function logout() {
  localStorage.removeItem('username');  // Remove username from localStorage
  window.location.href = "lo.html"; // Redirect to lo.html
}

// When the page loads, check if the user is logged in
window.onload = function() {
  const username = localStorage.getItem('username');
  if (username) {
    document.getElementById('login-btn').style.display = 'none'; // Hide login button
    document.getElementById('logout-btn').style.display = 'inline-block'; // Show logout button
    document.getElementById('username').innerText = username; // Show username
    document.getElementById('username').style.display = 'inline-block'; // Display username
  } else {
    document.getElementById('login-btn').style.display = 'inline-block'; // Show login button
    document.getElementById('logout-btn').style.display = 'none'; // Hide logout button
  }
}

// Navigation to login page from home
function navigateToLogin() {
  window.location.href = "l.html";
}
