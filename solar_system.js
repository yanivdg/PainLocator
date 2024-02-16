// Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Create the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the sun
//var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
//var sunMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});
//var sun = new THREE.Mesh(sunGeometry, sunMaterial);
//scene.add(sun);

// Create the sun
var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var sunMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create a texture loader
var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var textureLoaderSun = new THREE.TextureLoader();
// Load the texture
var sunTexture = textureLoaderSun.load('https://github.com/yanivdg/PainLocator/blob/b7fe7dd8558a68701e32155630e216fc7f3cf7b5/images/124867239-design-material-sun-texture-at-center-of-the-solar-system-universe-not-3d-render%5B1%5D.jpg');
// Create the material with the texture
var sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
// Create the sun
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
// Add the sun to the scene
scene.add(sun);


// Create the planet
//var planetGeometry = new THREE.SphereGeometry(1, 32, 32);
//var planetMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
//var planet = new THREE.Mesh(planetGeometry, planetMaterial);
//planet.position.x = 10;
//scene.add(planet);

// Create the planet
var planetGeometry = new THREE.SphereGeometry(1, 32, 32);
// Load the texture
var textureLoaderPlanet = new THREE.TextureLoader();
var planetTexture = textureLoaderPlanet.load('https://t4.ftcdn.net/jpg/02/24/14/81/360_F_224148194_xrGaLP6RZbCL7B3vOMYYr2dVrcg95RFt.jpg'); // replace with your texture path
var planetMaterial = new THREE.MeshBasicMaterial({map: planetTexture});
var planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.x = 10;
scene.add(planet);


// Animation
var animate = function () {
    requestAnimationFrame(animate);

    // Rotate the planet around the sun
    planet.position.x = 10 * Math.cos(Date.now() / 2000);
    planet.position.z = 10 * Math.sin(Date.now() / 2000);

    renderer.render(scene, camera);
};

animate();
