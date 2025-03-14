document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    // gsap.to('#box-1', { rotation: 0, x: 100, duration: 1 })
    // gsap.to('#box-1', { rotation: 0, x: 100, duration: 1, delay: 0 })
    // gsap.to('#box-2', { rotation: 0, x: 100, duration: 1, delay: 1 })
    // gsap.to('#box-3', { rotation: 0, x: 100, duration: 1, delay: 2 })

    // gsap.fromTo("#box-1", { y: -100 }, { rotation: 0, y: 100, duration: 4, delay: 0 });


    // timeline
    // let tl = gsap.timeline();
    // tl.to("#box-1", { x: 200, duration: 1 })
    //     .to("#box-2", { y: 100, duration: 1 })
    //     .to("#box-3", { rotation: 360, duration: 1 });


    // ease

    // gsap.to('#box-1', { duration: 1, rotation: 360, ease: "elastic" })


    // staging
    // gsap.to(".box", {
    //     x: 100,
    //     duration: 1,
    //     rotation: 360,
    //     stagger: 1,
    // });

    //eventlistner
    gsap.to(".box", {
        x: 100,
        duration: 1,
        rotation: 360,
        stagger: 1,
        onComplete: () => {
            alert('hello world')
        }
    });

    // gsap code here!
});