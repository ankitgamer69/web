function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");

  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You are signout succesfully");
      $(".g-signin2").css("display","flex");
      $(".data").css("display","none");
    });
  }

  check_icon = document.querySelector(".check-icon");
  check_icon.onclick = function() {
    nav_link = document.querySelector(".nav_link");
    nav_link.classList.toggle("active");
  }