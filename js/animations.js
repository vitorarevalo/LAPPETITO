let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  gsap.from(".flag", {
  y: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".italian-flag",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".huge-logo", {
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".huge-logo",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".about-header", {
  x: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-header",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});


gsap.from(".about-container", {
  x: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-container",
    scroller: "body",
    start: "top 100%",
    end: "top 30%",
    scrub: true,
  }
});


gsap.from("#menu-dish-description", {
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#menu-dish-description",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".menu-slider", {
  x: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".menu-slider",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".chef-img", {
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".chef-img",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});


gsap.from(".chef-text", {
  x: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".chef-text",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});


gsap.from(".flag2", {
  y: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".italian-flag2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});



gsap.from("#rating-container", {
  y: 40,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#rating-container",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});



gsap.from(".depoiment-form-container", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".depoiment-form-container",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".flag3", {
  y: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".italian-flag3",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".sub-card1", {
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".sub-card",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".sub-card2", {
  x: 400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".sub-card2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from("#chef-card", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#chef-card",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});



gsap.from("#location-container", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#location-container",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

  
});

