import * as THREE from 'three';

function testAnimate() {
  THREE.Cache.enabled = true;

  const container = document.createElement('div');
  document.body.appendChild(container);

  // CAMERA

  const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    1500
  );
  camera.position.set(0, 400, 700);

  const cameraTarget = new THREE.Vector3(0, 150, 0);

  // SCENE

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 250, 1400);

  // LIGHTS

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(0, 100, 90);
  scene.add(pointLight);

  // Get text from hash

  pointLight.color.setHSL(Math.random(), 1, 0.5);
  // const hex = decimalToHex(pointLight.color.getHex());

  const materials = [
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
  ];

  const group = new THREE.Group();
  group.position.y = 100;

  scene.add(group);

  const loader = new THREE.FontLoader();
  loader.load(
    'https://styleshare-static.s3-ap-northeast-1.amazonaws.com/web-frontend/fonts/NanumGothic/GungSeoCheFont_Regular.json',
    function(font) {
      const text = '챌린저',
        height = 20,
        size = 70,
        hover = 30,
        curveSegments = 4,
        bevelThickness = 2,
        bevelSize = 1.5,
        bevelEnabled = true;

      const textGeo = new THREE.TextGeometry(text, {
        bevelEnabled,
        bevelSize,
        bevelThickness,
        curveSegments,
        font,
        height,
        size,
      });

      textGeo.computeBoundingBox();
      textGeo.computeVertexNormals();

      // "fix" side normals by removing z-component of normals for side faces
      // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

      const centerOffset =
        -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

      // textGeo = new THREE.BufferGeometry().fromGeometry(textGeo);

      const textMesh = new THREE.Mesh(textGeo, materials);

      textMesh.position.x = centerOffset;
      textMesh.position.y = hover;
      textMesh.position.z = 0;

      textMesh.rotation.x = 0;
      textMesh.rotation.y = Math.PI * 2;

      group.add(textMesh);
    }
  );

  const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10000, 10000),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.5,
      transparent: true,
    })
  );
  plane.position.y = 100;
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  // RENDERER

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  //

  function render() {
    // group.rotation.y += (targetRotation - group.rotation.y) * 0.05;

    camera.lookAt(cameraTarget);

    renderer.clear();
    renderer.render(scene, camera);
  }

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  animate();
}
