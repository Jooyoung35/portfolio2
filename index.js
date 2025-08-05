
  var typed = new Typed('#typed', {
    strings: ['Designer', 'Publisher', 'Developer', 'Creator'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });



// about 텍스트 애니메이션
  const ani7 = gsap.timeline();
  ani7.from("#about .t1", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
      .from("#about .t2", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
      .from("#about .t3", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
      .from("#about .t4", {autoAlpha: 0, duration: 1, y: 50}, "+=1")
      .from("#about .t5", {autoAlpha: 0, duration: 1, y: 50}, "+=1")

  ScrollTrigger.create({
      animation: ani7,
      trigger: "#about",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1
  });