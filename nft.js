

gsap.from(".header" ,{duration :2, y:"-150px",ease:"power1" })
gsap.from("li" ,{duration:1, opacity:0 ,delay:1, stagger:.5})

gsap.from("main" ,{duration:4, x:"-550px"})
gsap.from("aside" ,{duration:4, x:"550px",
                    duration :4 ,opacity:0})

gsap.from("footer",{duration:4,y:"250px",ease:"slow"})

