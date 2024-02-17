function locoanime() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loader() {
    var tl = gsap.timeline();

tl.from(".line h1", {
    y : 170,
    stagger: 0.2
})

tl.from(".line h4,h5", {
    y : 170,
    opacity: 0,
    onStart: function() {
        var h4counter = document.querySelector("#h4counter");
        var grow = 0;
        setInterval(()=>{
            if(grow <= 100) {
                h4counter.innerHTML = grow++;
            }
            else {
                grow = 100;
                clearInterval();
            }
        },35);
    }
})

tl.to(".line h6", {
    animationName: "loaderanime",
    opacity: 0
})

tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 3.3
})

tl.from("page1", {
    y:600,
    duration: 0.5,
}) 
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0,
    duration:0.5
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2,#hero3 h3, #hero4 h1",{
    y:150,
    stagger:0.2
})
}
function imageAnime() {
    Shery.imageEffect(".image-div", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749691738595},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.6,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":18.32,"range":[0,100]}},
        gooey: true
    });
}
function flagAndCursor() {
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#crsr,#flag",{
            top:dets.y,
            left:dets.x,
            duration:0.2
        })
    })
    
    var hero3 = document.querySelector("#hero3");
    hero3.addEventListener("mouseenter",()=> {
        gsap.to("#flag", {
            opacity: 1
        })
    })
    hero3.addEventListener("mouseleave",()=> {
        gsap.to("#flag", {
            opacity: 0
        })
    })
}
locoanime();
loader();
flagAndCursor();
Shery.makeMagnet("#nav-part2 h4");
imageAnime();


var videocontainer = document.querySelector("#video-container");
var videocursor = document.querySelector("#video-cursor");

videocontainer.addEventListener("mousemove",(dets)=>{
    gsap.to("#video-cursor",{
        top:dets.y-450,
        left:dets.x-575,
        duration:0.2
    })

})
videocontainer.addEventListener("mouseleave",(dets)=>{
    gsap.to("#video-cursor",{
        top: 0,
        left: 0,
        duration:0.2
    })
})


var i=0;
videocontainer.addEventListener("click",()=>{
    var video = document.querySelector("video");
    
    if(i===0){
        video.play(); 
        video.style.opacity = 1;
        document.querySelector("#video-container img").style.display = "none";
        gsap.to("#video-cursor",{
            scale: 0.5
        })
        videocursor.innerHTML = `<i class="ri-pause-fill"></i>`;
        i++;
    }
    else {
        video.pause();
        video.style.opacity = 0;
        document.querySelector("#video-container img").style.display = "block";
        gsap.to("#video-cursor",{
            scale: 1
        })
        videocursor.innerHTML = `<i class="ri-play-fill"></i>`;
        i=0;
    }
    
})




var circle1 = document.querySelector(".circle1");

circle1.addEventListener("mouseenter",()=>{
    circle1.innerHTML = "welcome please visit the website💕";
    circle1.style.fontSize = "2vw";
})
circle1.addEventListener("mouseleave",()=>{
    circle1.innerHTML = `<i class="ri-arrow-down-line"></i>`;
    circle1.style.fontSize = "6vw";
})

var circle2 = document.querySelector(".circle2");

circle2.addEventListener("mouseenter",()=>{
    circle2.innerHTML = "welcome please visit the website💕";
    circle2.style.fontSize = "2vw";
})
circle2.addEventListener("mouseleave",()=>{
    circle2.innerHTML = `<i class="ri-arrow-down-line"></i>`;
    circle2.style.fontSize = "6vw";
})