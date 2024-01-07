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
  { x: -1, y: 9 },
  { x: -2, y: 10 },
];

const oeil2 = [
  { x: 2, y: 10 },
  { x: 1, y: 10 },
  { x: 1, y: 9 },
  { x: 2, y: 10 },
];
const bouton1 = [
{ x: 0, y: 0 },
{ x: 0.5, y: 0 },
{ x: 0.5, y: 1},
{ x: 0, y: 1 },
{ x: -0.5, y: 1 },
{ x: -0.5, y: 0 },
{ x: 0, y: 0 },
];
const bouton2 = [
{ x: 0, y: 2 },
{ x: 0.5, y: 2 },
{ x: 0.5, y:3},
{ x: 0, y: 3},
{ x: -0.5, y: 3 },
{ x: -0.5, y: 2 },
{ x: 0, y: 2},
];
const bouton3 = [
{ x: 0, y: -1 },
{ x: 0.5, y: -1},
{ x: 0.5, y: -2},
{ x: 0, y: -2 },
{ x: -0.5, y: -2 },
{ x: -0.5, y: -1 },
{ x: 0, y: -1 },
];

const base_chapeau = [

{ x: -4, y: 11.2},
{ x: -4, y: 11 },
{ x: -4, y: 10.9 },
{ x: -3, y: 10.8 },
{ x: -2, y: 10.9 },
{ x: -2, y: 11},
{ x: -2, y: 11.2},
{ x: -2, y: 11.2},
{ x: -1, y: 11.4},
{ x: 0, y: 11.2},
{ x: 1, y: 11.4},
{ x: 2, y: 11.2},
{ x: 2, y: 11.2},
{ x: 2, y: 11},
{ x: 2, y: 10.9},
{ x: 3, y: 10.8},
{ x: 4, y: 11},
{ x: 4, y: 11.2},

];

const chapeau = [//demi cercle du chapeau 
{ x: -2, y: 11 },
{ x: -2, y: 14 },
{ x: -2, y: 14},
{ x: 0, y: 15 },
{ x: 2, y: 14 },
{ x: 2, y: 14 },
{ x: 2, y: 11 },
];


//dessine 4 montagnes, elles sont au nombre de 4 pour que le bonhomme de neige soit au centre de la scÃ¨ne, elles sont derriere le bonhomme de neige et GRANDES
const montagne1 = [
{ x: -50, y: -10 },
{ x: -40, y: 20 },
{ x: -25, y: 20 },
{ x: -15, y: -10 },
];
const montagne1ombre = [
{ x: -50, y: -10.1 },
{ x: -40, y: 20.1 },
{ x: -24.9, y: 20.1 },
{ x: -14.9, y: -10 },

];
const montagne1neige = [//met de la neige en haut de la montagne
{ x: -38.8, y: 10 },
{ x: -32.5, y: 15 },
{ x: -26.2, y: 10 },
];

const montagne2 = montagne1.map((point) => ({ x: point.x + 20, y: point.y*0.9 }));
const montagne2ombre = montagne1ombre.map((point) => ({ x: point.x + 20, y: point.y*0.9 }));
const montagne2neige = montagne1neige.map((point) => ({ x: point.x + 20, y: point.y *0.9}));

for (let i = 0; i < montagne2.length; i++) {
montagne2[i].y = montagne2[i].y - 1;
}
for (let i = 0; i < montagne2ombre.length; i++) {
montagne2ombre[i].y = montagne2ombre[i].y - 1;
}
for (let i = 0; i < montagne2neige.length; i++) {
montagne2neige[i].y = montagne2neige[i].y - 1;
}


const montagne3 = montagne1.map((point) => ({ x: point.x + 40, y: point.y *1.1}));
const montagne3ombre = montagne1ombre.map((point) => ({ x: point.x + 40, y: point.y *1.1}));
const montagne3neige = montagne1neige.map((point) => ({ x: point.x + 40, y: point.y *1.1}));

for (let i = 0; i < montagne3.length; i++) {
montagne3[i].y = montagne3[i].y +1;

}
for (let i = 0; i < montagne3ombre.length; i++) {
montagne3ombre[i].y = montagne3ombre[i].y +1;
}
for (let i = 0; i < montagne3neige.length; i++) {
montagne3neige[i].y = montagne3neige[i].y +1;
}

const montagne4 = montagne1.map((point) => ({ x: point.x + 60, y: point.y *0.8}));
const montagne4ombre = montagne1ombre.map((point) => ({ x: point.x + 60, y: point.y *0.8}));
const montagne4neige = montagne1neige.map((point) => ({ x: point.x + 60, y: point.y *0.8}));

for (let i = 0; i < montagne4.length; i++) {
montagne4[i].y = montagne4[i].y - 2;
}
for (let i = 0; i < montagne4ombre.length; i++) {
montagne4ombre[i].y = montagne4ombre[i].y - 2;
}
for (let i = 0; i < montagne4neige.length; i++) {
montagne4neige[i].y = montagne4neige[i].y - 2;
}

const sol =[
{ x: -50, y: -10 },
{ x: 0, y: -70 },
{ x: 50, y: -10 },
]

const ombrebonhomme = [
{ x: -3, y: -13.5},
{ x: 13, y: -8 },
{ x: 3 , y: -13.5 },
]
  
// Fonction pour dessiner le bonhomme de neige avec des courbes de Bézier
function drawBezierSnowMen(line, color) {

    // Dessine la courbe de Bézier
    Draw_Calsteljau(line, color);

    // Affiche les points de contrôle
    if (point.checked) {
      for (let i = 0; i < line.length; i++) {
          const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
          // couleur gris
          const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
          const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphereMesh.position.set(line[i].x, line[i].y, 1);
          scene.add(sphereMesh);
      }
    }
    colorSnowMen(line, color);
    // Affiche la line
    renderer.render(scene, camera);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Coloriage //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction pour colorier le bonhomme de neige
function colorSnowMen(line, color) {
  // Échantillonnez la courbe de Bézier en utilisant Casteljau
  const numberOfPoints = 1000; // Nombre de points à placer
  const pointsOnBezierCurve = [];

  for (let i = 0; i <= numberOfPoints; i++) {
    const t = i / numberOfPoints;
    const temp_point = Casteljau(line, t); // Utilisez la fonction Casteljau pour obtenir les points sur la courbe
    const point = temp_point.finalPoints[0];
    pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, 0));
  }
  // Ajoute les points nécessaires pour former une boucle fermée
  pointsOnBezierCurve.push(new THREE.Vector2(line[0].x, line[0].y));

  // Crée une forme fermée à partir des points
  const shape = new THREE.Shape(pointsOnBezierCurve);
  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Rend la scène
  renderer.render(scene, camera);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Dessin /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Appelle la fonction pour dessiner
function draw_2d() {
  drawBezierSnowMen(sol, 0xE0ECF8);

  
  drawBezierSnowMen(montagne4ombre, 0x000000);
  drawBezierSnowMen(montagne4, 0x848484);
  drawBezierSnowMen(montagne4neige, 0xffffff);

  drawBezierSnowMen(montagne3ombre, 0x000000);
  drawBezierSnowMen(montagne3, 0x848484);
  drawBezierSnowMen(montagne3neige, 0xffffff);

  drawBezierSnowMen(montagne2ombre, 0x000000);
  drawBezierSnowMen(montagne2, 0x848484);
  drawBezierSnowMen(montagne2neige, 0xffffff);


  
  drawBezierSnowMen(montagne1ombre, 0x000000);
  drawBezierSnowMen(montagne1, 0x848484);
  drawBezierSnowMen(montagne1neige, 0xffffff);

  drawBezierSnowMen(ombrebonhomme, 0x000000);



  drawBezierSnowMen(boule1, 0xffffff);
  drawBezierSnowMen(boule2, 0xffffff); 
  drawBezierSnowMen(boule3, 0xffffff);
  drawBezierSnowMen(carotte, 0xffa500); 
  drawBezierSnowMen(sourire, 0xff0000); 
  drawBezierSnowMen(oeil1, 0x0000ff); 
  drawBezierSnowMen(oeil2, 0x0000ff);

  drawBezierSnowMen(base_chapeau, 0x61380B);
  drawBezierSnowMen(chapeau, 0x61380B);

  drawBezierSnowMen(bouton1, 0x000000);
  drawBezierSnowMen(bouton2, 0x000000);
  drawBezierSnowMen(bouton3, 0x000000);

  flakeCount = 9000;
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

   flakeArray = snow.children;
  var rightLight = new THREE.PointLight(0xffffff, 0.3, 0);
  rightLight.position.set(10, 20, 7);

  var leftLight = new THREE.PointLight(0xffffff, 0.3, 0);
  leftLight.position.set(-10, 20, 7);

  var ambientLight = new THREE.AmbientLight(0xffffff, 5);
  scene.add(rightLight);
  scene.add(leftLight);
  scene.add(ambientLight);
}

//draw_2d();


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

var ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(rightLight);
scene.add(leftLight);
scene.add(ambientLight);
scene.background = new THREE.Color(0xCEECF5);

// camera
var animate2D = function() {
  if(animate2D_bool){requestAnimationFrame(animate2D);}
  else{console.log("stop");}
  
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
  
//animate();
  






