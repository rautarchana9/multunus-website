var request;

$(function (){

  $('#contact-button').click(function(event){
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    var formInputs  = getFormInputs();

    if( validateFormInputs(formInputs)) {
      return false;
    } else {
      this.innerHTML='Please wait ...'
    $(this).prop("disabled",true);
  // Here we fire the request to google sheet
  request = sendRequest(formInputs);
  var button = this

    // Callback handler that will be called on success
    onSuccess(request, button);
  // Callback handler that will be called on failure
  onFailure(request);
  event.preventDefault();
    }
  });
});

function validateEmail(email) 
{
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateFormInputs(formInputs){
  return ( formInputs['name'] == '' || formInputs['email'] == '' || formInputs['message'] == '' || !(validateEmail(formInputs['email'])));
}

function getFormInputs(){
  var name = $('#InputName').val();
  var email = $('#InputEmail').val();
  var message = $('#InputHelp').val();
  return {'name': name, 'email': email, 'message': message};
}

function sendRequest(formInputs){
  return $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwFIuDTVouqc6sLiEQs0uCH63zokYWAm6kp9DuGuqaLzAU2Eo8/exec",
         type: "post",
         data: formInputs});

}
function onSuccess(request, button){
  request.done(function (response, textStatus, jqXHR){
    // Log a message to the console
    console.log(textStatus);
    button.innerHTML='Submitted'
    $('.form-group').hide();
  $('.feedback').show();
  });  
}

function onFailure(request){
  request.fail(function (jqXHR, textStatus, errorThrown){
    // Log the error to the console
    console.error(
      "The following error occurred: "+
      textStatus, errorThrown
      );
  });
}
