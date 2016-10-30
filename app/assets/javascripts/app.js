$(document).ready(function(){
  console.log("Ready!");
  createNewListener();
});

createNewListener = function(){
  $('#new-article').on('click', function(event){
    event.preventDefault();
    console.log(this);
    url = $(this).attr('href');

    request = $.ajax({
      url: url
    })

    request.done(function(response){
      console.log(response);

    })
  })


}