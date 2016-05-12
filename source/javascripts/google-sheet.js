var request;

$(function (){

  $('#contact-button').click(function(event){
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    var name = $('#InputName').val();
    var email = $('#InputEmail').val();
    var message = $('#InputHelp').val();
    var payload = {"name": name, "email": email, "message": message}

    if( name == '' || email == '' || message == '' || !(validateEmail(email))) {
      return false;
    } else {
      this.innerHTML='Please wait ...'
      $(this).prop("disabled",true);
      // Here we fire the request to google sheet
      request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwFIuDTVouqc6sLiEQs0uCH63zokYWAm6kp9DuGuqaLzAU2Eo8/exec",
        type: "post",
        data: payload
      });
      var button = this

      // Callback handler that will be called on success
      request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log(textStatus);
        button.innerHTML='Submitted'
        $('.form-group').hide();
        $('.feedback').show();
      });

      // Callback handler that will be called on failure
      request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
          "The following error occurred: "+
            textStatus, errorThrown
        );
      });

      event.preventDefault();
    }
  });
});

function validateEmail(email) 
{
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
