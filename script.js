var viewportWidth = $(window).width();
animate();
// flagAnimation();

function animate() {

    $("#avtar").animate({ left: '9vw' }, 2000);
    $("#avtar").animate({ top: '38vh' }, 1000, () => {
        $(".coin").fadeOut(0, () => {
            $(".name").fadeIn(500);
            setTimeout(() => {
                $(".name").hide();
                $(".name").html("I am<br> Mohit Tanwani");
                $(".name").fadeIn(500);
                setTimeout(() => {
                    $(".name").fadeOut(500);

                    if (viewportWidth > 1100) {
                        $("#avtar").animate({ left: '40vw' }, 2000);
                        $("#avtar").animate({ top: '20.5vh', left: '51.5vw' }, 500);
                    } else {
                        $("#avtar").animate({ left: '25vw' }, 1000);
                        $("#avtar").animate({ top: '20.5vh', left: '55vw' }, 500);
                    }

                    $("#avtar").animate({ top: '40vh' }, 1000, () => {
                        $("#avtar").fadeOut(100);
                        setTimeout(() => {
                            $(".header").fadeOut(1000);
                            setTimeout(() => {
                                $(".aboutme").show();
                                $("body").css({ 'background': 'black', 'background-image': 'none' });
                                $("header").css({ "display": "flex" });
                                $(".dig-avatar").fadeIn(500);
                                $(".heading").fadeIn(500);
                                setTimeout(() => {

                                    $(".aboutme").fadeIn(500);
                                    $("body").effect("shake", { times: 2 }, 500);
                                    setTimeout(() => {
                                        $(".aboutme").hide("explode", { pieces: 50 }, 2000);
                                        setTimeout(() => {
                                            typeWriter();
                                        }, 2100);

                                    }, 500);

                                }, 1000);
                            }, 1000);
                        }, 500);
                    });
                }, 2000);
            }, 1200);
        });
    });
}

$("#avtar").animate({ top: '50vh' }, 1000);

$(window).scroll(function() {
    var value = window.screenY;
    $("#avtar").css({ "left": "+={value}" })
});

var i = 0;
var j = 0;

var speed = 50;


function typeWriter() {
    var txt = '/ <"name" : "Mohit Tanwani",/<"introduction" : "I am a full stack developer and I have Master Degree in Information and Technology. I am currently working on MERN stack",/<"email" : "iammohittanwani@gmail.com",/<"Location" : "Ahmedabad, India",/<"Hobbies" : "Photography and Cinematography"  //';
    if (i == 0)
        document.getElementById("myself").innerHTML += "{<p class='tab' id='tab'> ";
    if (i < txt.length) {
        if (txt.charAt(i) == '/')
            document.getElementById("tab").innerHTML += "<br>";
        else if (txt.charAt(i) == '<')
            document.getElementById("tab").innerHTML += "<br>";
        else
            document.getElementById("tab").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        if (i == txt.length)
            document.getElementById("myself").innerHTML += "} </p> <br><button onclick='gotoProjects()' id='projects-btn' value='&gt;  Show Projects'>&gt;  Show Projects</button> <br><button onclick='opemResume()' id='resume-btn' value='&gt;  Resume'>&gt;  Resume</button> ";
    }
}

function gotoProjects() {
    $("#projects-btn").fadeOut(50);
    $("#resume-btn").fadeOut(50);
    $(".dig-avatar").fadeOut(500);
    $(".pipe2").fadeIn(500);
    $(".avtar2").fadeIn(500);
    $("#avtar2").animate({ right: '0vh' }, 2000);
    setTimeout(() => {
        $(".avtar2").fadeOut(200);
        $("#aboutme-page").fadeOut(500);
        setTimeout(() => {
            projects();
        }, 500);
    }, 1700);
}

function projects() {
    $(".water").fadeIn(500);
    $(".pipe3").fadeIn(500);
    setTimeout(() => {

        $(".pipe3").effect("bounce", { times: 3 }, 1000);
        $(".avtar3").fadeIn(50);
        $(".avtar3").animate({ top: '80vh' }, 1000);
        setTimeout(() => {
            $(".pipe3").fadeOut(500);
            $(".project-title").fadeIn(1000);
            $("#project-wrapper").fadeIn(1000);
            setTimeout(() => {

                $(".next-btn2").effect("pulsate", { times: 4 }, 500);
                $(".next-btn").effect("pulsate", { times: 4 }, 500);
            }, 1200);
        }, 1000);
    }, 500);
}

function opemResume() {
    window.open("https://www.tinyfor.me/mohitresume", "_blank");
}

function floating() {
    if (j == 0) {
        $(".avtar3").animate({ left: '70vw' }, 300);
        j = 1;
    } else {
        $(".avtar3").animate({ right: '70vw' }, 300);
        j = 0;
    }

}

function openLink(str) {
    window.open(str, "_blank");
}

function gotoSocialLinks() {
    $(".next-btn2").fadeOut(10);
    $(".next-btn").fadeOut(10);
    $(".avtar3").animate({ left: '90vw' }, 1500);
    setTimeout(() => {

        $("body").css({ 'background': 'brown', 'background-image': 'url(images/brick.png)', 'background-size': '10vh' });
        $(".water").fadeOut(500);
        $("#page3").fadeIn(500);
        setTimeout(() => {
            flagAnimation();
        }, 600);
    }, 1300);

}

function flagAnimation() {
    if (viewportWidth > 1100) {
        $("#avtar-last").animate({ left: '25vh' }, 700);
        $("#avtar-last").animate({ top: '30vh', left: '42vh' }, 300);
        setTimeout(() => {
            $("#avtar-last").attr("src", "images/avtar-pole.png");
            $("#avtar-last").animate({ top: '60vh' }, 400);
            setTimeout(() => {
                $("#avtar-last").attr("src", "images/avatar.png");
                $(".flag").fadeIn(500);
                $(".flag-text").fadeIn(500);
                $("#avtar-last").animate({ left: '50vh' }, 300);
            }, 400);
        }, 1000);
    } else {
        $("#avtar-last").animate({ left: '1vh' }, 700);
        $("#avtar-last").animate({ top: '44vh', left: '10vh' }, 300);
        setTimeout(() => {
            $("#avtar-last").attr("src", "images/avtar-pole.png");
            $("#avtar-last").animate({ top: '70vh' }, 400);
            setTimeout(() => {
                $("#avtar-last").attr("src", "images/avatar.png");
                $(".pole").animate({ height: '50vh', left: '1vh' }, 500);
                $("#avtar-last").animate({ left: '5vh' }, 400);
                setTimeout(() => {
                    $(".flag").fadeIn(500);
                    $(".flag-text").fadeIn(500);
                }, 500);



                // $("#avtar-last").animate({ left: '50vh' }, 300);
            }, 400);
        }, 1000);
    }

}