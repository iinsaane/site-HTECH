console.log(document.body);

const loader = new THREE.GLTFLoader();

loader.load(
  "/static/models/jimmy.glb",
  function (gltf) {
    //scale the model to 10x its original size
    const multiplier = 30;
    gltf.scene.scale.set(multiplier, multiplier, multiplier);
    scene.add(gltf.scene);
    //delete the loading element and set z index to 0
    document.getElementById("status").style.display = "none";
    document.body.style.zIndex = 0;
  },

  function (xhr) {
    document.getElementById('status').innerHTML  = Math.round( (xhr.loaded / xhr.total) * 1000)/10 + "% loaded" 
  },
  function (error) {
    console.error(error);
  }
);

var width = window.innerWidth,
  height = window.innerHeight;

// Create a renderer and add it to the DOM.
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);
// Create the scene
var scene = new THREE.Scene();
// Create a camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.z = -30;
camera.position.y = 30;
camera.position.x = 30;

scene.add(camera);

// Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

// Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
light.position.set(100, -200, 100);
scene.add(light);

//world light
var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// Add OrbitControls so that we can pan around with the mouse.
var controls = new THREE.OrbitControls(camera, renderer.domElement, {
  enableDamping: true});

// // Add axes
// var axes = new THREE.AxisHelper(50);
// scene.add( axes );

var geometry = new THREE.BoxGeometry(5, 5, 5);
var cubeMaterial = new THREE.MeshNormalMaterial();

var mesh = new THREE.Mesh(geometry, cubeMaterial);
// scene.add( mesh );

resize();
animate();
window.addEventListener("resize", resize);

function resize() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// Renders the scene
function animate() {
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(animate);
}
