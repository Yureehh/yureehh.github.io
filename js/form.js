myEmail = encodeURI("yureefabbri@gmail.com");

function sendEmail() {
  subject = encodeURI(document.getElementById("subject").value);
  message = encodeURI(document.getElementById("message").value);

  location.href =
    "mailto:" + myEmail + "?subject=" + subject + "&body=" + message;
}
