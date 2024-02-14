const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easaInOut
    })
    .to("#texts", {
        x: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })

}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();