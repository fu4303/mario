
$("#avtar").animate({left: '9vw'},2000);
$("#avtar").animate({top: '28vh'},1000,() => {
    $(".coin").fadeOut(0,() => {
        $(".name").fadeIn(500);
        setTimeout(()=>{
            $(".name").hide();
            $(".name").text("I am Mohit Tanwani");
            $(".name").fadeIn(500);
        },1200);
       
    });
    
});

$("#avtar").animate({top: '40vh'},1000);

$( window ).scroll(function() {
    var value = window.screenY;
     $("#avtar").css({"left":"+={value}"})
});
