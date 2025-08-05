
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


  // 배경고정 (고정시키기)
  // const panel = document.querySelector("#intro"); //고정할 섹션 넣기

  // ScrollTrigger.create({
  //     trigger: panel,
  //     start: "top top",
  //     pin: true,
  //     pinSpacing: false
  // });




  // profile 나타나기
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.utils.toArray(".ex-wrap").forEach((item) => {
//   gsap.set(item, { autoAlpha: 0, x: 100 }); 

//   ScrollTrigger.create({
//     trigger: item,
//     start: "top 80%",     
//     end: "bottom 20%",     
//     onEnter: () => animate(item),
//     // markers: false,
//   });
// });

// const animate = (item) => {
//   gsap.to(item, {
//     autoAlpha: 1,
//     x: 0,
//     duration: 1.2,
//     ease: "expo.out", //부드럽게 나타나기!!!
//     overwrite: "auto"
//   });
// };


//info나타나기
    const ani2 = gsap.timeline();
    ani2.from(".img-area", {x: -150, autoAlpha:0}) //왼쪽 -200px, opacity 0 시작 > 점점 나타나게
        .from(".txt-area", {x: 100, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".info", //brand-intro가 화면에 들어오면 애니메이션 작동
        start: "-=700 top", //시작점 기준보다 700px위에
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });


