// Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Create the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the sun
var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create the planet
var planetGeometry = new THREE.SphereGeometry(1, 32, 32);

// Adjust the material and texture for the planet (Example: Earth-like texture)
var textureLoader = new THREE.TextureLoader();
textureLoader.load('https://t4.ftcdn.net/jpg/02/24/14/81/360_F_224148194_xrGaLP6RZbCL7B3vOMYYr2dVrcg95RFt.jpg', function (texture) {
    var planetMaterial = new THREE.MeshLambertMaterial({ map: texture }); // Use Lambert material for better lighting
    var planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.x = 10;
    scene.add(planet);
});

// Add lighting to the scene
var ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Animation
var animate = function () {
    requestAnimationFrame(animate);

    // Rotate the planet around the sun
    planet.position.x = 10 * Math.cos(Date.now() / 2000);
    planet.position.z = 10 * Math.sin(Date.now() / 2000);

    renderer.render(scene, camera);
};

animate();
