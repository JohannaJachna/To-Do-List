var button = $('.submit-btn');
button.on('click',append);

function append(){
  var user= $('.user-input').val();
  var text= $('.text');
  text.append(`<p></p>`);
  text.append(`<p> ${user} </p>`);
  $('.user-input').val("");
}
