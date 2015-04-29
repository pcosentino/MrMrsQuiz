$( document ).ready(function() {
    $(".incorrect").on("click", function(){
    	swal("Shhhhhh....", "Are you serious? Try again hurry up, this doesnt count..", "error");
    });
    $(".correct").on("click", function(){
    	swal("Good job!", "You are correct!", "success");
    	$("#next").get(0).click();
    });
});
