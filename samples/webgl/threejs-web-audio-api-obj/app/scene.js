//import THREE from 'three';
var THREE = require('three')
import axis from './Debug/axis'
var OBJLoader = require('three-obj-loader')
OBJLoader(THREE)

let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
let scene = new THREE.Scene()
let renderer = new THREE.WebGLRenderer()

// create mouse controls
let controls = new (require('three-orbit-controls')(THREE))(camera)
// initial camera position
camera.position.z = 900
// set renderer fullscreen
renderer.setSize(window.innerWidth, window.innerHeight)
// add to dom
document.getElementById('scene').appendChild(renderer.domElement)

/**
 *  Lighting
 *  --------
 *  point light adds more direct lighting - color, intensity, distance, decay
 *  while ambient light adds light to all angles - color
 */
let pointLight = new THREE.PointLight(0xFFFFFF, 1, 0, 2)
let ambientLight = new THREE.AmbientLight(0x404040)
pointLight.position.set(10, 50, 130)

/**
 *  Plane
 *  ------
 *  pointlight adds more direct lighting
 *  while ambient light adds light to all angles
 */
let planePoints = 15
let planeMaterial = new THREE.MeshLambertMaterial({
  color: 0x8a8a8a,
  side: THREE.DoubleSide,
  wireframe: true,
  wireframeLinewidth: 1
})
let planeGeometry = new THREE.PlaneGeometry(500, 500, planePoints, planePoints)
let floor = new THREE.Mesh(planeGeometry, planeMaterial)
// let the renderer know we plan to update the vertices
floor.geometry.verticesNeedUpdate = true
floor.geometry.dynamic = true
// rotate and position plane on ground
floor.position.y = -200
floor.rotation.x = -Math.PI/2

// add all objects to scene
scene.add(ambientLight)
scene.add(pointLight)
scene.add(floor)
// debug x,y,z axis
scene.add(axis(300))

/*********************************
LOAD OBJECT
**********************************/
var manager = new THREE.LoadingManager()
const loader = new THREE.OBJLoader( manager )
const textureLoader = new THREE.TextureLoader( manager )
const texture = textureLoader.load( './textures/brick_NRM.png' )
let merkaba = null
loader.load( './merkaba_whole.obj', function ( object ) {
	merkaba = object
    merkaba.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
			child.material.map = texture;
		}
	})
	object.position.y = -15
    merkaba.scale.x = 25
    merkaba.scale.y = 25
    merkaba.rotation.y = 80
    merkaba.scale.z = 25
	scene.add( merkaba )
})

// will fire every time new audio data is recieved
export default function(audioData) {
    let {
        levels, waveform, beatCutOff, isBeat, volume
    } = audioData;

    merkaba.rotation.y += volume
    merkaba.scale.x = 25 + 50 * volume
    merkaba.scale.y = 25 + 50 * volume
    merkaba.scale.z = 25 + 50 * volume

    waveform.forEach((value, i) => {
        if (i % 2 === 0) {
            floor.geometry.vertices[i/2].z = value * 80;
        }
    });
    floor.geometry.verticesNeedUpdate = true

    // rerender scene every update
    renderer.render(scene, camera)
}
