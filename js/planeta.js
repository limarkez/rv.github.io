// definir la clase planeta
function planeta (radio, imagen){

	//Atributos

	this.radio = radio;
	this.imagen = imagen;

	// construir el planeta

	var loader = new THREE.TextureLoader();
	var textura = loader.load(imagen);
	var material = new THREE.MeshPhongMaterial({map: textura})
	var geometria = new THREE.SphereGeometry( this.radio,50,50);
	this.planeta = new THREE.Mesh( geometria, material );
	}

function sol (radio, imagen){

	//Atributos

	this.radio = radio;
	this.imagen = imagen;

	// construir el planeta

	var loader = new THREE.TextureLoader();
	var textura = loader.load(imagen);
	var material = new THREE.MeshBasicMaterial({map: textura})
	var geometria = new THREE.SphereGeometry( this.radio,50,50);
	this.sol = new THREE.Mesh( geometria, material );
	}



