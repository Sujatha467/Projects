const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    };
    
    ScrollReveal().reveal(".container .letter-s", {
        duration: 1000,
        delay: 1000,
    });
    ScrollReveal().reveal(".container img", {
        duration: 1000,
        delay: 1500,
    });
    ScrollReveal().reveal(".container .text__left", {
        ...scrollRevealOption,
        origin: "right",
        delay: 2000,
    });
    ScrollReveal().reveal(".container .text__right", {
        ...scrollRevealOption,
        origin: "left",
        delay: 2000,
    });
    ScrollReveal().reveal(".container .explore", {
        duration: 1000,
        delay: 2500,
    });
    ScrollReveal().reveal(".container h5", {
        duration: 1000,
        interval: 500,
        delay: 3000,
    });
    ScrollReveal().reveal(".container .catalog", {
        duration: 1000,
        delay: 5000,
    });
    ScrollReveal().reveal(".container .print", {
        duration: 1000,
        delay: 5500,
    });
    ScrollReveal().reveal(".footer p", {
        duration: 1000,
        delay: 7000,
    });
    



 // Select all buttons with the class "btn" in the menu section
const cartButtons = document.querySelectorAll('.menu .btn');

// Add a click event listener to each button
cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (button.textContent === "Add to Cart") {
      button.textContent = "Added to Cart";

      
      button.style.backgroundColor = ""; 
      button.style.color = "";
    } else {
      button.textContent = "Add to Cart";

     
      button.style.backgroundColor = ""; 
      button.style.color = "";
    }
  });
});
