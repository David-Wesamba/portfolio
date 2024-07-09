let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });

        };
      
    });

    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove('active');


};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 })

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });




// Coding Challenge #3
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
(height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �
*/


// const mark= {
//     fullName:'Mark Miller',
//     mass: 78 , 
//     height: 1.69 ,
//     calcBMI: function() {
//         this.bmi=this.mass/this.height ** 2 ;
//         return this.bmi;
//     }

// };

// const john ={
//     full_name:'John Smith',
//     mass: 92 , 
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi=this.mass/this.height ** 2 ;
//         return this.bmi;
//     } 
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);