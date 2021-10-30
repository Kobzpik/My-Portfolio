//fix nav bar
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".test").addClass("fixn");
        } else {
            $(".test").removeClass("fixn");
        }
    })
});



//contact form validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    if (name.length < 3) {
        alert("Please enter valid name 😐.Name shuld be at least 3 character");
        return false;
    }
    if (subject.length < 4) {
        alert("Please enter valid subject 😐.Subject shuld be at least 5 character");
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        alert("Please enter valid E-mail");
        return false;
    }

    if (message.length <= 2) {
        alert("Please enter valid message 😐.Subject shuld be at least 2 character.");
        return false;
    } else {
        alert("Form Submitted Successfully!");
        return true;
    }

};


//Testimonials  Owl Carousel
$(document).ready(function() {
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        margin: 5,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    })
});