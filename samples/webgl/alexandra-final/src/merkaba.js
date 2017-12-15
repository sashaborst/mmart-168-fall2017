
//Get the height and the width of the window
let ww = window.innerWidth,
	wh = window.innerHeight

function init(){

	/* WEBGL RENDERER */
	renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')})
	renderer.setClearColor(0x3F3F3F)
	renderer.setSize(ww,wh)

	/* SCENE */
	scene = new THREE.Scene()

	/* CAMERA */
	camera = new THREE.PerspectiveCamera(20, ww/wh, 1, 10000 )
	camera.position.set(0, 250, 700)
	camera.lookAt(new THREE.Vector3(0,0,0))
	scene.add(camera)


	/* LIGHT */
	light = new THREE.DirectionalLight(0xffffff, 1)
	light.position.set( 0, 500, 500 )
	scene.add(light)

	//Create all our shapes
	createShapes()

  //animate
  animate()

	//Render the scene
	renderer.render(scene,camera)

}

function createShapes(){

	let material
	material = new THREE.MeshLambertMaterial({color:0x00ff00, wireframe: false})

	/* PYRAMID */
	//This a bit weird because it's like a cylinder

	let geometryPyramid
	geometryPyramid = new THREE.CylinderGeometry(0, 75, 100, 3, false)

	pyramid = new THREE.Mesh(geometryPyramid, material)
	pyramid.position.x = 10
	scene.add(pyramid)

  // material = new THREE.MeshLambertMaterial({color:0x00fff, wireframe: false})
	
	pyramid2 = new THREE.Mesh(geometryPyramid, material)
	pyramid2.position.x = 10
  pyramid2.position.y = -51
  pyramid2.rotation.x = 380
	scene.add(pyramid2)

}
let animate = function () {
	//Request another frame of the animation
	requestAnimationFrame(animate)

	//Make our merkaba rotate
pyramid.rotation.y += 0.02
pyramid2.rotation.y += 0.02

	//Render the scene
	renderer.render(scene, camera)
}
//Init our scene
init()
