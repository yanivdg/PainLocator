// Create a clock
var clock = new THREE.Clock();
clock.start();

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

// Define the planets
var planets = [
  { name: 'Mercury', distance: 0.39, speed: 4.74, period: 87.97, size: 0.055, texture: './images/mercury_texture.jpg' },
  { name: 'Venus', distance: 0.72, speed: 3.50, period: 224.70, size: 0.815, texture: './images/venus_texture.jpg' },
  { name: 'Earth', distance: 1.00, speed: 2.98, period: 365.25, size: 1.00, texture: './images/earth_texture.jpg' },
  { name: 'Mars', distance: 1.52, speed: 2.41, period: 686.98, size: 0.107, texture: './images/mars_texture.jpg' },
  { name: 'Jupiter', distance: 5.2, speed: 13.07, period:4332.59, size: 11.22, texture: './images/jupiter_texture.jpg' },
  { name: 'Saturn','distance: 9.53,speed: 9.69, period:10759.22, size: 9.14, texture: './images/saturn_texture.jpg' },
  { name: 'Uranus',distance: 19.19,speed: 6.81, period:30687.15, size: 3.98, texture: './images/uranus_texture.jpg' },
 { name: ' Neptune',distance: 30.07,speed: 5.43, period:60182, size: 3.88, texture: './images/neptune_texture.jpg' }


  // Add the rest of the planets...
];

/*
// Create the planet
var planetGeometry = new THREE.SphereGeometry(1, 32, 32);
// Load the texture
var textureLoaderPlanet = new THREE.TextureLoader();
var planetTexture = textureLoaderPlanet.load('./images/earth_texture.jpg'); // replace with your texture path
var planetMaterial = new THREE.MeshBasicMaterial({map: planetTexture});
var planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.x = 10;
scene.add(planet);
*/


// Create the planets
for (var i = 0; i < planets.length; i++) {
  var planetInfo = planets[i];
  var geometry = new THREE.SphereGeometry(planetInfo.size, 32, 32);
  var texture = new THREE.TextureLoader().load(planetInfo.texture);
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var planet = new THREE.Mesh(geometry, material);
  planet.userData = { speed: planetInfo.speed, distance: planetInfo.distance };
  scene.add(planet);
}


// Animation
var animate = function () {
    requestAnimationFrame(animate);
    // Rotate the sun
    sun.rotation.y += 0.01;
    // Rotate the planet around the sun
    /*
    planet.position.x = 10 * Math.cos(Date.now() / 2000);
    planet.position.z = 10 * Math.sin(Date.now() / 2000);
    */
    
    // Rotate the planets around the sun
      for (var i = 0; i < scene.children.length; i++) 
      {
            var object = scene.children[i];
            if (object instanceof THREE.Mesh && object !== sun) 
            {
                object.position.x = sun.position.x + object.userData.distance * Math.cos(clock.getElapsedTime() * object.userData.speed);
                object.position.z = sun.position.z + object.userData.distance * Math.sin(clock.getElapsedTime() * object.userData.speed);
            }
      }
    renderer.render(scene, camera);
};

animate();
