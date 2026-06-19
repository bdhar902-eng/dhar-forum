// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const update = () => {

        const increment = Math.ceil(target / 100);

        count += increment;

        if (count >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = count;

            requestAnimationFrame(update);

        }

    };

    update();

});


// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.style.background="#08142fdd";
        header.style.backdropFilter="blur(12px)";
        header.style.position="sticky";
        header.style.top="0";
        header.style.zIndex="1000";

    }else{

        header.style.background="transparent";

    }

});