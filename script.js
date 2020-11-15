// function validation() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var error_message = document.getElementById("error_message");
//   var text;

//   if(name.length < 5) {
//     text = "Please Enter Valid Name!!";
//     error_message.innerHTML = text;
//     return false;
//   }

//   if(email.indexOf("@") == -1 || email.length < 6) {
//     text = "Please Enter Valid Email";
//     error_message.innerHTML = text;
//     return false;
//   }

//   if(message.length <= 100) {
//     text = "Please Enter More Than 100 Characters";
//     error_message.innerHTML = text;
//     return false;
// } 

//   alert("Form Submitted Successfully!");
//   return true;
// }

var form = document.querySelector('.needs-validation');

// var validation = Array.prototype.filter.call(forms, function(form) {
//   form.addEventListener('submit', function(e) {
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//       alert('work');
//     }
//     form.classList.add('was-validated');
//   });
// })
