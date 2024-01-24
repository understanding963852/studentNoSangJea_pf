import * as THREE from "https://unpkg.com/three@0.124.0/build/three.module.js";
import {
  FBXLoader
} from "https://unpkg.com/three@0.124.0/examples/jsm/loaders/FBXLoader.js";
import {
  GLTFLoader
} from "https://unpkg.com/three@0.124.0/examples/jsm/loaders/GLTFLoader.js";
import {
  RGBELoader
} from "https://unpkg.com/three@0.124.0/examples/jsm/loaders/RGBELoader.js";

let WIDTH = 1000;
let HEIGHT = 1000;

let scene, camera, renderer;

let model = new THREE.Object3D();
let modelBody = new THREE.Object3D();
let model2 = new THREE.Object3D();
let modelBody2 = new THREE.Object3D();
let model3 = new THREE.Object3D();
let modelBody3 = new THREE.Object3D();
let model4 = new THREE.Object3D();
let modelBody4 = new THREE.Object3D();
let model5 = new THREE.Object3D();
let modelBody5 = new THREE.Object3D();
let model6 = new THREE.Object3D();
let modelBody6 = new THREE.Object3D();
let model7 = new THREE.Object3D();
let modelBody7 = new THREE.Object3D();
let model8 = new THREE.Object3D();
let modelBody8 = new THREE.Object3D();
let model9 = new THREE.Object3D();
let modelBody9 = new THREE.Object3D();
let model10 = new THREE.Object3D();
let modelBody10 = new THREE.Object3D();
let model11 = new THREE.Object3D();
let modelBody11 = new THREE.Object3D();




gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();


const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 1, 500);
  camera.position.set(0, 10, 20);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  //alpha : true 배경 투명으로
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.useLegacyLights = false;


  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  document.querySelector("#canvasWrap").appendChild(renderer.domElement);

  const loader = new RGBELoader();
  loader.setDataType(THREE.UnsignedByteType); // 데이터 타입 설정

  // HDRI 이미지를 로드합니다.
  loader.load('hdr/royal_esplanade_1k.hdr', (texture) => {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    texture.mapping = THREE.EquirectangularReflectionMapping;
    //   scene.backgroundBlurriness = 0.35;

    // 추가적인 렌더링 로직을 수행합니다.
  });


  {
    //조명 넣기
    var light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
    light.position.set(100, 100, 100);
    scene.add(light);
  } {
    //조명
    const color = 0xffffff;
    const intensity = 2;
    const light = new THREE.PointLight(color, intensity);
    light.position.set(140, 160, 150);
    scene.add(light);
  }

  // fbxLoadFunc("./model/can.FBX");
  // glbLoadFunc("./my3d/3d_glass.gltf");
  glbLoadFunc("./my3d/hi.gltf");
  glbLoadFunc2("./my3d/folder.gltf");
  glbLoadFunc3("./my3d/pony.gltf");
  glbLoadFunc4("./my3d/musign.gltf");
  glbLoadFunc5("./my3d/sushi2.gltf");
  glbLoadFunc6("./my3d/react.gltf");
  glbLoadFunc7("./my3d/php.gltf");
  glbLoadFunc8("./my3d/nwst.gltf");
  glbLoadFunc9("./my3d/sos.gltf");
  glbLoadFunc10("./my3d/daegum.gltf");
  glbLoadFunc11("./my3d/dron1.gltf");

  //gsap
  // gsap.from(".sec-1", {
  //     duration: 0.8,
  //     delay: 0.35,
  //     z: 500,
  //     alpha: 0,
  //     ease: "Power2.easeInOut",
  // });

  // -- 1

  tl.from(".sec-1 .text1", {
    duration: 0.8,
    delay: 0.5,
    x: 20,
    alpha: 0,
    ease: "Power2.easeInOut",
  });

  // gsap.from(".text1 .up", {
  //   duration: 0.8,
  //   delay: 0.6,
  //   x: -30,
  //   alpha: 0,
  //   ease: "Power2.easeInOut",
  // });
  // gsap.from(".text2", {
  //     duration: 0.8,
  //     delay: 0.65,
  //     x: -30,
  //     alpha: 0,
  //     ease: "Power2.easeInOut",
  // });
  gsap.from(".text2", {
    duration: 0.8,
    delay: 0.4,
    x: -30,
    alpha: 0,
    ease: "Power2.easeInOut",
  });
  tl.from(".text2 span em", {
    duration: 0.5,
    delay: 0,
    y: -50,
    alpha: 0,
    ease: "Power2.easeInOut",
  });
  // gsap.from(".text3", {
  //   duration: 0.8,
  //   delay: 0.4,
  //   x: -50,
  //   alpha: 0,
  //   ease: "Power2.easeInOut",
  // });

  //   gsap.to(".text1", {
  //     scrollTrigger: {
  //       trigger: ".text2",
  //       // markers: true,
  //       start: "end end",
  //           // scrub: true,
  //     },
  //     duration: 5,
  //     y: -600,

  // });

  //   gsap.to(".text2", {
  //     scrollTrigger: {
  //       trigger: ".text2",
  //       // markers: true,
  //       start: "end end",
  //           // scrub: true,
  //     },
  //     duration: 5,
  //     y: -900,
  //     // opacity: 1,
  //     // ease: 'power2.out',

  // });


  // --2
  
  gsap.from('.t_line', {
    width: "62vw",
    alpha: 0,
  });
  tl.to('.t_line', {
    scrollTrigger: {
      trigger: ".sec-1",
      // markers: true,
      start: "end top",
      scrub: 1,
      // scrub: true,
      endTrigger: ".first-parallel",
      // toggleActions: 'play none none reverse',
    },
    width: "52vw",
    duration: 1.5,
    ease: "Power2.easeInOut",
  });


  // gsap.from('.t_m1', {
  //   alpha: 0,
  // });
  // gsap.to('.t_m1', {
  //   scrollTrigger: {
  //     trigger: ".sec-1",
  //     start: "end top",
  //     scrub: 1,
  //     endTrigger: ".sec-2",
  //     toggleActions: 'play none none reverse',
  //   },
  //   delay: 0.1,
  //   alpha: 1,
  //   duration: 1.2,
  //   ease: "Power2.easeInOut",
  // });
  let about_top= gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-1",
      scrub: 0.5,
      endTrigger: ".second-parallel",
    }
  })
  about_top.from('.t_m1', {
    alpha: 0,
  });
  about_top.to('.t_m1', {
    delay: 0.1,
    alpha: 1,
    duration: 1.2,
    ease: "Power2.easeInOut",
  })
  about_top.to('.t_m1', {
    alpha: 0,
    duration: 0.8,
    ease: "Power2.easeInOut",
  })

  let portfolio_top= gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-2",
      scrub: 0.5,
      endTrigger: ".sec-4 .contact_right .right_con",
    }
  })
  portfolio_top.from('.t_m2', {
    alpha: 0,
    duration: 0.03,

  });
  portfolio_top.to('.t_m2', {
    alpha: 1,
    duration: 0.1,
    // ease: "Power2.easeInOut",
  })
  portfolio_top.to('.t_m2', {
    alpha: 0,
    duration: 0.06,
    // ease: "Power2.easeInOut",
  })


  let contact_top= gsap.timeline({
    scrollTrigger: {
      trigger: ".robo_video",
      scrub: 0.5,
      // endTrigger: ".sec-4",
    }
  })
  contact_top.from('.t_m3', {
    alpha: 0,
    duration: 0.1,

  });
  contact_top.to('.t_m3', {
    alpha: 1,
    duration: 0.1,
    ease: "Power2.easeInOut",
  })


  gsap.from('.sec-2 h2', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      // scrub: true,
      // scrub: 1,
      end: "center",
      toggleActions: 'play none none reverse'
    },
    x: -100,
    duration: 1.2,
    alpha: 0,
  });
  gsap.to('.sec-2 h2', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      // scrub: 1,
      // scrub: true,
      end: "center"
    },
    x: 10,
    duration: 4,
    alpha: 1,
  });

  let sec2_btn = document.querySelectorAll('.sec-2 .p3 .button')

  sec2_btn.forEach((box, index) => {
    gsap.from(box, {
      alpha: 1,
    })

    gsap.to(box, {
      scrollTrigger: {
        trigger: ".sec-2 .imgwrap ",
        // markers: true,
        start: "380px center",
        // scrub: 1,
        // scrub: true,
        end: "bottom",
        toggleActions: 'play none none reverse'
      },
      scalez: -0.8 * index,
      duration: 0.1,
      delay: index * 0.5,
      alpha: 0,
    })
  })

  gsap.from('.sec-2 .text1', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      scrub: 1,
      // scrub: true,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    x: -100,
    duration: 1,
    delay: 0.1,
    alpha: 0,
  })

  gsap.from('.sec-2 .imgwrap', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      // scrub: 1,
      // scrub: true,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    scaleX: 0.9,
    scaleY: 0.9,
    duration: 1,
    delay: 0.1,
    alpha: 0,
  })

  gsap.from('.sec-2 .tg', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      // scrub: 1,
      // scrub: true,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    x: 50,
    duration: 1,
    delay: 0.1,
    alpha: 0,
  })
  gsap.from('.sec-2 .bt_text', {
    scrollTrigger: {
      trigger: ".sec-2 tg",
      // markers: true,
      start: "top center",
      scrub: 1,
      // scrub: true,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    y: 50,
    duration: 1,
    delay: 0.1,
    alpha: 0,
  })
  gsap.from('.sec-2 .glass2', {
    scrollTrigger: {
      trigger: ".sec-2",
      // markers: true,
      start: "top center",
      // scrub: true,
      // scrub: 1,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    y: 50,
    duration: 0.3,
    delay: 0.1,
    alpha: 0,
  })
  gsap.from('.sec-2 .glass3', {
    scrollTrigger: {
      trigger: ".sec-2 .glass2",
      // markers: true,
      start: "top center",
      // scrub: true,
      scrub: 1,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    x: -50,
    duration: 0.3,
    delay: 0.2,
    alpha: 0,
  })
  gsap.from('.sec-2 .glass1', {
    scrollTrigger: {
      trigger: ".sec-2 .glass3",
      // markers: true,
      start: "top center",
      // scrub: true,
      scrub: 1,
      end: "bottom",
      toggleActions: 'play none none reverse'
    },
    y: -50,
    duration: 0.3,
    delay: 0.2,
    alpha: 0,
  })

  gsap.from('.sec-3 .web', {
    scrollTrigger: {
      trigger: ".sec-3 .p2 h2",
      // markers: true,
      start: "top 50%",
      scrub: true,
      // end: "bottom 55%",
      toggleActions: 'play none none reverse'
    },
    y: -50,
    duration: 0.3,
    delay: 0.2,
    opacity: 0,
  })



  //--------------------------------------------------------
  // gsap.from('.sec-3 .web', {
  //   scrollTrigger: {
  //     trigger: ".sec-3 .p2 h2",
  //     markers: true,
  //     start: "top 50%",
  //     scrub: 1,
  //     // end: "bottom 55%",
  //     toggleActions: 'play none none reverse'
  //   },
  //   y: -50,
  //   duration: 0.3,
  //   delay: 0.2,
  //   opacity: 0,
  // })

  // tl.from('.sec-3 .web', {
  //   scrollTrigger: {
  //     trigger: ".sec-3 .po_desc.products p",
  //     markers: true,
  //     start: "top 60%",
  //     scrub: true,
  //     // end: "bottom 55%",
  //     toggleActions: 'play none none reverse'
  //   },
  //   // y: -50,
  //   duration: 0.5,
  //   // delay: 0.2,
  //   opacity: 0,
  // })





};



const glbLoadFunc = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;


      object.traverse((child) => {
        if (child.isMesh && child.material) {
          // 투과 속성을 적용할 재질에 대해 KHR_materials_transmission 확장을 설정
          if (child.material.extensions && child.material.extensions.KHR_materials_transmission) {
            // 투과 속성 값을 원하는 값으로 설정 (0: 완전 투명, 1: 완전 불투명)
            child.material.extensions.KHR_materials_transmission.transmissionFactor = 0.5;
          }
        }
        // console.log(child.material);

      });

      // console.log(object);

      //크기 조절
      let scaleNum = 0.6;
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      model.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      model.add(object.children[0]);
      model.rotation.set(0.4, 9.3, 0);

      model.position.set(0, -1, 0);
      modelBody.position.set(0, 10, 0);
      modelBody.add(model);
      scene.add(modelBody);

      // const modelBody2 = modelBody.clone();
      // scene.add(modelBody2);
      // modelBody2.position.set(0, 50, -40);

      // const modelBody3 = modelBody.clone();
      // scene.add(modelBody3);
      // modelBody3.position.set(20, -20, -20);

      // const modelBody4 = modelBody.clone();
      // scene.add(modelBody4);
      // modelBody4.position.set(-20, -20, 20);

      // const modelBody5 = modelBody.clone();
      // scene.add(modelBody5);
      // modelBody5.position.set(-20, -20, 20);

      // const modelBody6 = modelBody.clone();
      // scene.add(modelBody6);
      // modelBody6.position.set(-20, -20, 20);


      gsap.from(model.position, {
        duration: 1.8,
        delay: 0.5,
        x: 0,
        // y: -50,
        z: -100,
        // alpha:0,
        ease: "Power2.easeInOut",
      });


      gsap.to(model.scale, {
        scrollTrigger: {
          trigger: ".sec-1",
          // markers: true,
          start: "bottom center",
          // scrub: true,
          toggleActions: 'play none none reverse'
        },
        x: 0,
        y: 0,
        z: 0,
        duration: 0.1,
      });
      // console.log(model)

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc2 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;


      object.traverse((child) => {
        if (child.isMesh && child.material) {
          // 투과 속성을 적용할 재질에 대해 KHR_materials_transmission 확장을 설정
          if (child.material.extensions && child.material.extensions.KHR_materials_transmission) {
            // 투과 속성 값을 원하는 값으로 설정 (0: 완전 투명, 1: 완전 불투명)
            child.material.extensions.KHR_materials_transmission.transmissionFactor = 0.5;
          }
        }
        // console.log(child.material);

      });

      // console.log(object);

      //크기 조절
      let scaleNum = 0;
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      model2.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      model2.add(object.children[0]);
      model2.rotation.set(0.4, 9.3, 0);

      model2.position.set(0, -1, 0);
      modelBody2.position.set(0, 10, 0);
      modelBody2.add(model2);
      scene.add(modelBody2);

      // const modelBody2 = modelBody.clone();
      // scene.add(modelBody2);
      // modelBody2.position.set(0, 50, -40);

      // const modelBody3 = modelBody.clone();
      // scene.add(modelBody3);
      // modelBody3.position.set(20, -20, -20);

      // const modelBody4 = modelBody.clone();
      // scene.add(modelBody4);
      // modelBody4.position.set(-20, -20, 20);

      // const modelBody5 = modelBody.clone();
      // scene.add(modelBody5);
      // modelBody5.position.set(-20, -20, 20);

      // const modelBody6 = modelBody.clone();
      // scene.add(modelBody6);
      // modelBody6.position.set(-20, -20, 20);
      // gsap.set(model2.scale, {
      //   x: 0.0,
      //   y: 0.0,
      //   z: 0.,
      // })
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-1",
          // markers: true,
          scrub: true,
          // pin: true,
          endTrigger: ".midsec2_wrap"
        }
      })
      tl2.from(model2.scale,{
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(model2.scale,{
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(model2.scale,{
        x: 0,
        y: 0,
        z: 0,
      })
//------------------------------------------
      // gsap.fromTo(model2.scale, {
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 0,
      //   y: 0,
      //   z: 0,
      // },{
      //   scrollTrigger: {
      //     trigger: ".sec-1",
      //     // markers: true,
      //     start: "bottom center",
      //     // scrub: true,

      //     toggleActions: 'play none none reverse'
      //   },
        
      //   duration: 0.2,
      //   // delay: 0.2,
      //   x: .6,
      //   y: .6,
      //   z: .6,
      // });
      // gsap.set(model2.scale, {

      //   x: 0,
      //   y: 0,
      //   z: 0,
      // })

      // gsap.to(model2.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec2_wrap",
      //     markers: true,
      //     start: "top center",
      //     scrub: true,
      //     // toggleActions: 'play none none reverse'
      //   },
      //   x: 0,
      //   y: 0,
      //   z: 0,
      //   duration: 0.5,
      // });

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc3 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;


      object.traverse((child) => {
        if (child.isMesh && child.material) {
          // 투과 속성을 적용할 재질에 대해 KHR_materials_transmission 확장을 설정
          if (child.material.extensions && child.material.extensions.KHR_materials_transmission) {
            // 투과 속성 값을 원하는 값으로 설정 (0: 완전 투명, 1: 완전 불투명)
            child.material.extensions.KHR_materials_transmission.transmissionFactor = 0.5;
          }
        }
        // console.log(child.material);

      });

      // console.log(object);

      //크기 조절
      let scaleNum = 0;
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      model3.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      model3.add(object.children[0]);
      model3.rotation.set(0.4, 9.3, 0);

      model3.position.set(0, -1, 0);
      modelBody3.position.set(0, 10, 0);
      modelBody3.add(model3);
      scene.add(modelBody3);

      // const modelBody2 = modelBody.clone();
      // scene.add(modelBody2);
      // modelBody2.position.set(0, 50, -40);

      // const modelBody3 = modelBody.clone();
      // scene.add(modelBody3);
      // modelBody3.position.set(20, -20, -20);

      // const modelBody4 = modelBody.clone();
      // scene.add(modelBody4);
      // modelBody4.position.set(-20, -20, 20);

      // const modelBody5 = modelBody.clone();
      // scene.add(modelBody5);
      // modelBody5.position.set(-20, -20, 20);

      // const modelBody6 = modelBody.clone();
      // scene.add(modelBody6);
      // modelBody6.position.set(-20, -20, 20);

//--------------
      // gsap.from(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     // markers: true,
      //     start: "bottom center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 0,
      //   y: 0,
      //   z: 0,
      // });
//------------------

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-3 .p2",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".pony_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(model3.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(model3.scale,{
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(model3.scale,{
        x: 0,
        y: 0,
        z: 0,
        duration: 0.2
      })
      // gsap.to(model3.position,{
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "bottom center",
      //     scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 1,
      //   z: 1,

      //   // y: 0,
      //   // z: 0,
      // });
      // gsap.to(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "top center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   x: 0,
      //   y: 0,
      //   z: 0,
      //   duration: 0.1,
      // });

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc4 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model4
      let mb = modelBody4
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

      // const modelBody2 = modelBody.clone();
      // scene.add(modelBody2);
      // modelBody2.position.set(0, 50, -40);

      // const modelBody3 = modelBody.clone();
      // scene.add(modelBody3);
      // modelBody3.position.set(20, -20, -20);

      // const modelBody4 = modelBody.clone();
      // scene.add(modelBody4);
      // modelBody4.position.set(-20, -20, 20);

      // const modelBody5 = modelBody.clone();
      // scene.add(modelBody5);
      // modelBody5.position.set(-20, -20, 20);

      // const modelBody6 = modelBody.clone();
      // scene.add(modelBody6);
      // modelBody6.position.set(-20, -20, 20);

//------------------------------
      // gsap.from(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     // markers: true,
      //     start: "bottom center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 0,
      //   y: 0,
      //   z: 0,
      // });
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".pony_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".musign_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      // gsap.to(model3.position,{
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "bottom center",
      //     scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 1,
      //   z: 1,

      //   // y: 0,
      //   // z: 0,
      // });
      // gsap.to(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "top center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   x: 0,
      //   y: 0,
      //   z: 0,
      //   duration: 0.1,
      // });

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc5 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model5
      let mb = modelBody5
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

      // const modelBody2 = modelBody.clone();
      // scene.add(modelBody2);
      // modelBody2.position.set(0, 50, -40);

      // const modelBody3 = modelBody.clone();
      // scene.add(modelBody3);
      // modelBody3.position.set(20, -20, -20);

      // const modelBody4 = modelBody.clone();
      // scene.add(modelBody4);
      // modelBody4.position.set(-20, -20, 20);

      // const modelBody5 = modelBody.clone();
      // scene.add(modelBody5);
      // modelBody5.position.set(-20, -20, 20);

      // const modelBody6 = modelBody.clone();
      // scene.add(modelBody6);
      // modelBody6.position.set(-20, -20, 20);

//------------------------------
      // gsap.from(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     // markers: true,
      //     start: "bottom center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 0,
      //   y: 0,
      //   z: 0,
      // });
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".musign_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".sushi_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      // gsap.to(model3.position,{
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "bottom center",
      //     scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   duration: 0.2,
      //   delay: 0.2,
      //   x: 1,
      //   z: 1,

      //   // y: 0,
      //   // z: 0,
      // });
      // gsap.to(model3.scale, {
      //   scrollTrigger: {
      //     trigger: ".midsec-2",
      //     markers: true,
      //     start: "top center",
      //     // scrub: true,
      //     toggleActions: 'play none none reverse'
      //   },
      //   x: 0,
      //   y: 0,
      //   z: 0,
      //   duration: 0.1,
      // });

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc6 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model6
      let mb = modelBody6
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sushi_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".react_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc7 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model7
      let mb = modelBody7
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".react_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".php_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .6,
        y: .6,
        z: .6,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc8 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model8
      let mb = modelBody8
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".php_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".station_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .3,
        y: .3,
        z: .3,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc9 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model9
      let mb = modelBody9
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".station_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".sos_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .3,
        y: .3,
        z: .3,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc10 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model10
      let mb = modelBody10
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sos_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".daegum_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .3,
        y: .3,
        z: .3,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};
const glbLoadFunc11 = (modelName) => {
  const glbLoader = new GLTFLoader();
  glbLoader.load(
    modelName,
    (gltf) => {
      const object = gltf.scene;

      //크기 조절
      let scaleNum = 0;
      let m = model11
      let mb = modelBody11
      // object.scale.set(scaleNum, scaleNum, scaleNum);
      m.scale.set(scaleNum, scaleNum, scaleNum);
      // console.log(object.scale);

      m.add(object.children[0]);
      m.rotation.set(0.4, 9.3, 0);

      m.position.set(0, -1, 0);
      mb.position.set(0, 10, 0);
      mb.add(m);
      scene.add(mb);

     
//----------------
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".daegum_video",
          // markers: true,
          scrub: 0.5,
          // pin: true,
          endTrigger: ".robo_video",
          // toggleActions: 'play none none reverse'
        }
      })
      tl2.from(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: .3,
        y: .3,
        z: .3,
      })
      tl2.to(m.scale,{
        duration: 0.1,
        x: 0,
        y: 0,
        z: 0,
      })
     

    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};

let moveNum = 0;
let scrollTop = 0;

const animate = () => {
  moveNum += (scrollTop / 500 - moveNum) * 0.1;
  // console.log(moveNum);

  model.rotation.y += 0.01;
  modelBody.rotation.y = moveNum;
  modelBody.rotation.z = moveNum / 12;
  model2.rotation.y += 0.01;
  modelBody2.rotation.y = moveNum;
  modelBody2.rotation.z = moveNum / 12;
  model3.rotation.y += 0.01;
  modelBody3.rotation.y = moveNum;
  modelBody3.rotation.z = moveNum / 12;
  model4.rotation.y += 0.01;
  modelBody4.rotation.y = moveNum;
  modelBody4.rotation.z = moveNum / 12;
  model5.rotation.y += 0.01;
  modelBody5.rotation.y = moveNum;
  modelBody5.rotation.z = moveNum / 12;
  model6.rotation.y += 0.01;
  modelBody6.rotation.y = moveNum;
  modelBody6.rotation.z = moveNum / 12;
  model7.rotation.y += 0.01;
  modelBody7.rotation.y = moveNum;
  modelBody7.rotation.z = moveNum / 12;
  model8.rotation.y += 0.01;
  modelBody8.rotation.y = moveNum;
  modelBody8.rotation.z = moveNum / 12;
  model9.rotation.y += 0.01;
  modelBody9.rotation.y = moveNum;
  modelBody9.rotation.z = moveNum / 12;
  model10.rotation.y += 0.01;
  modelBody10.rotation.y = moveNum;
  modelBody10.rotation.z = moveNum / 12;
  model11.rotation.y += 0.01;
  modelBody11.rotation.y = moveNum;
  modelBody11.rotation.z = moveNum / 12;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

init();
animate();

const scrollFunc = () => {
  scrollTop = window.scrollY; //현재 스크롤 위치
  // console.log(scrollTop);
};

window.addEventListener("scroll", scrollFunc);