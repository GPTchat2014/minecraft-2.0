import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lumière ambiante
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Génération d'un sol en blocs
const blockSize = 1;
const worldSize = 10;
const geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
const material = new THREE.MeshBasicMaterial({ color: 0x8b4513 });

for (let x = -worldSize; x < worldSize; x++) {
    for (let z = -worldSize; z < worldSize; z++) {
        const block = new THREE.Mesh(geometry, material);
        block.position.set(x * blockSize, -blockSize, z * blockSize);
        scene.add(block);
    }
}

// Contrôles du joueur
const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => controls.lock());
camera.position.y = 2;

// Ajouter Herobrine
const herobrineTexture = new THREE.TextureLoader().load('herobrine.png');
const herobrineMaterial = new THREE.MeshBasicMaterial({ map: herobrineTexture });
const herobrine = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), herobrineMaterial);
herobrine.position.set(5, 0, 5);
scene.add(herobrine);

// Animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
