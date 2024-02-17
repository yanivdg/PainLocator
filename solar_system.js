// Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Create the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a texture loader
var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var textureLoaderSun = new THREE.TextureLoader();
// Load the texture
var sunTexture = textureLoaderSun.load('./images/sun_texture.jpg');
// Create the material with the texture
var sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
// Create the sun
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
// Add the sun to the scene
scene.add(sun);

// Create the planet
var planetGeometry = new THREE.SphereGeometry(1, 32, 32);
// Load the texture
var textureLoaderPlanet = new THREE.TextureLoader();
var planetTexture = textureLoaderPlanet.load('./images/earth_texture.jpg'); // replace with your texture path
var planetMaterial = new THREE.MeshBasicMaterial({map: planetTexture});
var planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.x = 10;
scene.add(planet);


// Animation
var animate = function () {
    requestAnimationFrame(animate);
    // Rotate the sun
    sun.rotation.y += 0.01;
    // Rotate the planet around the sun
    planet.position.x = 10 * Math.cos(Date.now() / 2000);
    planet.position.z = 10 * Math.sin(Date.now() / 2000);

    renderer.render(scene, camera);
};

animate();
