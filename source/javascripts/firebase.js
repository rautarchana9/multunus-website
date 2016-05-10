
$(function (){

  $('#contact-button').click(function(e){
    e.preventDefault();
    var contactUsRef = new Firebase('http://brilliant-heat-1244.firebaseIO.com/contact_us');
    var name = $('#InputName').val();
    var email = $('#InputEmail').val();
    var message = $('#InputHelp').val();
    contactUsRef.push({name: name, email: email, message: message});
    $('#InputName').val('');
  });

});
