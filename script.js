
$("#avtar").animate({left: '9vw'},2000);
$("#avtar").animate({top: '28vh'},1000,() => {
    $(".coin").fadeOut(0,() => {
        $(".name").fadeIn(500);
        setTimeout(()=>{
            $(".name").hide();
            $(".name").html("I am<br> Mohit Tanwani");
            $(".name").fadeIn(500);
            setTimeout(()=>{
                $(".name").fadeOut(500);
                var viewportWidth = $(window).width();
                if(viewportWidth>600)
                {
                    $("#avtar").animate({left: '40vw'},2000);
                    $("#avtar").animate({top: '10.5vh',left:'51.5vw'},500);
                }
                else{
                    $("#avtar").animate({left: '25vw'},1000);
                    $("#avtar").animate({top: '10.5vh',left:'55vw'},500);
                }
                
                $("#avtar").animate({top: '40vh'},1000,()=>{
                    $("#avtar").fadeOut(100);
                    setTimeout(()=>{
                        $(".header").fadeOut(1000);
                        setTimeout(()=>{
                            $("header").fadeIn(500);
                        },1000);
                        setTimeout(()=>{
                            $(".dig-avatar").fadeIn(500);
                        },500);
                    },500);
                    
                });
                
            },2000);
        },1200);
       
    });
    
});

$("#avtar").animate({top: '40vh'},1000);

$( window ).scroll(function() {
    var value = window.screenY;
     $("#avtar").css({"left":"+={value}"})
});
