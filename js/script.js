$(document).ready(function(){
    $('.nearby-cards-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
            }
          },
        ],
        swipeToSlide: true,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        zIndex: 1,
        dots: true,
      });


})


$(document).ready(function(){
    $('.community-projects-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
            }
          },
        ],
        swipeToSlide: true,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        zIndex: 1,
        dots: true,
      });


})



const iconMenu = document.querySelector(".burger-menu");
const mobileMenuBlock = document.querySelector(".mobile-menu")

if (iconMenu) {
  
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
    mobileMenuBlock.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  })
}

const callButtons = document.querySelectorAll(".button");
const popUpForm = document.querySelector(".popup-form");

const closePopUp = document.querySelectorAll(".fa-xmark");

const popUpButton =  popUpForm.querySelector(".form-button");

const popUpTitle = popUpForm.querySelector(".form-title");

const popUpDownloadAction = popUpForm.querySelector(".form");

popUpDownloadAction["action"]


callButtons.forEach((callButton) => {
    callButton.addEventListener("click", function () {
        popUpForm.classList.add("_active");
        document.body.classList.add("_lock");
        iconMenu.classList.remove("_active");
        mobileMenuBlock.classList.remove("_active");
        if (callButton.classList.contains("download-button")) {
          
          popUpTitle.innerHTML = "Download"
          popUpDownloadAction["action"] = "/thank-you.html"
          popUpButton["value"] = "Download now"
        } else {
          popUpButton["value"] = "Request callback"
          popUpDownloadAction["action"] = "./php/feedback.php"
          popUpTitle.innerHTML = "Register your interest"

        }


    })
})

closePopUp.forEach((x) => {
    x.addEventListener("click", function () {
        popUpForm.classList.remove("_active");
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        mobileMenuBlock.classList.remove("_active");
    })
})


document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        popUpForm.classList.remove('_active');
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        mobileMenuBlock.classList.remove("_active");
    }
});