var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var sunMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create the planet
var planetGeometry = new THREE.SphereGeometry(1, 32, 32);
var planetMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
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
