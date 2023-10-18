// Auteur: Anya Lallart, Edouard LAMBERT, Baptiste LIBERT, Romain PIETR - groupe 4 - groupe de travail 2

var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.z = 50; // Recule la camera
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
    const points = controlPoints.map(p => ({ x: p.x, y: p.y }));//fait une copie de controlPoints et le met dans un tableau d'object

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n - k; i++) {
            points[i].x = (1 - t) * points[i].x + t * points[i + 1].x;//applique la formule de Casteljau
            points[i].y = (1 - t) * points[i].y + t * points[i + 1].y;
        }
    }

    return points[0];//retourne le point final
}

function Draw_Calsteljau(point_control){
    // Échantillonnez la courbe de Bézier en utilisant Casteljau
    const numberOfPoints = 1000; // Nombre de points à échantillonner
    const pointsOnBezierCurve = [];

    for (let i = 0; i <= numberOfPoints; i++) {
        // Calculez le point sur la courbe de Bézier en utilisant Casteljau
        const t = i / numberOfPoints;
        const point = Casteljau(point_control, t);//recupere le point final
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, 0));//ajoute le point final dans le tableau pour tracer la courbe
        console.log(point)//debug
    }
    
    
    // Créez la géométrie pour la courbe de Bézier
    const bezierGeometry = new THREE.BufferGeometry().setFromPoints(pointsOnBezierCurve);

    // Créez un matériau pour la ligne
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Par exemple, utilisez la couleur que vous préférez

    // Créez la ligne en utilisant la géométrie et le matériau
    const bezierLine = new THREE.Line(bezierGeometry, lineMaterial);

    // Ajoutez la ligne à la scène
    scene.add(bezierLine);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Courbe de Bézier avec les fonctions de base de Bernstein /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function binomialCoeff (n, k){ 
    // fonction qui calcule les coefficients binomiaux
    if(Number.isNaN(n) || Number.isNaN(k)) return NaN; // si pas des entiers
    if(k < 0 || k > n) return 0;
    if(k === 0 || k === n) return 1; 
    if(k === 1 || k === n - 1) return n;
    
    let res = n; 
    for(let i = 2; i <= k; i++){ 
      res *= (n - i + 1) / i; 
    } 
    
    return Math.round(res); 
  } 


function bernstein (n, i, t){
    // fonction qui calcule les fonctions de base de Bernstein
    b = binomialCoeff(n,i) * Math.pow(t,i) * Math.pow(1 - t, n-i);
    return b;
}


function bezierBernstein (point, t){
    // fonction qui calcule la courbe de Bézier avec les fonctions de base de Bernstein
    var x = 0;
    var y = 0;  
    var n = point.length - 1;
    for (let i = 0; i <= point.length-1; i++){
        const coefficient = bernstein(n, i, t); // calcule les coefficients de Bernstein
        x += point[i].x * coefficient ; 
        y += point[i].y * coefficient;
       
    }
    
    return {x: x, y: y};
}


function Draw_Bernstein(point_control){
    // Échantillonnez la courbe de Bézier en utilisant Bernstein
    const numberOfPoints = 1000; // Nombre de points à échantillonner
    const pointsOnBezierCurve = [];

    for (let i = 0; i <= numberOfPoints; i++) {
        const t = i / numberOfPoints;
        const point = bezierBernstein(point_control, t);
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, 0));
        console.log(point)
    }
    
    // Créez la géométrie pour la courbe de Bézier
    const bezierGeometry = new THREE.BufferGeometry().setFromPoints(pointsOnBezierCurve);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); 
    const bezierLine = new THREE.Line(bezierGeometry, lineMaterial);

    // Ajoutez la ligne à la scène
    scene.add(bezierLine);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Affichage des points de contrôle /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var point_control= [
    { x: -2, y: 0 },
    { x: -1, y: 2 },
    { x: 1, y: 6 },
    {x:2, y:-3},
    {x:3, y:2},
    {x:4, y:0}
];


function affiche_point_control(point_control){
    //affiche les point_control en bleu clair shrere
    for (let i = 0; i < point_control.length; i++){
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = point_control[i].x;
        sphere.position.y = point_control[i].y;
        scene.add(sphere);
    }
    //trace des lignes entre les points de controle
    for (let i = 0; i < point_control.length - 1; i++) {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            point_control[i].x, point_control[i].y, 0,
            point_control[i + 1].x, point_control[i + 1].y, 0
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        
        const material = new THREE.LineBasicMaterial({color: 0x999999});
        const line = new THREE.Line(geometry, material);
        scene.add(line);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Affichage //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Draw_Bernstein(point_control)
Draw_Calsteljau(point_control);
affiche_point_control(point_control);

renderer.render(scene, camera);
