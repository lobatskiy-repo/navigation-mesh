
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three'
// import { OrbitControls } from "three-orbitcontrols-ts";
//@ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//@ts-ignore
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Pathfinding, PathfindingHelper } from 'three-pathfinding';


function App() {

  // SCENE
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa8def0);

  //CAMERA
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.y = 10;
  camera.position.z = 10;
  camera.position.x = 33;

  //Render
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true;

  //ORBIT CAMERA CONTROL

  const orbitControls = new OrbitControls(camera, renderer.domElement);

  // orbitControls.mouseButtons = {
  //   MIDDLE: THREE.MOUSE.ROTATE,
  //   RIGHT: THREE.MOUSE.PAN
  // }

  orbitControls.enableDamping = true;
  orbitControls.enablePan = true;
  orbitControls.minDistance = 5;
  orbitControls.minDistance = 60;
  orbitControls.maxPolarAngle = Math.PI / 2 - 0.05
  orbitControls.minPolarAngle = Math.PI / 4;
  orbitControls.update();

  //LIGHTS 
  const dLight = new THREE.DirectionalLight('whote', 0.8);
  dLight.position.x = 20;
  dLight.position.y = 30;

  dLight.castShadow = true;
  dLight.shadow.mapSize.width = 4096;
  dLight.shadow.mapSize.height = 4096;

  const d = 35;
  dLight.shadow.camera.left = -d;
  dLight.shadow.camera.right = d;
  dLight.shadow.camera.top = d;
  dLight.shadow.camera.bottom = -d;

  scene.add(dLight);

  const aLight = new THREE.AmbientLight('white', 0.5);
  scene.add(aLight);

  //ATTACH RENDER

  document.body.appendChild(renderer.domElement);

  //RESIZE HANDLER

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onWindowResize);

  //AGENT

  const agentHeight = 1.0;
  const agentRadius = 0.25;

  const agent = new THREE.Mesh(new THREE.CylinderGeometry(agentRadius, agentRadius, agentHeight), new THREE.MeshPhongMaterial({ color: 'green' }));
  agent.position.y = agentHeight / 2;
  const agentGroup = new THREE.Group()

  agentGroup.add(agent);
  agentGroup.position.z = 0;
  agentGroup.position.x = 0;
  agentGroup.position.y = 1;
  scene.add(agentGroup);

  // LOAD LEVEL
  const loader = new GLTFLoader()

  loader.load('./glb/demo-level.glb',
    (gltf: GLTF) => {
       
      scene.add(gltf.scene);
    }
  )


  // INITIALIZE THREE-PATHFINDING
  const pathfinding = new Pathfinding();
  const pathfindinghelper = new PathfindingHelper();
  scene.add(pathfindinghelper);
  const ZONE = 'level1';
  const SPEED = 3;
  let navmesh: any;
  let groupID;
  let navpath: any;
  loader.load('./glb/demo-level-navmesh.glb', (gltf: GLTF) => { 
    gltf.scene.traverse((node: any) => {
      
      if (!navmesh && node.isObject3D && node.children && node.children.length > 0) {
        navmesh = node.children[0];
        pathfinding.setZoneData(ZONE, Pathfinding.createZone(navmesh.geometry));
      }
    });
  });


  // RAYCASTING
  const raycaster = new THREE.Raycaster(); // create once
  const clickMouse = new THREE.Vector2();  // create once

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }
  window.addEventListener('click', event => {
    // THREE RAYCASTER
    clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const found = intersect(clickMouse);
    if (found.length > 0) {
      let target = found[0].point;
      const agentpos = agentGroup.position;
      // console.log(`agentpos: ${JSON.stringify(agentpos)}`);
      // console.log(`target: ${JSON.stringify(target)}`);

      groupID = pathfinding.getGroup(ZONE, agentGroup.position);
      // find closest node to agent, just in case agent is out of bounds
      const closest = pathfinding.getClosestNode(agentpos, ZONE, groupID);
      navpath = pathfinding.findPath(closest.centroid, target, ZONE, groupID);
      if (navpath) {
        // console.log(`navpath: ${JSON.stringify(navpath)}`);
        pathfindinghelper.reset();
        pathfindinghelper.setPlayerPosition(agentpos);
        pathfindinghelper.setTargetPosition(target);
        pathfindinghelper.setPath(navpath);
      }
    }
  })

  // MOVEMENT ALONG PATH
  function move(delta: number) {
    if (!navpath || navpath.length <= 0) return

    const targetPosition = navpath[0];
    const distance = targetPosition.clone().sub(agentGroup.position);

    if (distance.lengthSq() > 0.05 * 0.05) {
      distance.normalize();
      // Move player to target
      agentGroup.position.add(distance.multiplyScalar(delta * SPEED));
    } else {
      // Remove node from the path we calculated
      navpath.shift();
    }
  }

  // GAMELOOP
  const clock = new THREE.Clock();

  const gameLoop = () => {
    move(clock.getDelta());
    orbitControls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(gameLoop)

  }
  gameLoop()





  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
