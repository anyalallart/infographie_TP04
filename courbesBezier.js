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
    const points = controlPoints.map(p => ({ x: p.x, y: p.y })); //fait une copie de controlPoints et le met dans un tableau d'object
    const steps = []
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            points[i].x = (1 - t) * points[i].x + t * points[i + 1].x; //applique la formule de Casteljau
            points[i].y = (1 - t) * points[i].y + t * points[i + 1].y;
            steps.push(points.map(p => ({ x: p.x, y: p.y })));
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
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, 0));//ajoute le point final dans le tableau pour tracer la courbe
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Gestion des événements avec bouton ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// on récupère les inputs
let button2d = document.getElementById('show_2d');
let button3d = document.getElementById('show_3d');
let point = document.getElementById('point');

let animate2D_bool = false;
let animate3D_bool = false;