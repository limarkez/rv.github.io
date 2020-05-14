
     var scene = new THREE.Scene();
var aspect =  window.innerWidth /window.innerHeight;
var camera = new THREE.OrthographicCamera(window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, - 500, 1000); 
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var GridHelper = new THREE.PolarGridHelper(23,-1,20);
GridHelper.scale.set(1,1,0.5);
scene.add(GridHelper);

             //Labels
            var canvas1 = document.createElement('canvas');
            var context1 = canvas1.getContext('2d');
            var texture1 = new THREE.Texture(canvas1);
             context1.font = "Bold 65px Arial";
             context1.fillStyle = '#ffffff';
             context1.fillText("Mercurio", -5, 110);
             texture1.needsUpdate = true;
            var spriteMaterial = new THREE.SpriteMaterial({map: texture1});
            var label1 = new THREE.Sprite(spriteMaterial);
            label1.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label1.position.set(0,0,-0.7);

            var canvas2 = document.createElement('canvas');
            var context2 = canvas2.getContext('2d');
            var texture2 = new THREE.Texture(canvas2);
             context2.font = "Bold 65px Arial";
             context2.fillStyle = '#ffffff';
             context2.fillText("Venus", -5, 110);
             texture2.needsUpdate = true;
            var spriteMaterial2 = new THREE.SpriteMaterial({map: texture2});
            var label2 = new THREE.Sprite(spriteMaterial2);
            label2.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label2.position.set(0,0,-0.8);

            var canvas3 = document.createElement('canvas');
            var context3 = canvas3.getContext('2d');
            var texture3 = new THREE.Texture(canvas3);
             context3.font = "Bold 65px Arial";
             context3.fillStyle = '#ffffff';
             context3.fillText("Tierra", -5, 110);
             texture3.needsUpdate = true;
            var spriteMaterial3 = new THREE.SpriteMaterial({map: texture3});
            var label3 = new THREE.Sprite(spriteMaterial3);
            label3.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label3.position.set(0,0,-0.7);

            var canvas4 = document.createElement('canvas');
            var context4 = canvas4.getContext('2d');
            var texture4 = new THREE.Texture(canvas4);
             context4.font = "Bold 65px Arial";
             context4.fillStyle = '#ffffff';
             context4.fillText("Marte", -5, 110);
             texture4.needsUpdate = true;
            var spriteMaterial4 = new THREE.SpriteMaterial({map: texture4});
            var label4 = new THREE.Sprite(spriteMaterial4);
            label4.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label4.position.set(0,0,-0.7);

            var canvas5 = document.createElement('canvas');
            var context5 = canvas5.getContext('2d');
            var texture5 = new THREE.Texture(canvas5);
             context5.font = "Bold 65px Arial";
             context5.fillStyle = '#ffffff';
             context5.fillText("Jupiter", -5, 110);
             texture5.needsUpdate = true;
            var spriteMaterial5 = new THREE.SpriteMaterial({map: texture5});
            var label5 = new THREE.Sprite(spriteMaterial5);
            label5.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label5.position.set(0,0,-1.2);

            var canvas6 = document.createElement('canvas');
            var context6 = canvas6.getContext('2d');
            var texture6 = new THREE.Texture(canvas6);
             context6.font = "Bold 65px Arial";
             context6.fillStyle = '#ffffff';
             context6.fillText("Saturno", -5, 110);
             texture6.needsUpdate = true;
            var spriteMaterial6 = new THREE.SpriteMaterial({map: texture6});
            var label6 = new THREE.Sprite(spriteMaterial6);
            label6.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label6.position.set(0,0,-1);

            var canvas7 = document.createElement('canvas');
            var context7 = canvas7.getContext('2d');
            var texture7 = new THREE.Texture(canvas7);
             context7.font = "Bold 65px Arial";
             context7.fillStyle = '#ffffff';
             context7.fillText("Urano", -5, 110);
             texture7.needsUpdate = true;
            var spriteMaterial7 = new THREE.SpriteMaterial({map: texture7});
            var label7 = new THREE.Sprite(spriteMaterial7);
            label7.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label7.position.set(0,0,-1);

            var canvas8 = document.createElement('canvas');
            var context8 = canvas8.getContext('2d');
            var texture8 = new THREE.Texture(canvas8);
             context8.font = "Bold 65px Arial";
             context8.fillStyle = '#ffffff';
             context8.fillText("Neptuno", -5, 110);
             texture8.needsUpdate = true;
            var spriteMaterial8 = new THREE.SpriteMaterial({map: texture8});
            var label8 = new THREE.Sprite(spriteMaterial8);
            label8.scale.set(0.2*10, 0.2*5, 0.2*1 );
            label8.position.set(0,0,-1.1);

//crear universo
var loader = new THREE.TextureLoader();
var unitexture = loader.load("js/galaxy.png");
var universo = new THREE.SphereGeometry( 40, 60, 60 );
var material = new THREE.MeshBasicMaterial({
	map: unitexture, side: THREE.BackSide});
var bg = new THREE.Mesh( universo, material );
scene.add( bg );

var light = new THREE.PointLight( 0xb4e7f2, 2 );
scene.add(light);
light.position.set(20,10,10);

scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

var time = 0;

//crear sol
var sol = new sol (2, "js/sol.jpg");
scene.add(sol.sol);

//crear mercurio
var mercurio = new planeta (0.2, "js/mercurio.jpg");
scene.add(mercurio.planeta);
mercurio.planeta.add(label1);

//crear venus
var venus = new planeta (0.3, "js/venus.jpg");
scene.add(venus.planeta);
venus.planeta.add(label2);

//crear tierra
var tierra = new planeta (0.4, "js/map.jpg");
scene.add(tierra.planeta);
tierra.planeta.add(label3);

//crear marte
var marte = new planeta (0.2, "js/marte.jpg");
scene.add(marte.planeta);
marte.planeta.add(label4);

//crear jupiter
var jupiter = new planeta (0.7, "js/jupiter.jpg");
scene.add(jupiter.planeta);
jupiter.planeta.add(label5);

//crear saturno
var saturno = new planeta (0.6, "js/saturno.jpg");
scene.add(saturno.planeta);
saturno.planeta.add(label6);

//crear urano
var urano = new planeta (0.5, "js/urano.jpg");
scene.add(urano.planeta);
urano.planeta.add(label7);

//crear neptuno
var neptuno = new planeta (0.5, "js/neptuno.jpg");
scene.add(neptuno.planeta);
neptuno.planeta.add(label8);

//crear luna
var luna = new planeta (0.1, "js/mercurio.jpg");
scene.add(luna.planeta);

camera.position.x = 0;
camera.position.y = 1;
camera.position.z =0;

camera.lookAt(0,0,0);


var render = function () {
  requestAnimationFrame( render );

sol.sol.rotation.z += 0.0004;

mercurio.planeta.rotation.z += 0.001;
mercurio.planeta.position.set(5.7*Math.cos(0.048*time-2),0,2.9*Math.sin(0.048*time-2));

venus.planeta.rotation.z += 0.001;
venus.planeta.position.set(1.2*5.7*Math.cos(0.053*time-1),0,1.2*2.9*Math.sin(0.053*time-1));

tierra.planeta.rotation.z += 0.001;
tierra.planeta.position.set(1.4*5.7*Math.cos(0.030*time),0,1.4*2.9*Math.sin(0.030*time));

marte.planeta.rotation.z += 0.001;
marte.planeta.position.set(1.6*5.7*Math.cos(0.024*time+1),0,1.6*2.9*Math.sin(0.024*time+1));

jupiter.planeta.rotation.z += 0.001;
jupiter.planeta.position.set(1.8*5.7*Math.cos(0.013*time+2),0,1.8*2.9*Math.sin(0.013*time+2));

saturno.planeta.rotation.z += 0.001;
saturno.planeta.position.set(2*5.7*Math.cos(0.01*time+3),0,2*2.9*Math.sin(0.01*time+3));

urano.planeta.rotation.z += 0.001;
urano.planeta.position.set(2.2*5.7*Math.cos(0.007*time+4),0,2.2*2.9*Math.sin(0.007*time+4));

neptuno.planeta.rotation.z += 0.001;
neptuno.planeta.position.set(2.4*5.7*Math.cos(0.005*time+5),0,2.4*2.9*Math.sin(0.005*time+5));

luna.planeta.rotation.z += 0.001;
luna.planeta.position.z=tierra.planeta.position.z+0.5;
luna.planeta.position.x=tierra.planeta.position.x+0.5;


time += 0.01;
  renderer.render( scene, camera );
};

render();