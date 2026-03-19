(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
  
const toggleBtn = document.getElementById("chatbotToggle");
const chatBox = document.getElementById("chatbotBox");
const closeBtn = document.getElementById("chatbotClose");
const sendBtn = document.getElementById("chatbotSend");
const input = document.getElementById("chatbotInput");
const body = document.getElementById("chatbotBody");

// Toggle Open
toggleBtn.onclick = () => {
    chatBox.style.display = "flex";
};

// Close Chat
closeBtn.onclick = () => {
    chatBox.style.display = "none";
};

// Predefined Answers
function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("course")) {
        return "We offer Web Development, VFX, Digital Marketing, and AI courses.";
    } 
    else if (message.includes("fee") || message.includes("price")) {
        return "Course fees start from $29,999. Contact us for detailed pricing.";
    }
    else if (message.includes("duration")) {
        return "Our courses range from 3 months to 6 months.";
    }
    else if (message.includes("contact")) {
        return "You can contact us at info@skillparkhub.com or call +91 73053 05269.";
    }
    else if (message.includes("hello") || message.includes("hi")) {
        return "Hello 👋 How can I assist you today?";
    }
    else {
        return "Sorry, I didn’t understand that. Please ask about courses, fees, or duration. Please Contact call +91 73053 05269.";
    }
}

// Send Message
function sendMessage() {
    const message = input.value.trim();
    if (message === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    body.appendChild(userMsg);

    input.value = "";

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = getBotReply(message);
        body.appendChild(botMsg);

        body.scrollTop = body.scrollHeight;
    }, 600);
}

sendBtn.onclick = sendMessage;

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);





const carousel = document.querySelector(".carousel-3d");
const items = document.querySelectorAll(".carousel-3d-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const total = items.length;
let angle = 0;
const step = 360 / total;
const radius = 400;

function setupCarousel() {
    items.forEach((item, index) => {
        const rotate = step * index;
        item.style.transform = `rotateY(${rotate}deg) translateZ(${radius}px)`;
    });
}

function rotateCarousel(direction) {
    if (direction === "next") {
        angle -= step;
    } else {
        angle += step;
    }
    carousel.style.transform = `rotateY(${angle}deg)`;
}

nextBtn.addEventListener("click", () => rotateCarousel("next"));
prevBtn.addEventListener("click", () => rotateCarousel("prev"));

/* Auto Rotate */
setInterval(() => {
    rotateCarousel("next");
}, 4000);

setupCarousel();






// About page

let elements=document.querySelectorAll('.fade-up');

window.addEventListener('scroll',function(){

elements.forEach(function(el){

let position=el.getBoundingClientRect().top;

let screenHeight=window.innerHeight;

if(position < screenHeight-100){

el.classList.add('active');

}

});

});




