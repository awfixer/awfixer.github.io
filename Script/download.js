var ID = 1;
/* Scrool down and flashing For community  */ 

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.go-commun');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetSections = document.querySelectorAll(".icon-cy");
        
            targetSections.forEach(targetSection => {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                switch (ID) {
                    case 1:
                        targetSection.classList.add('flashing');       
                        setTimeout(() => {
                            targetSection.classList.remove('flashing');
                        }, 10000); 
                        break;
                    case 2:
                        targetSection.classList.add('flashing-Acer');
                        setTimeout(() => {
                            targetSection.classList.remove('flashing-Acer');
                        }, 10000);        
                        break;

                    case 3 : 
                        targetSection.classList.add('flashing-Wireless');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-Wireless');
                        }, 10000);        
                        break;

                    case 4 : 
                        targetSection.classList.add('flashing-Dark');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-Dark');
                        }, 10000);   
                        break;
                       
                    case 5 : 
                        targetSection.classList.add('flashing-ARM');
                        setTimeout(() => {
                        targetSection.classList.remove('flashing-ARM');
                        }, 10000);   
                        break;

                    default:
                        targetSection.classList.add('flashing');       
                        setTimeout(() => {
                            targetSection.classList.remove('flashing');
                        }, 10000); 
                        break;
                }
            
            }); 
        });
    });
});





/* Home-edtion*/ 

$("#Home-ed").click(function (){
    if (ID == 1) {
    } else {
        $(".active").fadeOut(1000, function() {
            $(this).removeClass("active");
            $("#Home-ed-cont").fadeIn(1000);
            $("#Home-ed-cont").addClass("active");


         /* Home Theme edition*/
        $(".nav-list").css("border-color","#038c96");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left, rgb(11, 206, 206), #0571c3)");
        $(".logo-back img").attr("src","./Images/Logos/exodia-cyan.png");
        
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #05eeffe3");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a , footer li a").hover(function(){
                $(this).css("color","#05eeffe3");
            }, function(){
                 $(this).css("color","#fff");
            });   

          $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,rgb(11, 206, 206) , #0571c3)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        }); 
        
        $("footer").css("border-color","#01a8b4");
            ID = 1;
        });
    }
});



/* Predator-edtion*/ 

$("#Predator-ed").click(function (){
    if (ID == 2) {
    } else {
      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#predator-ed-cont").fadeIn(1000,)
        $('#predator-ed-cont').addClass("active");
        $('#predator-ed-cont').removeClass("disactive");

        /* Predator Theme edition*/
        $(".nav-list").css("border-color","#A600E7");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left, #38004e  , #A600E7 )");
        
        $(".logo-back img").attr("src","./Images/Logos/exodia.png");
        
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #A600E7");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a , footer li a").hover(function(){
                $(this).css("color","#A600E7");
            }, function(){
                 $(this).css("color","#fff");
            });

        $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,#38004e , #A600E7)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        }); 
        
        $("footer").css("border-color","#A600E7");
        ID = 2;
        });
    }
});

/* Wireless-ed */


$("#Wireless-ed").click(function (){
    if (ID == 3) {
    } else {      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#wireless-ed-cont").fadeIn(1000,)
        $('#wireless-ed-cont').addClass("active");
        $('#wireless-ed-cont').removeClass("disactive");

        /* Wireless Theme edition*/
        $(".nav-list").css("border-color","#a4133c");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left,#590d22 , #a4133c)");
        $(".logo-back img").attr("src","./Images/Logos/exodia-red.png");
       
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #a4133c");
            }, function(){
                $(this).css("box-shadow","");
            });

        $(".nav-list li a , footer li a").hover(function(){
            $(this).css("color","#a4133c");
        }, function(){
                $(this).css("color","#fff");
        });

        $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,#590d22 , #a4133c)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        }); 
        
        $("footer").css("border-color","#a4133c");
         ID = 3;
        });
    }
});


/* Dark-ed*/
$("#Dark-ed").click(function (){
    if (ID == 4) {
    } else {
      
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#Dark-ed-cont").fadeIn(1000,)
        $('#Dark-ed-cont').addClass("active");
        $('#Dark-ed-cont').removeClass("disactive");

        /* Wireless Theme edition*/
        $(".nav-list").css("border-color","#0466c8");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left,#010139  , #0466c8)");
        $(".logo-back img").attr("src","./Images/Logos/exodia-blue.png");
        
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #0466c8");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a, footer li a").hover(function(){
                $(this).css("color","#0466c8");
            }, function(){
                 $(this).css("color","#fff");
            });

        $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,#010139 , #0466c8)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        });   
       
        $("footer").css("border-color","#0466c8");
        
         ID = 4;
        });
    }
});



/* ARM-ed*/
$("#ARM-ed").click(function (){
    if (ID == 5) {
    } else {
        $(".active").fadeOut(1000, function() {
        $(this).removeClass("active");
        $("#ARM-ed-cont").fadeIn(1000,)
        $('#ARM-ed-cont').addClass("active");
        $('#ARM-ed-cont').removeClass("disactive");
               
        /* ARM Theme edition*/
        $(".nav-list").css("border-color","#4ad66d");
        $(".nav .nav-btn").css("background-image","linear-gradient(to left,#10451d , #4ad66d)");
        $(".logo-back img").attr("src","./Images/Logos/exodia-green.png");

          
        $(".logo-back img").hover(function(){
            $(this).css("box-shadow","1px 1px 5px 1px #4ad66d");
            }, function(){
                $(this).css("box-shadow","");
            });

            $(".nav-list li a, footer li a").hover(function(){
                $(this).css("color","#4ad66d");
            }, function(){
                 $(this).css("color","#fff");
            });

          $('footer h4 , footer code').css({ 
            'background-image' : 'linear-gradient(to left,#10451d , #4ad66d)', 
            '-webkit-background-clip': 'text', 
            '-webkit-text-fill-color': 'transparent' 
        });   

        $("footer").css("border-color","#4ad66d");
        ID = 5;
        });
    }
});























/* Home Download Links */ 

document.querySelector("#onedrive-home").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/home/", "_blank");

});

/* Header -downlaod*/ 
document.querySelector("#google-drive-home").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1R5bZhI8yGfr9Z3Xq_QWnUIK1qvh42a2_?usp=sharing", "_blank");

});

/* Header-wiki*/ 
document.querySelector("#torrent-home").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});

/* Home-archive */ 
document.querySelector("#Archive").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});




/* Acer-predator Download Links */ 

document.querySelector("#onedrive-Predator").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/predator/", "_blank");

});

/* Acer-predator-downlaod*/ 
document.querySelector("#google-drive-Predator").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1RHyGWLOTf4mtoVpHpGzNOJRZ8UnZI2PR?usp=sharing", "_blank");

});

/* Acer-predator*/ 
document.querySelector("#torrent-Predator").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});


/* Acer-archive */ 
document.querySelector("#Archive-Acer").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});







/* wireless Download Links */ 

document.querySelector("#onedrive-Wireless").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/latest/wireless/", "_blank");

});

/* Wireless-downlaod*/ 
document.querySelector("#google-drive-Wireless").addEventListener("click", function() {
window.open("https://drive.google.com/drive/folders/1zPh229ZV360hwpbQTSQU9UXfQKYI0-90?usp=sharing", "_blank");

});

/* Wireless-predator*/ 
document.querySelector("#torrent-Wireless").addEventListener("click", function() {
window.open("https://fosstorrents.com/distributions/exodia-os/", "_blank");
 
});

/* Wireless-archive */ 
document.querySelector("#Archive-Wireless").addEventListener("click", function() {
    window.open("https://omansh.vercel.app/ExodiaOS/archive/","_blank");
});











