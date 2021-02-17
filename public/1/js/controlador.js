/*global $ */
//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];

var getCategorias = function () {
	if (!localStorage.getItem('categorias')) {
		localStorage.setItem('categorias', JSON.stringify(categorias));
	}

	categorias = JSON.parse(localStorage.getItem('categorias'));

	console.log(categorias);
};

var loadSelectOptions = function () {
	let select = $('#categoria');

	categorias.forEach(categoria => {
		select.append(`<option value="${categoria.nombreCategoria}">${categoria.nombreCategoria}</option>`);
	});
};

var renderApplications = function () {
	let nombreCategoria = $('#categoria').val();
	let contenedor = $('#contenedorApps');
	let categoriaSeleccionada = categorias.filter(e => e.nombreCategoria === nombreCategoria);

	if(!categoriaSeleccionada.length) {
		categoriaSeleccionada = categorias;
	}
	let size = getCardSize();
	let cardCounter = 0;
	let deck = createDeck();
	contenedor.empty();
	categoriaSeleccionada.forEach((cat, ctIdx) => {
		cat.aplicaciones.forEach((app, appIdx) => {
			let card = 
			`<div class="card hover-card">
				<img src="${app.icono}" class="card-img-top card-img-custom" alt="">
				<div class="card-body">
			  		<h6 class="card-text"><b>${app.nombre}</b></h6>
					<p class="developer">${app.desarrollador}</p>
					<div>${getStars(app.calificacion)}</div>
					<h6>${app.precio < 0.5 ? 'FREE' : `$${app.precio.toFixed(2)}`}</h6>
				</div>
		  	</div>`;
			
			deck.innerHTML += card;

			cardCounter++;
			let last = categoriaSeleccionada.length === ctIdx + 1 && cat.aplicaciones.length === appIdx + 1;
			if(last) {
				while(cardCounter < size) {
					deck.innerHTML += '<div class="card invisible-card"></div>'
					cardCounter++;
				}
			}
			if(cardCounter === size || last) {
				contenedor.append(deck);
				deck = createDeck();
				cardCounter = 0;
			}
		});
	});
};

var getStars = function (cantidad) {
	let limit = 5;
	let stars = '';

	for (let index = 1; index <= limit; index++) {
		stars += index <= cantidad ? '<i class="fas fa-star main-star"></i>' : '<i class="far fa-star main-star"></i>';
	}
	
	return stars;
};

var getCardSize = function () {
	let width = window.innerWidth;

	return width >= 992 ? 6 : width >= 768 ? 4 : 2;
};

var createDeck = function () {
	let el = document.createElement('div');
	el.className = 'card-deck custom-flex-container';
	return el;
};

window.addEventListener('resize', renderApplications);

(() => {
	//Este arreglo es para generar textos de prueba
	let textosDePrueba = [
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		'Quos numquam neque animi ex facilis nesciunt enim id molestiae.',
		'Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?',
		'Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.',
		'Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum.'
	];

	let aleatorio = function (minimo = 0, maximo = 3, decimales = 2) {
		var precision = Math.pow(10, decimales);
		minimo = minimo*precision;
		maximo = maximo*precision;
		
		return Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
	}

	//Genera dinamicamente los JSON de prueba para esta evaluacion,
	//Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria


	let contador = 1;
	for (let i = 0; i < 5; i++) { //Generar 5 categorias
		let categoria = {
			nombreCategoria: 'Categoria ' + i,
			descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
			aplicaciones: []
		};
		for (let j = 0; j < 10; j++) { //Generar 10 apps por categoria
			let aplicacion = {
				codigo: contador,
				nombre: 'App ' + contador,
				descripcion: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
				icono: `img/app-icons/${contador}.webp`,
				instalada: contador % 3 == 0 ? true : false,
				app: 'app/demo.apk',
				precio: aleatorio(),
				calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
				descargas: 1000,
				desarrollador: `Desarrollador ${(i+1)*(j+1)}`,
				imagenes: [ 'img/app-screenshots/1.webp', 'img/app-screenshots/2.webp', 'img/app-screenshots/3.webp' ],
				comentarios: [ {
					comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
					calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
					fecha: '12/12/2012',
					usuario: 'Juan'
				},
				{
					comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
					calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
					fecha: '12/12/2012',
					usuario: 'Pedro'
				},
				{
					comentario: textosDePrueba[Math.floor(Math.random() * (5 - 1))],
					calificacion: Math.floor(Math.random() * (5 - 1)) + 1,
					fecha: '12/12/2012',
					usuario: 'Maria'
				},
				]
			};
			contador++;
			categoria.aplicaciones.push(aplicacion);
		}
		categorias.push(categoria);
	}

	getCategorias();
	loadSelectOptions();
	renderApplications();
	
	console.log(categorias);
})();