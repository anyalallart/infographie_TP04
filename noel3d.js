// Auteur: Anya LALLART, Edouard LAMBERT, Baptiste LIBERT, Romain PIETRI - groupe Zariel - groupe de travail 2

scene.background = new THREE.Color(0xCEECF5);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// Courbe de Bézier avec De Casteljau /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Casteljau3D(controlPoints, t) {
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

function Draw_Calsteljau3D(point_control, color) {
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
const sol = [
    { x: -50, y: -10, z: 0 },
    { x: 0, y: -70, z: 0 },
    { x: 50, y: -10, z: 0 },
];

const ombrebonhomme = [
    { x: -3, y: -13.5, z: 0 },
    { x: 13, y: -8, z: 0 },
    { x: 3, y: -13.5, z: 0 },
];

const montagne1 = [
    { x: -50, y: -10, z: 0 },
    { x: -40, y: 20, z: 0 },
    { x: -25, y: 20, z: 0 },
    { x: -15, y: -10, z: 0 },
];

const montagne1ombre = [
    { x: -50, y: -10.1, z: 0 },
    { x: -40, y: 20.1, z: 0 },
    { x: -24.9, y: 20.1, z: 0 },
    { x: -14.9, y: -10, z: 0 },
];

const montagne1neige = [
    { x: -38.8, y: 10, z: 0 },
    { x: -32.5, y: 15, z: 0 },
    { x: -26.2, y: 10, z: 0 },
];

    
    const montagne2 = montagne1.map((point) => ({ x: point.x + 20, y: point.y*0.9 ,z:0}));
    const montagne2ombre = montagne1ombre.map((point) => ({ x: point.x + 20, y: point.y*0.9 ,z:0}));
    const montagne2neige = montagne1neige.map((point) => ({ x: point.x + 20, y: point.y *0.9 ,z:0}));
    
    for (let i = 0; i < montagne2.length; i++) {
    montagne2[i].y = montagne2[i].y - 1;
    }
    for (let i = 0; i < montagne2ombre.length; i++) {
    montagne2ombre[i].y = montagne2ombre[i].y - 1;
    }
    for (let i = 0; i < montagne2neige.length; i++) {
    montagne2neige[i].y = montagne2neige[i].y - 1;
    }
    
    
    const montagne3 = montagne1.map((point) => ({ x: point.x + 40, y: point.y *1.1 ,z:0}));
    const montagne3ombre = montagne1ombre.map((point) => ({ x: point.x + 40, y: point.y *1.1,z:0}));
    const montagne3neige = montagne1neige.map((point) => ({ x: point.x + 40, y: point.y *1.1,z:0}));
    
    for (let i = 0; i < montagne3.length; i++) {
    montagne3[i].y = montagne3[i].y +1;
    
    }
    for (let i = 0; i < montagne3ombre.length; i++) {
    montagne3ombre[i].y = montagne3ombre[i].y +1;
    }
    for (let i = 0; i < montagne3neige.length; i++) {
    montagne3neige[i].y = montagne3neige[i].y +1;
    }
    
    const montagne4 = montagne1.map((point) => ({ x: point.x + 60, y: point.y *0.8,z:0}));
    const montagne4ombre = montagne1ombre.map((point) => ({ x: point.x + 60, y: point.y *0.8,z:0}));
    const montagne4neige = montagne1neige.map((point) => ({ x: point.x + 60, y: point.y *0.8,z:0}));
    
    for (let i = 0; i < montagne4.length; i++) {
    montagne4[i].y = montagne4[i].y - 2;
    }
    for (let i = 0; i < montagne4ombre.length; i++) {
    montagne4ombre[i].y = montagne4ombre[i].y - 2;
    }
    for (let i = 0; i < montagne4neige.length; i++) {
    montagne4neige[i].y = montagne4neige[i].y - 2;
    }


// Fonction pour dessiner le bonhomme de neige avec des courbes de Bézier
function drawBezierSnowMen3D(line, color,name="",zindex=0) {

    // Dessine la courbe de Bézier
    //Draw_Calsteljau3D(line, color);

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
    colorSnowMen3D(line, color,name,zindex);
    // Affiche la line
    renderer.render(scene, camera);
}

// Fonction pour colorier le bonhomme de neige
function colorSnowMen3D(line, color,name="",zindex=0) {
    // Échantillonnez la courbe de Bézier en utilisant Casteljau
    const numberOfPoints = 1000; // Nombre de points à placer
    const pointsOnBezierCurve = [];

    for (let i = 0; i <= numberOfPoints; i++) {
        const t = i / numberOfPoints;
        const temp_point = Casteljau3D(line, t); // Utilisez la fonction Casteljau pour obtenir les points sur la courbe
        const point = temp_point.finalPoints[0];
        pointsOnBezierCurve.push(new THREE.Vector3(point.x, point.y, point.z));
    }
    // Ajoute les points nécessaires pour former une boucle fermée
    pointsOnBezierCurve.push(new THREE.Vector3(line[0].x, line[0].y, line[0].z));

    // Crée une forme fermée à partir des points
    
    const shape = new THREE.Shape(pointsOnBezierCurve);
     extrudeSettings = {
        depth: 0, // profondeur de l'extrusion
        bevelEnabled: false,
    };

    if(name=="bonhomme"){
         extrudeSettings = {
            depth: 5, // profondeur de l'extrusion
            bevelEnabled: false,
        };
    }
    
    // Créez la géométrie extrudée
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    const material = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.name = name;
    // Calculez la moitié de la profondeur
    if(name=="bonhomme")
    {
        mesh.position.z += 5;
    }
    mesh.position.z +=zindex;
    scene.add(mesh);

    // Rend la scène
    renderer.render(scene, camera);
}

  // Appelle la fonction pour dessiner
function draw_3d() {
    drawBezierSnowMen3D(sol, 0xE0ECF8);
  
    
    drawBezierSnowMen3D(montagne4ombre, 0x000000);
    drawBezierSnowMen3D(montagne4, 0x848484);
    drawBezierSnowMen3D(montagne4neige, 0xffffff);
  
    drawBezierSnowMen3D(montagne3ombre, 0x000000);
    drawBezierSnowMen3D(montagne3, 0x848484);
    drawBezierSnowMen3D(montagne3neige, 0xffffff);
  
    drawBezierSnowMen3D(montagne2ombre, 0x000000);
    drawBezierSnowMen3D(montagne2, 0x848484);
    drawBezierSnowMen3D(montagne2neige, 0xffffff);
  
  
    
    drawBezierSnowMen3D(montagne1ombre, 0x000000);
    drawBezierSnowMen3D(montagne1, 0x848484);
    drawBezierSnowMen3D(montagne1neige, 0xffffff);
  
    //drawBezierSnowMen3D(ombrebonhomme, 0x000000);
  
  
  
    drawBezierSnowMen3D(boule1_3D, 0xffffff, "bonhomme");
    drawBezierSnowMen3D(boule2_3D, 0xffffff, "bonhomme"); 
    drawBezierSnowMen3D(boule3_3D, 0xffffff,"bonhomme");
    drawBezierSnowMen3D(carotte_3D, 0xffa500,"bonhomme",0.1); 
    drawBezierSnowMen3D(sourire_3D, 0xff0000,"bonhomme",0.1); 
    drawBezierSnowMen3D(oeil1_3D, 0x0000ff,"bonhomme",0.1); 
    drawBezierSnowMen3D(oeil2_3D, 0x0000ff,"bonhomme",0.1);
  
    drawBezierSnowMen3D(base_chapeau_3D, 0x61380B,"bonhomme",0.1);
    drawBezierSnowMen3D(chapeau_3D, 0x61380B,"bonhomme",0.1);
  
    drawBezierSnowMen3D(bouton1_3D, 0x000000,"bonhomme",0.1);
    drawBezierSnowMen3D(bouton2_3D, 0x000000,"bonhomme",0.1);
    drawBezierSnowMen3D(bouton3_3D, 0x000000,"bonhomme",0.1);
}
  
draw_3d();
scene.traverse(function (mesh) {
    if (mesh instanceof THREE.Mesh && mesh.name == "bonhomme") {
        mesh.position.z+=5

        
    }
});
function animate() {
    requestAnimationFrame(animate);
    //recupere les meshs de la scene et les fait tourner
    scene.traverse(function (mesh) {
        if (mesh instanceof THREE.Mesh && mesh.name == "bonhomme") {
            
            mesh.rotation.y +=  0.01;
        }
    });
    renderer.render(scene, camera);
}
animate();