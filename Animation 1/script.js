let tl = gsap.timeline();

tl.from(".nav h3",{
    y:-100,
    duration:1,
    stagger:0.25,
    opacity : 0
})

tl.from(".text h1",{
    x : -500,
    duration: 0.8,
    stagger:0.2,
    opacity: 0
})

tl.from("img",{
    x : 30,
    rotate : 20,
    opacity: 0,
    stagger: 0.75,
    duration : 1.25 
})