// Auteur: Anya LALLART, Edouard LAMBERT, Baptiste LIBERT, Romain PIETRI - groupe Zariel - groupe de travail 2


// points pour dessiner un bonhomme de neige en 2D
const boule1 = [
    { x: 0, y: -3 },
    { x: 7, y: -3 },
    { x: 7, y: -10 },
    { x: 7, y: -17 },
    { x: 0, y: -17 },
    { x: -7, y: -17 },
    { x: -7, y: -10 },
    { x: -7, y: -3 },
    { x: 0, y: -3 },
];

const boule2 = [
    { x: 0, y: 5 },
    { x: 5, y: 5 },
    { x: 5, y: 0 },
    { x: 5, y: -5 },
    { x: 0, y: -5 },
    { x: -5, y: -5 },
    { x: -5, y: 0 },
    { x: -5, y: 5 },
    { x: 0, y: 5 },
];

const boule3 = [
    { x: 0, y: 5 },
    { x: 4, y: 5 },
    { x: 4, y: 9 },
    { x: 4, y: 13 },
    { x: 0, y: 13 },
    { x: -4, y: 13 },
    { x: -4, y: 9 },
    { x: -4, y: 5 },
    { x: 0, y: 5 },
];

const carotte = [
    { x: 0, y: 9 },
    { x: 3, y: 8.5 },
    { x: 3, y: 8.5 },
    { x: 0, y: 8 },
];

const sourire = [
    { x: -1, y: 7 },
    { x: 0, y: 6 },
    { x: 1, y: 7 },
];

const oeil1 = [
    { x: -2, y: 10 },
    { x: -1, y: 10 },
    { x: -1, y: 10 },
    { x: -2, y: 10 },
];

const oeil2 = [
    { x: 2, y: 10 },
    { x: 1, y: 10 },
    { x: 1, y: 10 },
    { x: 2, y: 10 },
];

  
// Fonction pour dessiner le bonhomme de neige avec des courbes de Bézier
function drawBezierSnowMen(line, color) {

    // Dessine la courbe de Bézier
    Draw_Calsteljau(line, color);

    // Affiche les points de contrôle
    for (let i = 0; i < line.length; i++) {
        const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        // couleur gris
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphereMesh.position.set(line[i].x, line[i].y, 1);
        scene.add(sphereMesh);
    }

    // Affiche la line
    renderer.render(scene, camera);
}


// Appelle la fonction pour dessiner
drawBezierSnowMen(boule1, 0xffffff);
drawBezierSnowMen(boule2, 0xffffff); 
drawBezierSnowMen(boule3, 0xffffff);
drawBezierSnowMen(carotte, 0xffa500); 
drawBezierSnowMen(sourire, 0xff0000); 
drawBezierSnowMen(oeil1, 0x0000ff); 
drawBezierSnowMen(oeil2, 0x0000ff);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Neige ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var flakeCount = 9000;
var flakeGeometry = new THREE.TetrahedronGeometry(0.05); // radius
var flakeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
var snow = new THREE.Group();

for (let i = 0; i < flakeCount; i++) {
  var flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
  flakeMesh.position.set(
    (Math.random() - 0.5) * 70,
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 70
  );
  snow.add(flakeMesh);
}
scene.add(snow);

var flakeArray = snow.children;

// lumières
var rightLight = new THREE.PointLight(0xffffff, 0.3, 0);
rightLight.position.set(10, 20, 7);

var leftLight = new THREE.PointLight(0xffffff, 0.3, 0);
leftLight.position.set(-10, 20, 7);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(rightLight);
scene.add(leftLight);
scene.add(ambientLight);

// camera
var animate = function() {
    requestAnimationFrame(animate);
  
    for (i = 0; i < flakeArray.length / 2; i++) {
      flakeArray[i].rotation.y += 0.01;
      flakeArray[i].rotation.x += 0.02;
      flakeArray[i].rotation.z += 0.03;
      flakeArray[i].position.y -= 0.018;
      if (flakeArray[i].position.y < -15) {
        flakeArray[i].position.y += 30;
      }
    }
    for (i = flakeArray.length / 2; i < flakeArray.length; i++) {
      flakeArray[i].rotation.y -= 0.03;
      flakeArray[i].rotation.x -= 0.03;
      flakeArray[i].rotation.z -= 0.02;
      flakeArray[i].position.y -= 0.016;
      if (flakeArray[i].position.y < -15) {
        flakeArray[i].position.y += 30;
      }
  
      snow.rotation.y -= 0.0000002;
    }
  
    renderer.render(scene, camera);
};
  
animate();
  






