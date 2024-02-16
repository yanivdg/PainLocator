// Import necessary libraries
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.xr.enabled = true;

// Add VR button
document.body.appendChild(VRButton.createButton(renderer));

// Create geometry and material for a sphere (planet)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow color for simplicity

// Create a mesh (planet) and add it to the scene
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

// Set the position of the camera
camera.position.z = 5;

// Animation loop
function animate() {
  renderer.setAnimationLoop(function () {
    renderer.render(scene, camera);
  });
}

animate();
