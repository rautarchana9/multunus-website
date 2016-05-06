
$(function (){

  $('#contact-button').click(function(e){
    e.preventDefault();
    var myDataRef = new Firebase('http://incandescent-torch-4645.firebaseIO.com');
    var name = $('#InputName').val();
    var email = $('#InputEmail').val();
    var message = $('#InputHelp').val();
    myDataRef.push({name: name, email: email, message: message});
    $('#InputName').val('');
  });

});
