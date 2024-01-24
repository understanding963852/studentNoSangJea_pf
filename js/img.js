// progress--------------

var $container=$('#progress'),
    $progressBar=$('.progress-bar'),
    $progressText=$('.progress-text'),
    imgLoad=imagesLoaded('body'),
    imgTotal=imgLoad.images.length,//이미지가 모두 몇개인지를 알기위해
    imgLoaded=0,//로드되는 이미지수
    current=0,//전체대비 로드된수의 진행률을 반영
   /* progressTimer=setInterval(function(){
        updateProgess()
    },1000/60);*/
progressTimer=setInterval(updateProgress,1000/60);

//animate에서 중간중간에 할일 progress
imgLoad.on( 'progress', function(  ) {
  imgLoaded++;
    //console.log(imgLoaded);
});


function updateProgress(){
    //진행률 -> bar  50 /192*100
    var target= imgLoaded/imgTotal*100;
    //console.log(target);
    current +=(target - current) *0.5;
    console.log(current);
    $progressBar.css({width:current+"%"});
    $progressText.text(Math.ceil(current)+"%");
    
    if(current>99.9){
        clearInterval(progressTimer);
        $container.addClass('progress-complete');
       //A.animate({width:100%},시간,이징,끝나면할일) 
    $progressBar.add($progressText).delay(100).animate({
        opacity:0
    },250,function(){
        $container.animate({top:"-100%"},500,'easeInOutCubic');
    })
        
    }
    
}

//---- hover----

var myAnimation = new hoverEffect({
  parent: document.querySelector('.my-div'),
  intensity: 0.3,
  image1: 'img/my_2.jpg',
  image2: 'img/my_1.jpg',
  displacementImage: 'img/displacement/3.jpg',
  imagesRatio: 500 / 600
});
var myAnimation2 = new hoverEffect({
  parent: document.querySelector('.m2'),
  intensity: 0.3,
  image1: 'img/my_3.jpg',
  image2: 'img/my_4.png',
  displacementImage: 'img/displacement/2.jpg',
  imagesRatio: 500 / 600

});
var myAnimation3 = new hoverEffect({
  parent: document.querySelector('.m3'),
  intensity: 0.3,
  image1: 'img/my_5.jpg',
  image2: 'img/my_6.png',
  displacementImage: 'img/displacement/13.jpg',
  imagesRatio: 500 / 600

});

VanillaTilt.init(document.querySelectorAll(".tiltEle"), {
  max: 5,
  speed: 1500
});

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".tiltEle"));

var swiper = new Swiper('.swiper-container', {
  effect: "coverflow",
  grabCursor: true,
  // allowSlideNext:true,
  // allowSlideLeft:true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 25,
  observer : true,
  observeParents : true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: true,
    scale: 1.5,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// gallery_ add

$('.gall_1').click(function (e) {
  e.preventDefault();
  $('.gallery_1.g1').fadeIn();
});

$('.gallery_1.g1 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.gallery_1.g1').fadeOut();
})

$('.gall_2').click(function (e) {
  e.preventDefault();
  $('.gallery_1.g2').fadeIn();
});

$('.gallery_1.g2 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.gallery_1.g2').fadeOut();
})

$('.gall_3').click(function (e) {
  e.preventDefault();
  $('.gallery_1.g3').fadeIn();
});

$('.gallery_1.g3 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.gallery_1.g3').fadeOut();
})

$('.gall_4').click(function (e) {
  e.preventDefault();
  $('.gallery_1.g4').fadeIn();
});

$('.gallery_1.g4 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.gallery_1.g4').fadeOut();
})

$('.gall_5').click(function (e) {
  e.preventDefault();
  $('.gallery_1.g5').fadeIn();
});

$('.gallery_1.g5 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.gallery_1.g5').fadeOut();
})





// MY_ PIC
$('.my_pic_btn1').click(function (e) {
  e.preventDefault();
  $('.my_photo1').fadeIn();
});

$('.my_photo1 .close_g').click(function (ev) {
  ev.preventDefault();
  $('.my_photo1').fadeOut();
})






//my photo

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// -------------------- my_car 2 --------------

// --- img slide ----/

const swiper2 = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  observer : true,
  observeSlideChildren:true,
  observeParents : true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  simulateTouch: false,
});

let comparisonsInitialized = false;
let getCursorPos;

// // Click event handler for '.my_pic_btn2'
// document.querySelector('.my_pic_btn2').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.my_photo2').style.opacity = 'block';
//   initComparisons();
// });




// // Click event handler for '.close_g' within '.my_photo2'
// document.querySelector('.my_photo2 .close_g').addEventListener('click', function(ev) {
//   ev.preventDefault();
//   document.querySelector('.my_photo2').style.display = 'none';
//   // comparisonsInitialized = false;


// });

// Click event handler for '.my_pic_btn2'







// MY_ CAR
// $('.my_pic_btn2').click(function(e){
//   e.preventDefault();
//   $('.my_photo2').fadeIn();
// });

// $('.my_photo2 .close_g').click(function(ev){
//   ev.preventDefault();
//   $('.my_photo2').fadeOut();
// })

//---------------------------------------------------------

let half= false;

function initComparisons() {
  // if (!comparisonsInitialized) {
  //   // Initialize comparisons logic here
  //   comparisonsInitialized = true;
  // }

  if (!comparisonsInitialized) {
    getCursorPos = function (e) {
      let a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }

    let x, i;
    x = document.getElementsByClassName("img-comp-overlay");
    // console.log(x.length)//1
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    comparisonsInitialized = true;

  }

  function compareImages(img) {
    let slider, clicked = 0,
      w, h;

    w = img.offsetWidth;
    h = img.offsetHeight;

    img.style.width = (w / 2) + "px";


    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");

    img.parentElement.insertBefore(slider, img);

    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

    slider.addEventListener("mousedown", slideReady);
    slider.addEventListener("mouseup", slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove); //클릭한 상태로 움직임
    }

    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }


    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e);

      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }

    function getCursorPos(e) {
      let a, x = 0;
      //changedTouches-->	이 터치와 이전 터치 사이에 상태가 변경된 터치 개체 목록
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset; //화면을 좁히면 깨지기 때문
      return x;


    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }

}
// swiper2.update();
// swiper2.updateSlides();

document.querySelector('.my_pic_btn2').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.my_photo2').style.display = 'block';
  initComparisons();

});

// Click event handler for '.close_g' within '.my_photo2'
document.querySelector('.my_photo2 .close_g').addEventListener('click', function (ev) {
  ev.preventDefault();
  document.querySelector('.my_photo2').style.display = 'none';

  // Reset comparisons and getCursorPos when the close button is clicked
  // comparisonsInitialized = false;
  getCursorPos = undefined;
  // comparisonsInitialized = true;
  

  // let sliders = document.querySelectorAll('.img-comp-slider');
  // sliders.forEach(function (slider) {
  //   slider.parentNode.removeChild(slider);
  // });
});


//---------------------------------------------

// function initImageSlider(img) {
//   let slider, clicked = 0, w, h;

//   w = img.offsetWidth;
//   h = img.offsetHeight;

//   img.style.width = (w / 2) + "px";

//   slider = document.createElement("DIV");
//   slider.setAttribute("class", "img-comp-slider");

//   img.parentElement.insertBefore(slider, img);

//   slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
//   slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

//   slider.addEventListener("mousedown", slideReady);
//   slider.addEventListener("mouseup", slideFinish);

//   function slideReady(e) {
//     e.preventDefault();
//     clicked = 1;
//     window.addEventListener("mousemove", slideMove);
//   }

//   function slideFinish() {
//     clicked = 0;
//   }

//   function slideMove(e) {
//     var pos;
//     if (clicked == 0) return false;
//     pos = getCursorPos(e);

//     if (pos < 0) pos = 0;
//     if (pos > w) pos = w;
//     slide(pos);
//   }

//   function getCursorPos(e) {
//     let a, x = 0;
//     e = (e.changedTouches) ? e.changedTouches[0] : e;
//     a = img.getBoundingClientRect();
//     x = e.pageX - a.left;
//     x = x - window.pageXOffset;
//     return x;
//   }

//   function slide(x) {
//     img.style.width = x + "px";
//     slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
//   }
// }

// document.querySelector('.my_pic_btn2').addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.my_photo2').style.display = 'block';

//   // Initialize image slider
//   let overlayImages = document.querySelectorAll('.my_photo2 .img-comp-overlay img');
//   overlayImages.forEach(function (img) {
//     initImageSlider(img);
//   });
// });

// // Click event handler for '.close_g' within '.my_photo2'
// document.querySelector('.my_photo2 .close_g').addEventListener('click', function (ev) {
//   ev.preventDefault();
//   document.querySelector('.my_photo2').style.display = 'none';

//   // Remove image sliders
//   let sliders = document.querySelectorAll('.img-comp-slider');
//   sliders.forEach(function (slider) {
//     slider.parentNode.removeChild(slider);
//   });
// });

