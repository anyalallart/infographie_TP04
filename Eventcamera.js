// ... (Votre code existant)

// Ajouter un gestionnaire d'événements pour le clic de souris
var isMouseDown = false;
var previousMousePosition = { x: 0, y: 0 };
var boutonpress=0;
window.addEventListener('mousedown', function (event) {
    isMouseDown = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
    boutonpress = event.button;
});

// Ajouter un gestionnaire d'événements pour le mouvement de la souris
window.addEventListener('mousemove', function (event) {
    if (!isMouseDown) return;
    switch (boutonpress) {
        case  0:
            var deltaX = -event.clientX + previousMousePosition.x;
            var deltaY = -event.clientY + previousMousePosition.y;

            // Ajuster la position de la caméra en fonction du mouvement de la souris
            camera.position.x += deltaX * 0.02;
            camera.position.y -= deltaY * 0.02;

            previousMousePosition = { x: event.clientX, y: event.clientY };
            
        case 1:
            var deltaX = -event.clientX + previousMousePosition.x;
            var deltaY = -event.clientY + previousMousePosition.y;

            // Ajuster la rotation de la scène en fonction du mouvement de la souris
            scene.traverse(function (mesh) {
                if (mesh instanceof THREE.Mesh && mesh.name=="bonhomme") {
                    
                    mesh.rotation.y +=  deltaX *0.01;
                    mesh.rotation.x +=  deltaY*0.01;
                }
            });
            previousMousePosition = { x: event.clientX, y: event.clientY };
            break;
            
       
        }

});

// Ajouter un gestionnaire d'événements pour le relâchement du bouton de la souris
window.addEventListener('mouseup', function () {
    isMouseDown = false;
});

function handleMouseWheel(event) {
    var deltaY = event.deltaY;

    // Ajuster la position de la caméra en fonction du défilement de la molette
    camera.position.z += deltaY * 0.02;

    // Assurez-vous que la caméra ne s'approche pas trop ou ne s'éloigne pas trop
    camera.position.z = Math.max(camera.position.z, 1);
    camera.position.z = Math.min(camera.position.z, 50);
}

// Ajouter l'écouteur d'événements à la fenêtre
window.addEventListener('wheel', handleMouseWheel);

