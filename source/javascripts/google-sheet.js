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


    // Here we fire the request to google sheet
    request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzZtWzoNRRPUh_U5f1JjRYjs5Vb5DqrizVlpztxKZ7NOz9WiJts/exec",
        type: "post",
        data: payload
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log(textStatus);
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
  });

});
