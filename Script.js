Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./1.mp4", "./2.mp4", "./3.mp4"] });


gsap.to(".fleftelm", {
    scrollTrigger: {           //scrollTrigger fimgs la thambvnar
        trigger: ".fimgs", 
        pin: true,              // using pin:true
        start: "top top",      //start when top top la yeyl
        end: "bottom bottom",  //end when bottom bottom vr yeyel
        endTrigger: ".last",   // end Trigger when u want to stop the animation
        scrub: 1               //animate while scrolling behavior
    },
    y: "-300%",
    ease: Power1
})


let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
     sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
                setScroll(prog.progress+index)
            }
        })
     })
    },
  });

