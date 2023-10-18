//
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.z = 10; // Recule la camera
var scene = new THREE.Scene();
scene.add(camera);
//fond noir
scene.background = new THREE.Color(0x000000);

renderer.render(scene, camera);


const plan = new THREE.PlanGeometry(10,10,0);
const materialPlan = new THREE.MeshBasicMaterial({ color: "black" });
const planObj = new THREE.Mesh(plan, materialPlan);
planObj.position.set(0,0,0);

let tab_coord = [];

function onclick(event) {
    tab_coord.push({x : click.clientX, y : click.clientY});
    console.log(click.clientX +" "+ click.clientY);
    
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log("x : " + mouse.x + " y: " + mouse.y);
    
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
            
    var intersects = raycaster.intersectsObjects(scene.children);
    if (intersects.lng > 0) {
        var pointIntersection = intersects[0].point;
        console.log(pointIntersection);
    }
        
    
};








    // function affichage_tab(tab) {
    //     for (let i=0; i < tab.length; i++) {
    //         console.log("x : " + tab[i].x + " y : " + tab[i].y);
    //     }
    // }
    
    // function add_point(tab) {
    //     for (let i = 0; i < tab.length; i++) {
    //         const point = new THREE.SphereGeometry(5, 32, 32); // Utilisez des valeurs fixes pour la géométrie du point, par exemple, rayon de 5 et segments 32x32
    //         const materialPoint = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
    //         const pointObj = new THREE.Mesh(point, materialPoint);
    //         pointObj.position.set(tab[i].x - window.innerWidth / 2, tab[i].y - window.innerHeight / 2, 0);
    //         scene.add(pointObj);
    //     }
    //     renderer.render(scene, camera); // Assurez-vous de rendre la scène après avoir ajouté les points
    // }
    
    