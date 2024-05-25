function scrollingAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function navPage1Animation() {
    var tl = gsap.timeline();

    tl.from("nav img", {
        y: -30,
        duration: 1,
        opacity: 0,
    })

    tl.from("#nav-right h4", {
        y: -30,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
    })

    tl.from("#nav-right button", {
        scale: 0,
        duration: 0.6,
    })

    tl.from("#nav-right i", {
        scale: 0,
    })

    tl.from("#hero-left h1", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    })

    tl.from("#hero-left p", {
        y: 10,
        opacity: 0,
        duration: 0.8,
    })

    tl.from("#hero-left h4", {
        y: 10,
        opacity: 0,
        duration: 0.8,
    })

    tl.from("#hero-right img", {
        duration: 0.5,
        scale: 0,
    })
}

function page2Animation() {
    gsap.from("#page2-top", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page2",
            // markers: true,
            start: "top 70%",
            end: "top 10%",
        }
    })
    
}

function page3Animation() {
        gsap.from("#page3-top", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page3",
            // markers: true,
            start: "top 70%",
            end: "top 10%",
        }
    })
}

function page4Animation() {
    gsap.from("#page4-top", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page4",
        // markers: true,
        start: "top 70%",
        end: "top 10%",
    }
})
}

function page5Animation() {
    gsap.from("#page5-top", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page5",
        // markers: true,
        start: "top 70%",
        end: "top 10%",
    }
})
}

scrollingAnimation();

navPage1Animation();

page2Animation()

page3Animation();

page4Animation();

page5Animation();