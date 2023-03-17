$(document).ready(function () {
    // Get the user data from local storage
    var userData = JSON.parse(localStorage.getItem("userData"));
    console.log("********")
      console.log(userData)
    $("#name").val(userData.username);
  
    // Set the value of the email input field
    $("#email").val(userData.email);
    // ...
  });