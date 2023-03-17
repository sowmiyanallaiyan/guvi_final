// $('#loginForm').on('submit', function(e) {
//     e.preventDefault();
//     var data = new FormData($(this)[0]);
//     data.append('action', 'login');
//     var form = $(this);
//     form.find(':submit').attr('disabled', true);
//     var url = "php/login.php";
//     $.ajax({
//       type: 'POST',
//       url: php/login.php,
//       data:data,
//       //dataType: 'JSON',
//       processData: false,
//       contentType: false,
//       error: function(xhr, textStatus, errorThrown) {
//         console.log(xhr.responseText);
//       },
//       success: function(response) {
//         console.log(response);
//         form.find(':submit').attr('disabled', false);
//         if (response.error_status == 1) {
          
//           // If validation error exists
//           for (var key in response) {
//             var errorContainer = form.find(`#${key}Error`);
//             if (errorContainer.length !== 0) {
//               errorContainer.html(response[key]);
//             }
//           }
//         }
//         if (response.status == 1) {
//           form.trigger('reset');
          
//           // handling success response
//           window.location.href = 'profile.html';

//         } else if (response.status == 0) {
//           // Handling failure response
//           toastr.error(response.msg);
//         }
//       }
//     });
//   });

$("#login-form").on("submit", function (e) {
  e.preventDefault();
  var form = $(this);
  console.log($("input[name='email']").val());
  console.log($("input[name='password']").val());
  alert("*")
  $.ajax({
    type: "POST",
    url: "php/login.php",
    data: {
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log(xhr.responseText);
      console.log("***")
    },
    success: function (response) {
      console.log(response);
      console.log("***")

      localStorage.setItem("userData", response);

      // var userData = JSON.parse(localStorage.getItem("userData"));
      // console.log(userData)
      // Redirect to the profile page
      window.location.href = "profile.html";
      // form.find(":submit").attr("disabled", false);
      // if (response.error_status == 1) {
      //   // If validation error exists
      //   for (var key in response) {
      //     var errorContainer = form.find(`#${key}Error`);
      //     if (errorContainer.length !== 0) {
      //       errorContainer.html(response[key]);
      //     }
      //   }
      // }
      // if (response.status == 1) {
      //   form.trigger("reset");

      //   // handling success response
      //   window.location.href = "profile.html";
      // } else if (response.status == 0) {
      //   // Handling failure response
      //   toastr.error(response.msg);
      // }
    },
  });
});

