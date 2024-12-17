$(document).ready(function () {
    // Toggle menu for mobile view
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and Load Events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        // Scroll Spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $(`.navbar [href="#${id}"]`).addClass('active');
            }
        });
    });

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to add or remove the animation class based on scroll
function animateSkills() {
    const skillsColumns = document.querySelectorAll('.skills-column');
    
    skillsColumns.forEach(column => {
        if (isInViewport(column)) {
            column.classList.add('slide-in-right');
        } else {
            // Remove class to allow re-animation on re-enter
            column.classList.remove('slide-in-right');
        }
    });
}

// Run animation on load and scroll
window.addEventListener('load', animateSkills);
window.addEventListener('scroll', animateSkills);
    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });












    
    // EmailJS for contact form
  
    // Initialize EmailJS
   // $(document).ready(function () {
      //  emailjs.init("anupyadavgzp.ms.in@outlook.com"); // Replace with your actual EmailJS User ID

        // EmailJS for contact form
      //  $("#contact-form").submit(function (event) {
        //    event.preventDefault(); // Prevent the default form submission

          //  emailjs.sendForm('service_odbdzyq', 'template_glwxi2w', '#contact-form')
           //     .then(function (response) {
            //        console.log('SUCCESS!', response.status, response.text);
            //        $('#contact-form').trigger("reset"); // Reset form fields
           //         alert("Form Submitted Successfully");
              //  }, function (error) {
              //      console.log('FAILED...', error);
             //       alert("Form Submission Failed! Please try again.");
        //        });
     //   });
   // });
    // Dynamic Title Change on Visibility
    document.addEventListener('visibilitychange', function () {
        document.title = document.visibilityState === "visible" ? "Portfolio | Anup Yadav" : "Come Back To Portfolio";
        $("#favicon").attr("href", document.visibilityState === "visible" ? "assets/images/favicon.png" : "assets/images/favhand.png");
    });

    // Typed.js Effect
    new Typed(".typing-text", {
        strings: ["Software Development", "Full Stack Development", "Web Development", "DevOps Development"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });





    
    // Tilt.js Effect for Projects
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    // Scroll Reveal for Each Section
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });
    srtop.reveal('.home .content h3, .home .content p, .home .content .btn', { delay: 200 });
    srtop.reveal('.home .image', { delay: 400 });
    srtop.reveal('.about .content h3, .about .content .tag, .about .content p, .about .content .box-container, .about .content .resumebtn', { delay: 200 });
    srtop.reveal('.skills .container, .skills .container .bar', { interval: 200 });
    srtop.reveal('.education .box', { interval: 200 });
    srtop.reveal('.work .box', { interval: 200 });
    srtop.reveal('.experience .timeline, .experience .timeline .container', { interval: 400 });
    srtop.reveal('.contact .container, .contact .container .form-group', { interval: 400 });
    srtop.reveal('.header', { interval: 200 });
    srtop.reveal('.footer', { interval: 200 });
});
