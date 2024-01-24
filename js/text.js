// ---- cookie----------

// let currentCookie=document.cookie;
// let cookieCheck=currentCookie.indexOf('green');

// console.log(cookieCheck)

// if(cookieCheck>-1){
//   document.querySelector('.notice').style.display='none';
// }else{
//   document.querySelector('.notice').style.display='block';

// }


// document.querySelector('.hide').addEventListener('click', ()=>{
//   let date=new Date();
//   date.setDate(date.getDate()+1);
//   let setCookie = 'CookieName=green; ';
//   setCookie += 'expires='+date.toUTCString();
  
//   document.cookie=setCookie;
//   console.log(setCookie)
// })

// document.querySelector('.close').addEventListener('click', function(){
//   this.parentElement.style.display='none';
// })
let currentCookie=document.cookie;
let cookieCheck=currentCookie.indexOf('violet');
//console.log(cookieCheck)


if(cookieCheck>-1){
    document.querySelector('.notice').style.display="none";
}else{
    document.querySelector('.notice').style.display="block";
}


document.querySelector('#cb').addEventListener("click",()=>{
    let date=new Date();
    date.setDate(date.getDate() + 1); //getDate 오늘날짜 뽑아짐

    let setCookie= "CookieName=violet; ";
        setCookie += "expires="+ date.toUTCString();
        //console.log(setCookie)

    document.cookie=setCookie;
})


document.querySelector('.close').addEventListener('click',function(e){
    e.preventDefault();

    //console.log(this)
    this.parentElement.style.display="none";
})





// --- text array ----

let pTag1 = document.querySelector('.first-parallel')
let pTag2 = document.querySelector('.second-parallel')
let pTag3 = document.querySelector('.third-parallel')

// let textArr1 = 'CAUTION STOP CAUTION STOP CAUTION STOP CAUTION STOP'.split(" "); //띄워쓰기를 기준으로 잘라서 배열
let textArr1 = '. . About. me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . . About . me . .'.split(" "); //띄워쓰기를 기준으로 잘라서 배열
// console.log(textArr1)

let textArr2 = '. my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works . my . portfolio . works'.split(' ');
// // console.log(textArr2)
let textArr3 = '. contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me . . contact. me .'.split(' ');

// let arr=[];
// arr.push(...textArr1);
// console.log(arr)

let count1 = 0;
let count2 = 0;
let count3 = 0;


initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)

function initTexts(element, textArry) {
  textArry.push(...textArry) //8개의 배열에 동일한 배열을 복사하여 배열뒤에 넣음 (16개)
  // console.log(textArry)
  for (let i = 0; i < textArry.length; i++) {
    // element.innerHTML = warn
    element.innerHTML += textArry[i] + '\u00A0\u00A0\u00A0';
    // element.insertAdjacentHTML('afterbegin',textArry[i],warn);
    
    // element.innerHTML +=`<i class="fas fa-exclamation-triangle"></i>`;
  }

  //    element.innerHTML +=`${textArry[i]}\u00A0\u00A0\u00A0`;
  //<i class="fas fa-exclamation-triangle"></i>
}

//------------------------글자입력

function animate() {
  count1++;
  count2++;
  count3++;
  // console.log(count1)

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, -1)
  count3 = marqueeText(count3, pTag3, -1)

  window.requestAnimationFrame(animate)
  // animate();

}

function marqueeText(count, element, direction) {
  //console.log(element.scrollWidth)
  //scrollWidth ==> 보이지 않는 공간일지라도 스크롤해서 확인 할 수 있는 공간까지의 넓이, 전체 넓이
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`
    
  }
  element.style.transform = `translate(${count * direction}px,0)`
  // console.log(count)
  return count;
}

function scrollHandler() {
  count1 += 25;
  count2 += 25;
  count3 += 25;
}

animate();

window.addEventListener('scroll', scrollHandler)


// ----  2. click ------------



let counterDate = $('.box h3');
let executed = false;
// let clickbt=$('.sec-2 .click_skill')

// $(window).scroll(function () {
//     let $click = $(this).scrollTop() -100 ;
//     let $offset = $('.easypiechart').offset().top;
//     if ($scroll > $offset) {
//         pieChart()

//         if (!executed) {
//             counterDate.each(function () {
//                 let currrent = $(this);
//                 let target = currrent.attr('data-rate'); // 90 85
//                 //A.animte({width:100%},시간,이징,끝나는할일)
//                 // $({변수:초기값}).animate({변수:종료값},{
//                 //     옵션
//                 // })
//                 $({rate: 0}).animate({rate: target}, {
//                     duration: 2500,
//                     progress: function () { //중간에 할일
//                         let now = this.rate;
//                         currrent.text(Math.ceil(now) + "%")
//                     }
//                 })
//             })
//             executed=true;
//         }
        

//     }
// })

$(window).scroll(function () {
  let $scroll = $(this).scrollTop() + 1300;
  let $offset = $('.easypiechart').offset().top;
  if ($scroll > $offset) {
      pieChart()

      if (!executed) {
          counterDate.each(function () {
              let currrent = $(this);
              let target = currrent.attr('data-rate'); // 90 85
              //A.animte({width:100%},시간,이징,끝나는할일)
              // $({변수:초기값}).animate({변수:종료값},{
              //     옵션
              // })
              $({rate: 0}).animate({rate: target}, {
                  duration: 2500,
                  progress: function () { //중간에 할일
                      let now = this.rate;
                      currrent.text(Math.ceil(now) + "%")
                  }
              })
          })
          executed=true;
      }
      

  }
})


// clickbt.click(function () {
//   let easychart = $('.easypiechart')
//   easychart.fadeToggle(800,'swing');
  
//   pieChart();
  
//   if (!executed) {
//     counterDate.each(function () {
//         let currrent = $(this);
//         let target = currrent.attr('data-rate');
//         $({ rate: 0 }).animate({ rate: target }, {
//             duration: 2500,
//             progress: function () {
//                 let now = this.rate;
//                 currrent.text(Math.ceil(now) + "%")
//             }
//         })
//     })
//     executed = true;
// }

// });


function pieChart() {
    $('.chart').easyPieChart({
        //your options goes here
        barColor: '#17d3e6',
        scaleColor: false,
        trackColor: '#373737',
        lineWidth: 12,
        size: 130,
        animate: 2000,
        lineCap: "butt"
    });

}



// ------- skill bar---------

let offset= [
  $('.po_ul.ul1').offset().top -400,
  $('.po_ul.ul2').offset().top -400,
  $('.po_ul.ul3').offset().top -400,
  $('.po_ul.ul4').offset().top -400,
  $('.po_ul.ul5').offset().top -400,
  $('.po_ul.ul6').offset().top -400,
  $('.po_ul.ul7').offset().top -400,
  $('.po_ul.ul8').offset().top -400,
  $('.po_ul.ul9').offset().top -400,
]//문서에서 .main위의 높이값
// let executed2 =false;



// $(window).scroll(function(){
//   let wScroll=$(this).scrollTop();
//     // console.log(wScroll)
//     // console.log(offset+"off")
//     for (let i=0; i<=offset.length; i++){
   
//       if(wScroll>offset[i]){
//         console.log("사용자가 섹션에 스크롤했습니다: " + i);
//         if(!executed2){
//             $('.skill-per').each(function(){
//                 let $this=$(this);
//                 let bar=$this.attr('bar');
//                 //A.attr(B)  A가가지고있는 B라는 속성의 값을 가져옴
//                 //A.attr(B,C) A가가지고있는 B를 C로 바꿔라는 의미
//                 // console.log(bar)
//                 $this.css({width:bar+"%"})
//                 $({aniValue:0}).animate({aniValue:bar},{
//                    duration:1000,
//                    step:function(){//애니메이션 사이사이에 할일
//                     $this.attr("bar",Math.ceil(this.aniValue) + "%")//this는 animate를 의미
//                    }
//                   })
//             });
//             executed2 = true;
//         }
        
//     }
//     }

// })

let execute = new Array(offset.length).fill(false);

$(window).scroll(function() {
  let wScroll = $(this).scrollTop();

  for (let i = 0; i < offset.length; i++) {
    if (wScroll > offset[i] && !execute[i]) {
      // console.log("사용자가 섹션에 스크롤했습니다: " + i);

      $('.po_ul.ul' + (i + 1) + ' .skill-per').each(function() {
        let $this = $(this);
        let bar = $this.attr('bar');

        $this.css({ width: bar + "%" });
        $({ aniValue: 0 }).animate(
          { aniValue: bar },
          {
            duration: 1000,
            step: function() {
              $this.attr("bar", Math.ceil(this.aniValue) + "%");
            }
          }
        );
      });

      execute[i] = true;
    }
  }
});











let acc = document.querySelector('.buger_menu');

acc.addEventListener('click',function(e){
  e.preventDefault();
  this.classList.toggle('active')
  let panel=document.querySelector('.side_menu') 
  // 0--> false
  // 0을 제외한 숫자 -->true
  // scrollHeight:화면 바깥으로 삐져나간 부분까지 포함해서 전체의 글의 높이
  if(panel.style.right){
    panel.style.right=null;
  }else{
    panel.style.right='25vw';
  }
})

let text1;
let text2;
let text3;

let x=0;
let y=0;
let mx=0;
let my=0;
let speed=0.009;

window.addEventListener('load',function(){
  text1=document.getElementById("text1");
  // bg=document.getElementById("bg");
  text2=document.getElementById("text2");
  // text3=document.getElementById("text3");
  text1.style.rotate='-90deg'
  window.addEventListener('mousemove',mouseFunc)

  function mouseFunc(e){
    x = (e.clientX - window.innerWidth/2);
    y = (e.clientY - window.innerHeight/2);
    // console.log(y)

  }
  loop();
});

function loop(){
  mx += (x - mx) * speed;
  // 많이 움직여서 값이 많이 들어와도 값이 적게 되게끔해서 움직임 값도 낮게 한다.
  my += (y - my) * speed;

  text1.style.transform = `translate(${mx/9}px,${my/9}px)`
  // bg.style.transform = `translate(${-mx/8}px,${-my/8}px)`
  text2.style.transform = `translate(${mx/3}px,${my/3}px)`
  // text3d.style.transform = `translate3d(${mx/2},${my/2},0) rotate3d(0, 1, 0, ${mx}deg)`
  // text3.style.transform = `translate3d(${mx/2}px,${my/2}px,0) rotate3d(0,1,0,${mx/50}deg)`

  window.requestAnimationFrame(loop)
}