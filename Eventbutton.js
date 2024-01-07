button2d.addEventListener('click', function () {
    animate2D_bool = false;
    scene.clear();
    snow.clear();
    flakeArray = [];
   animate2D_bool = true;
    animate3D_bool = false;
    draw_2d();
   animate2D(); 
});
button3d.addEventListener('click', function () {
    animate3D_bool = false;
    scene.clear();
    snow.clear();
    flakeArray = [];
    animate2D_bool = false;
    animate3D_bool = true;
    draw_3d();
    animate3D();
});
