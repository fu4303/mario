
animate();
function animate()
{
    $("#avtar").animate({left: '9vw'},2000);
    $("#avtar").animate({top: '38vh'},1000,() => {
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
                        $("#avtar").animate({top: '20.5vh',left:'51.5vw'},500);
                    }
                    else{
                        $("#avtar").animate({left: '25vw'},1000);
                        $("#avtar").animate({top: '20.5vh',left:'55vw'},500);
                    }
                    
                    $("#avtar").animate({top: '40vh'},1000,()=>{
                        $("#avtar").fadeOut(100);
                        setTimeout(()=>{
                            $(".header").fadeOut(1000);
                            setTimeout(()=>{
                                $(".aboutme").show();
                                $("body").css({'background':'black','background-image':'none'});
                                $("header").css({"display":"flex"});
                                $(".dig-avatar").fadeIn(500);
                                $(".heading").fadeIn(500);
                                setTimeout(()=>{
                                    
                                    $(".aboutme").fadeIn(500);
                                    $("body").effect( "shake", {times:2}, 500 );
                                    setTimeout(()=>{
                                        $(".aboutme").hide( "explode", {pieces: 50 }, 2000 );
                                        
                                    },500);
                                    
                                },1000);
                            },1000);
                        },500);
                    });
                },2000);
            },1200);
        });
    });
}

$("#avtar").animate({top: '50vh'},1000);

$( window ).scroll(function() {
    var value = window.screenY;
     $("#avtar").css({"left":"+={value}"})
});

function typeWriter() {
    var i = 0;
    var txt = 'Hello, I am Mohit Tanwani (if you didnt see it at first)';
    var speed = 50;
    if (i < txt.length) {
        
        document.getElementById("myself").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}