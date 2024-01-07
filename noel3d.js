// Auteur: Anya LALLART, Edouard LAMBERT, Baptiste LIBERT, Romain PIETRI - groupe Zariel - groupe de travail 2

var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const posz_camera = 50;
camera.position.z = posz_camera; // Recule la camera
var scene = new THREE.Scene();
scene.add(camera);
//fond noir
scene.background = new THREE.Color(0x000000);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// Courbe de Bézier avec De Casteljau /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Casteljau(controlPoints, t) {
    //applique l'algorithme de Casteljau
    const n = controlPoints.length - 1;
    const points = controlPoints.map(p => ({ x: p.x, y: p.y, z: p.z })); //fait une copie de controlPoints et le met dans un tableau d'object
    const steps = []
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            points[i].x = (1 - t) * points[i].x + t * points[i + 1].x; //applique la formule de Casteljau
            points[i].y = (1 - t) * points[i].y + t * points[i + 1].y;
            points[i].z = (1 - t) * points[i].z + t * points[i + 1].z;
            steps.push(points.map(p => ({ x: p.x, y: p.y, z: p.z })));
        }
    }
    return { finalPoints: points, steps: steps };
}

function Draw_Calsteljau(point_control, color) {
    // Échantillonnez la courbe de Bézier en utilisant Casteljau
    const numberOfPoints = 3000; // Nombre de points à placer
    const pointsOnBezierCurve = [];
    const construction_points = [];
    for (let i = 0; i <= numberOfPoints; i++) {
        // Calculez le point sur la courbe de Bézier en utilisant Casteljau
        const t = i / numberOfPoints;
        const temp_point = Casteljau(point_control, t);//recupere tous les points
        const point = temp_point.finalPoints[0];// recupere le point final
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, point.z));//ajoute le point final dans le tableau pour tracer la courbe
        construction_points.push(temp_point.steps);//ajoute les points de construction dans le tableau
    }

    // la géométrie pour la courbe de Bézier
    const bezierGeometry = new THREE.BufferGeometry().setFromPoints(pointsOnBezierCurve);
    const lineMaterial = new THREE.LineBasicMaterial({ color }); 
    const bezierLine = new THREE.Line(bezierGeometry, lineMaterial);
    bezierLine.material.linewidth = 500;

    // Ajoutez la ligne à la scène
    scene.add(bezierLine);
    renderer.render(scene, camera);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Bonhomme de neige ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// points pour dessiner un bonhomme de neige en 3D

const boule1_3D = [
    { x: 0, y: -3, z: 0 },
    { x: 7, y: -3, z: 0 },
    { x: 7, y: -10, z: 0 },
    { x: 7, y: -17, z: 0 },
    { x: 0, y: -17, z: 0 },
    { x: -7, y: -17, z: 0 },
    { x: -7, y: -10, z: 0 },
    { x: -7, y: -3, z: 0 },
    { x: 0, y: -3, z: 0 },
];

const boule2_3D = [
    { x: 0, y: 5, z: 0 },
    { x: 5, y: 5, z: 0 },
    { x: 5, y: 0, z: 0 },
    { x: 5, y: -5, z: 0 },
    { x: 0, y: -5, z: 0 },
    { x: -5, y: -5, z: 0 },
    { x: -5, y: 0, z: 0 },
    { x: -5, y: 5, z: 0 },
    { x: 0, y: 5, z: 0 },
];

const boule3_3D = [
    { x: 0, y: 5, z: 0 },
    { x: 4, y: 5, z: 0 },
    { x: 4, y: 9, z: 0 },
    { x: 4, y: 13, z: 0 },
    { x: 0, y: 13, z: 0 },
    { x: -4, y: 13, z: 0 },
    { x: -4, y: 9, z: 0 },
    { x: -4, y: 5, z: 0 },
    { x: 0, y: 5, z: 0 },
];

const carotte_3D = [
    { x: 0, y: 9, z: 0 },
    { x: 3, y: 8.5, z: 0 },
    { x: 3, y: 8.5, z: 0 },
    { x: 0, y: 8, z: 0 },
];

const sourire_3D = [
    { x: -1, y: 7, z: 0 },
    { x: 0, y: 6, z: 0 },
    { x: 1, y: 7, z: 0 },
];

const oeil1_3D = [
    { x: -2, y: 10, z: 0 },
    { x: -1, y: 10, z: 0 },
    { x: -1, y: 9, z: 0 },
    { x: -2, y: 10, z: 0 },
];

const oeil2_3D = [
    { x: 2, y: 10, z: 0 },
    { x: 1, y: 10, z: 0 },
    { x: 1, y: 9, z: 0 },
    { x: 2, y: 10, z: 0 },
];

const bouton1_3D = [
    { x: 0, y: 0, z: 0 },
    { x: 0.5, y: 0, z: 0 },
    { x: 0.5, y: 1, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: -0.5, y: 1, z: 0 },
    { x: -0.5, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
];

const bouton2_3D = [
    { x: 0, y: 2, z: 0 },
    { x: 0.5, y: 2, z: 0 },
    { x: 0.5, y: 3, z: 0 },
    { x: 0, y: 3, z: 0 },
    { x: -0.5, y: 3, z: 0 },
    { x: -0.5, y: 2, z: 0 },
    { x: 0, y: 2, z: 0 },
];

const bouton3_3D = [
    { x: 0, y: -1, z: 0 },
    { x: 0.5, y: -1, z: 0 },
    { x: 0.5, y: -2, z: 0 },
    { x: 0, y: -2, z: 0 },
    { x: -0.5, y: -2, z: 0 },
    { x: -0.5, y: -1, z: 0 },
    { x: 0, y: -1, z: 0 },
];

const base_chapeau_3D = [

    { x: -4, y: 11.2, z: 0 },
    { x: -4, y: 11, z: 0 },
    { x: -4, y: 10.9, z: 0 },
    { x: -3, y: 10.8, z: 0 },
    { x: -2, y: 10.9, z: 0 },
    { x: -2, y: 11, z: 0 },
    { x: -2, y: 11.2, z: 0 },
    { x: -2, y: 11.2, z: 0 },
    { x: -1, y: 11.4, z: 0 },
    { x: 0, y: 11.2, z: 0 },
    { x: 1, y: 11.4, z: 0 },
    { x: 2, y: 11.2, z: 0 },
    { x: 2, y: 11.2, z: 0 },
    { x: 2, y: 11, z: 0 },
    { x: 2, y: 10.9, z: 0 },
    { x: 3, y: 10.8, z: 0 },
    { x: 4, y: 11, z: 0 },
    { x: 4, y: 11.2, z: 0 },

];

const chapeau_3D = [
    { x: -2, y: 11, z: 0 },
    { x: -2, y: 14, z: 0 },
    { x: -2, y: 14, z: 0 },
    { x: 0, y: 15, z: 0 },
    { x: 2, y: 14, z: 0 },
    { x: 2, y: 14, z: 0 },
    { x: 2, y: 11, z: 0 },
];


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
          sphereMesh.position.set(line[i].x, line[i].y, line[i].z);
          scene.add(sphereMesh);
      }
    }
    colorSnowMen(line, color);
    // Affiche la line
    renderer.render(scene, camera);
}

// Fonction pour colorier le bonhomme de neige
function colorSnowMen(line, color) {
    // Échantillonnez la courbe de Bézier en utilisant Casteljau
    const numberOfPoints = 1000; // Nombre de points à placer
    const pointsOnBezierCurve = [];

    for (let i = 0; i <= numberOfPoints; i++) {
        const t = i / numberOfPoints;
        const temp_point = Casteljau(line, t); // Utilisez la fonction Casteljau pour obtenir les points sur la courbe
        const point = temp_point.finalPoints[0];
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, point.z));
    }
    // Ajoute les points nécessaires pour former une boucle fermée
    pointsOnBezierCurve.push(new THREE.Vector2(line[0].x, line[0].y, line[0].z));

    // Crée une forme fermée à partir des points
    const shape = new THREE.Shape(pointsOnBezierCurve);
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Rend la scène
    renderer.render(scene, camera);
}

  // Appelle la fonction pour dessiner
function draw_3d() {
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
}
  
draw_3d();