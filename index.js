
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
      end: "+=3000",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1
  });

  //  about 경력사항 나타나기
    const aniAbout = gsap.timeline();
    aniAbout.from(".ex-wrap", {xPercent: 50, autoAlpha:0}) // opacity 0 시작 > 점점 나타나게
        // .from(".environ-txt", {xPercent: 30, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: aniAbout,
        trigger: ".experience", //해당영역이 화면에 들어오면 애니메이션 작동
        start: "-=600 top", //시작점 기준보다 700px위에
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });






//info나타나기
    const ani2 = gsap.timeline();
    ani2.from(".img-area", {x: -80, autoAlpha:0}) 
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

  //projects 나타나기
    const ani4 = gsap.timeline();
    ani4.from(".pro-sub", {y: 150, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani4,
        trigger: "#projects", 
        start: "top 60%", 
        end: "top 40%",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });

  //projects tab 메뉴---------------------------------------------------
    function openTab(tabName, btn){

        let tabs = document.getElementsByClassName('tab');
        for(let i = 0; i < tabs.length; i++){
            tabs[i].style.display = "none";
        }

        let menus = document.querySelectorAll(".work-menu>li");
        menus.forEach(list => list.classList.remove("active"));

        document.getElementById(tabName).style.display = "block";
        if(btn){
            btn.classList.add("active");
        }
    }

    document.addEventListener("DOMContentLoaded", function(){
        let firstBtn = document.querySelector(".work-menu>li");
        openTab("web", firstBtn);
    });


    //프로젝트 이미지 스크롤보여주기
    const imgAreas = document.querySelectorAll('.web-cont > li .img-area');

    imgAreas.forEach(imgArea => {
    const img = imgArea.querySelector('img');
    const parentLi = imgArea.parentElement;

    imgArea.addEventListener('mouseenter', () => {
        const imgHeight = img.offsetHeight;
        const parentHeight = parentLi.offsetHeight;
        const moveY = imgHeight - parentHeight;
        imgArea.style.transform = `translateY(-${moveY}px)`; // 천천히 이동
    });

    imgArea.addEventListener('mouseleave', () => {
        imgArea.style.transform = 'translateY(0)';
    });
    });







  //contact 나타나기
    const ani5 = gsap.timeline();
    ani5.from("#footer .sub-tit", {y: 150, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani5,
        trigger: "#footer", 
        start: "top 60%", 
        end: "top 40%",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });


