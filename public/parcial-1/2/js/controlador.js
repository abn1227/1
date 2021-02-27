/*global $ */
///-----------------------------------------------USUARIOS
var usuarios = [ {
	nombre: 'Pedro',
	apellido: 'Martinez',
	ordenes: [ {
		nombreProducto: 'Producto 1',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	},
	{
		nombreProducto: 'Producto 2',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	}
	]
},
{
	nombre: 'Juan',
	apellido: 'Perez',
	ordenes: [ {
		nombreProducto: 'Producto 3',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	},
	{
		nombreProducto: '',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	}
	]
},
{
	nombre: 'Maria',
	apellido: 'Rodriguez',
	ordenes: [ {
		nombreProducto: 'Producto 4',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	},
	{
		nombreProducto: 'Producto 1',
		descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
		cantidad: 2,
		precio: 49.99
	}
	]
}
];


///-----------------------------------------------CATEGORIAS
var categorias = [ {
	nombreCategoria: 'Farmacias',
	descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
	color: '#9482C4',
	icono: 'fab fa-angellist',
	empresas: [ {
		nombreEmpresa: 'Empresa 1',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 2',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 3',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	}
	]
},
{
	nombreCategoria: 'Restaurantes',
	descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
	color: '#9482C4',
	icono: 'fab fa-angellist',
	empresas: [ {
		nombreEmpresa: 'Empresa 1',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 2',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 3',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	}
	]
},
{
	nombreCategoria: 'Salud',
	descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
	color: '#9482C4',
	icono: 'fab fa-angellist',
	empresas: [ {
		nombreEmpresa: 'Empresa 1',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 2',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 3',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	}
	]
},
{
	nombreCategoria: 'Café',
	descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
	color: '#9482C4',
	icono: 'fab fa-angellist',
	empresas: [ {
		nombreEmpresa: 'Empresa 1',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 2',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 3',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	}
	]
},
{
	nombreCategoria: 'Bebidas',
	descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
	color: '#9482C4',
	icono: 'fab fa-angellist',
	empresas: [ {
		nombreEmpresa: 'Empresa 1',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 2',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	},
	{
		nombreEmpresa: 'Empresa 3',
		imagen: 'img/banner.jpg',
		productos: [ {
			nombreProducto: 'Producto 1',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 2',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 3',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		},
		{
			nombreProducto: 'Producto 4',
			descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!',
			precio: 49.99
		}
		]
	}
	]
}
];

var user;

let setLocalStorageItems = function () {
	if (!localStorage.getItem('categorias')) {
		localStorage.setItem('categorias', JSON.stringify(categorias));
	}

	if (!localStorage.getItem('usuarios')) {
		localStorage.setItem('usuarios', JSON.stringify(usuarios));
	}

	categorias = JSON.parse(localStorage.getItem('categorias'));
	usuarios = JSON.parse(localStorage.getItem('usuarios'));
};

let initializaElements = function () {
	loadDropdownValues();
	loadCategories();
};

let loadDropdownValues = function () {
	let dropdown = $('#dropdownContent');

	usuarios.forEach(user => {
		dropdown.append(`<a class="dropdown-item" href="#" onclick="setUser('${user.nombre} ${user.apellido}')">${user.nombre} ${user.apellido}</a>`);
	});
};

let setUser = function (completeName) {
	let names = completeName.split(' ');
	user = usuarios.find(user => user.nombre == names[0] && user.apellido == names[1]);

	let dropdownButton = $('#dropdownMenuButton');
	dropdownButton.empty();
	dropdownButton.append(`${user.nombre} ${user.apellido}`);
	cargarSaludo();
};

let cargarSaludo = function () {
	let divSaludo = $('#saludo');
	divSaludo.empty();
	divSaludo.append(`
		<p class='bold-text p-margin'><b>¡Hola, ${user.nombre}!</b></p>
		<p class='thin-text p-margin'>¿Qué necesitas?</p>`);
};

let loadCategories = function () {
	let cardsContainer = $('#cardsContainer');
	cardsContainer.empty();

	categorias.forEach(cat => {
		cardsContainer.append(`
			<div class="col12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mt-4">
				<div class="card" style="background-color: ${cat.color}">
					<i class="${cat.icono}" ></i>
					<div class="card-body">
  				  		<h4 class="card-title custom-card-text">${cat.nombreCategoria}</h4>
  				  		<p class="card-text custom-card-text">${cat.empresas.length} Comercios</p>
  					</div>
				</div>
			</div>
		`);
	});
};

let seeOrders = function () {
	console.log(user.ordenes);

	let modalContainer = $('#ordenes');
	modalContainer.empty();
	let modal = `
	<div class="modal" id="ordenesModal" tabindex="-1" role="dialog">
	    <div class="modal-dialog modal-lg" role="document">
	        <div class="modal-content">
				<div class="purple-background">
					<h2 class="modal-title navbar-brand config-white-text">${user.nombre}, estas son tus ordenes</h2>
	            </div>
	            <div class="modal-body">
					<div class="card" style="margin: 2%; border-radius: 7px;">
 						<ul class="list-group list-group-flush">
	                		${loadOrders(user.ordenes)}
						</ul>
					</div>
					<button type="button" class="btn search-custom-buttom radius-item" data-dismiss="modal" style="float: right;margin: 2%;width:200px">Cerrar</button>
	            </div>
	        </div>
	    </div>
	</div>`;
	modalContainer.append(modal);
	$('#ordenesModal').modal('show');
};

let loadOrders = function (orders) {
	let ordersText = '';
	orders.forEach(order => {
		ordersText += `
			<li class="list-group-item">
				<div class="config-text">${order.nombreProducto}</div>
				<div class="config-gray-text">${order.descripcion}</div>
				<div class="price-text">$${order.cantidad * order.precio}</div>
			</li>`;
	});

	return ordersText;
};

setLocalStorageItems();
initializaElements();
setUser(`${usuarios[0].nombre} ${usuarios[0].apellido}`);