var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight,
  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2;
const mq = window.matchMedia('(min-width: 1280px)');

var shape = (function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    SCREEN_WIDTH / SCREEN_HEIGHT,
    0.1,
    1000
  );

  var renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.setClearColor(0x000000, 1);
  document.getElementById('WebGL-output').appendChild(renderer.domElement);

  //LIGHTS
  var lights = [];
  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  lights[2] = new THREE.PointLight(0xffffff, 1, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);

  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || SCREEN_WIDTH < 768
  ) {
    var geometry = new THREE.DodecahedronGeometry(1.0, 0);
  } else {
    var geometry = new THREE.DodecahedronGeometry(1.5, 0);
  }
  var material = new THREE.MeshPhongMaterial({
    color: 0x57575a,
    emissive: 0x151516,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading
  });
  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    cube.position.y = 0.7;
  } else {
    cube.position.y = 0.5;
  }

  if (mq.matches) {
    // window width is at least 1280px
    cube.position.y = 0.5;
    camera.position.z = 5;
  } else {
    // window width is less than 1280px
    cube.position.y = 1.2;
    camera.position.z = 6;
  }
  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.006;
    cube.rotation.y += 0.008;

    renderer.render(scene, camera);
  };

  animate();
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    if (mq.matches) {
      // window width is at least 1280px
      cube.position.y = 0.5;
      camera.position.z = 5;
    } else {
      // window width is less than 1280px
      cube.position.y = 1.2;
      camera.position.z = 6;
    }
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
})();