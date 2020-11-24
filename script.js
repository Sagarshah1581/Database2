
    var name = document.getElementById("username");
    var pass = document.getElementById("password");
    var result = document.getElementById("data");
        console.log(username);
        console.log(password);
        console.log(result);


  function combined(){

    validate();
    eval();

  }
   

    function validate(){
      
      if(name.value == "") {
          alert("Please enter your username");
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(name.value) === false) {
              alert("Please enter a valid username");
          } else {
              Unerror = false;
          }
      }
      if(pass.value == "") {
        alert("Please enter your password");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}+$/;
        if(regex.test(pass.value) === false) {
            alert("Please enter a valid password" + "\n" +
            "password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:");
        } else {
            passerror = false;
        }
    }
  }
        
        // if(name.value == "" || name.value == null){
        //   document.getElementById("Unerror").innerText = document.getElementById("Unerror").innerText + " " + "Please enter Username";
        //     // alert("Please Enter usrname");
        //  }else {

        //  }

        //  if(pass.value == "" || pass.value == null){
        //   document.getElementById("passerror").innerText = document.getElementById("passerror").innerText + " " + "Please enter Password";
        //  }

        //  if(pass.value < 6){
        //   document.getElementById("passerror").innerText = document.getElementById("passerror").innerText + " " + "pswd should be 8 chars";
        //  }

        //  if(pass.value > 15){
        //   document.getElementById("passerror").innerText = document.getElementById("passerror").innerText + " " + "pswd should be less than 15 chars";
        //  }

        //  if(pass.value === "password"){
        //   document.getElementById("passerror").innerText = document.getElementById("passerror").innerText + " " + "password cannot be password";
        //  }

    

     function eval (){

      var uname = document.getElementById("username")
      console.log(uname.innerText);
      var pass = document.getElementById("password");
      console.log(pass.innerText);

      console.log("inside eval");

      var username = uname.value;
      localStorage.setItem("un", username);
      console.log(username);
      var password = pass.value;
      console.log(password);

      document.getElementById('data').innerText = document.getElementById('data').innerText + "Hi" + " " + username;

      result.innerText = localStorage.getItem("un");
      $('#myModal').modal('hide');
  }
 
var fnameElement = document.getElementById('fname');
var lnameElement = document.getElementById('lname');
var addElement = document.getElementById('address');
var add2Element = document.getElementById('address2');
var cityElement = document.getElementById('city');
var stateElement = document.getElementById('state');
var zipElement = document.getElementById('zip');
var jobroleElement = document.getElementById('jobRole');
var companyElement = document.getElementById('organisation');
var descElement = document.getElementById('description');
var result = document.getElementById('info');

function hello(){
    if(fnameElement.value == "") {
        alert("Please enter your firstname");
        document.getElementById('fnameErr').innerText = document.getElementById('fnameErr').innerText + "* Please Enter FirstName";
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fnameElement.value) === false) {
            alert("Please enter a valid firstname");
        } else {
            fnameErr = false;
        }
    }

      if(lnameElement.value == "") {
          alert("Please enter your lastname");
          document.getElementById('lnameErr').innerText = document.getElementById('lnameErr').innerText + "* Please Enter LastName";
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(lnameElement.value) === false) {
              alert("Please enter a valid lastname");
          } else {
              lnameErr = false;
          }
      }

      if (addElement.value == "" || addElement.value == null){
          document.getElementById('addressErr').innerText = document.getElementById('addressErr').innerText + "* Please Enter Address";
      }

      if (add2Element.value == "" || add2Element.value == null){
          document.getElementById('address2Err').innerText = document.getElementById('address2Err').innerText + " * Please Enter Address 2";
      }

      if(cityElement.value == "") {
          alert("Please enter your city name");
          document.getElementById('cityErr').innerText = document.getElementById('cityErr').innerText + "* Please Enter city";
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(cityElement.value) === false) {
              alert("Please enter a valid city name");
          } else {
              cityErr = false;
          }
      }

      if(stateElement.value == "") {
          alert("Please enter your state name");
          document.getElementById('stateErr').innerText = document.getElementById('stateErr').innerText + "* Please Enter city";
      } else {
          var regex = /^[a-zA-Z\s]+$/;
          if(regex.test(stateElement.value) === false) {
              alert("Please enter a valid state name");
          } else {
              stateErr = false;
          }
      }

      if(zipElement.value == "") {
          alert("Please enter your zip code");
          document.getElementById('zipErr').innerText = document.getElementById('zipErr').innerText + "* Enter ZipCode";
      } else {
          var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
          if(regex.test(zipElement.value) === false) {
              alert("Please enter a valid zip code");
          } else {
              zipErr = false;
          }
      }

      if (jobroleElement.value == "" || jobroleElement.value == null){
          document.getElementById('jobRoleErr').innerText = document.getElementById('jobRoleErr').innerText + "* please enter your jobrole";
      }

      if (companyElement.value == "" || companyElement.value == null){
          document.getElementById('organisationErr').innerText = document.getElementById('organisationErr').innerText + "* Please Enter organisation Name";
      }

      if (descElement.value == "" || descElement.value == null){
          document.getElementById('descriptionErr').innerText = document.getElementById('descriptionErr').innerText + "* Please Enter description";
      }
      $('#myModal').modal('hide');
  }

  function display(){
    var a = document.getElementById('fname').value;
    var b = document.getElementById('lname').value;
    var c = document.getElementById('address').value;
    var d = document.getElementById('address2').value;
    var e = document.getElementById('city').value;
    var f = document.getElementById('state').value;
    var g = document.getElementById('zip').value;
    var h = document.getElementById('jobRole').value;
    var i = document.getElementById('organisation').value;
    var j = document.getElementById('description').value;
  
    if(a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "" || h== "" || i == "" || j == ""){
      alert("Please Fill All Required Field");
      return false;
  } else {
    alert("FirstName: " + a +"\n" + 
    "LastName: " + b +"\n" +
    "Address: " +  c +"\n" +
    "Address2: " +  d +"\n" +
   "city: " + e +"\n" +
   "state: " +  f +"\n" +
   "Zipcode: " + g +"\n" +
   "JobRole: " +  h +"\n" +
   "Company: " + i +"\n" +
   "Description: " + j +"\n");
    alert ("Submitted Successfully");
     }
  }

