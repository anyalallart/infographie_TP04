// Exercice 5 : Animation le long d’une courbe paramétrique, groupe Zariel

var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.z = 10; // Recule la camera
var scene = new THREE.Scene();
scene.add(camera);


const material = new THREE.LineBasicMaterial({color: 0x999999});
const cercle = [];
const nbPoints = 1000;

// elipse
for (let i = 0; i < nbPoints; i++) {
    const t = (i / nbPoints) * 2 * Math.PI; // on multiplie par 2pi parce que c'est un cercle
    const x = 3 * Math.cos(t); // Fonction parametrique pour x en fonction de t
    const y = 2 * Math.sin(t); // Fonction parametrique pour y en fonction de t
    cercle.push(new THREE.Vector3(x, y, 0));
}

const geometry1 = new THREE.BufferGeometry().setFromPoints(cercle);
const form1 = new THREE.Line(geometry1, material);

// on ajoute la forme a la scène
scene.add(form1);

// création d'une sphere appelée soleil
const soleil = new THREE.SphereGeometry(0.5, 32, 32);
const materialSoleil = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const soleilObj = new THREE.Mesh(soleil, materialSoleil);
scene.add(soleilObj);

// création d'une sphere appelée terre
const terre = new THREE.SphereGeometry(0.2, 32, 32);
const materialSphere = new THREE.MeshBasicMaterial({ color: 0x375673 });
const terreObj = new THREE.Mesh(terre, materialSphere);
scene.add(terreObj);

// création d'une sphere appelée lune
const lune = new THREE.SphereGeometry(0.1, 32, 32);
const materialLune = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
const luneObj = new THREE.Mesh(lune, materialLune);
scene.add(luneObj);



//anime la terre et la fait bouger le long du cercle

let t = 0;
const luneDistance = 1;
function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    const terreX = 3 * Math.cos(t) // Fonction parametrique pour x en fonction de t
    const terreY = 2 * Math.sin(t) // Fonction parametrique pour y en fonction de t

    // Position de la Lune par rapport à la Terre (en coordonnées polaires)
    const luneX = luneDistance * Math.cos(t * 13)/2; // Le facteur 2 détermine la vitesse de rotation de la Lune
    const luneY = luneDistance * Math.sin(t * 13)/2;

    terreObj.position.x = terreX;
    terreObj.position.y = terreY;

    // Position de la Lune par rapport à la Terre
    luneObj.position.x = terreX + luneX;
    luneObj.position.y = terreY + luneY;

    renderer.render(scene, camera);

}
animate();


renderer.render(scene, camera);
