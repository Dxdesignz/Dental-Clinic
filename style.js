const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active');
}

let header = document.getElementById("data");
let btns = header.getElementsByClassName("btna");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseover", function(){
        let current = document.getElementsByClassName("activelink");
        current[0].className = current[0].className.replace(" activelink", "");
        this.className += " activelink";
    });
}

function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'counter1', start: 0, end: 150, duration: 1000 },
        { id: 'counter2', start: 0, end: 50, duration: 1000 },
        { id: 'counter3', start: 0, end: 1000, duration: 1000 },
        { id: 'counter4', start: 0, end: 50, duration: 1000 }
    ];

    const counterSection = document.getElementById('counter-section');
    const options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    animateCounter(counter.id, counter.start, counter.end, counter.duration);
                });
                observer.unobserve(counterSection); // Stop observing once the animation starts
            }
        });
    }, options);

    observer.observe(counterSection);
});

var swiper = new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}
