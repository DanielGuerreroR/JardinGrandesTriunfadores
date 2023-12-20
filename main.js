const MenuBotton = document.querySelector(".menu-icon");
const MobileMenu = document.querySelector(".mobile-menu");

const GalZonVer = document.querySelector("#GaleriaZonaVerde");
const GalPeq = document.querySelector("#GaleriaPequeños");
const GalSal = document.querySelector("#GaleriaSalones");
const GalCom = document.querySelector("#GaleriaComun");

//memnu mobile
MenuBotton.addEventListener("click", toogleMobileMenu);

function toogleMobileMenu() {
	MobileMenu.classList.toggle("inactive");
}

//Función para cargar las imágenes
function cargarImagenesZonaVerde() {
	// 1. Utiliza fetch para obtener el contenido del archivo de texto que contiene los nombres de las imágenes.
	fetch("./assets/entregadefotografiasfinales/ZonaVerde/NombresZonaVerde.txt")
		// 2. Convierte la respuesta de la solicitud fetch a texto.
		.then((response) => response.text())
		// 3. Procesa el texto obtenido y maneja los nombres de las imágenes.
		.then((text) => {
			// 4. Divide el texto en líneas para obtener los nombres de las imágenes y almacénalos en un array.
			const nombresImagenes = text.split("\n");

			// 5. Itera sobre cada nombre de imagen obtenido.
			nombresImagenes.forEach((nombreImagen) => {
				// 6. Verifica si el nombre de la imagen no está vacío.
				if (nombreImagen.trim() !== "") {
					// 7. Crea un nuevo elemento div para contener cada imagen.
					const box = document.createElement("div");
					box.classList.add("box"); // Añade la clase "box" al div creado.

					// 8. Crea un elemento img para cada imagen.
					const img = document.createElement("img");
					// 9. Establece la ruta de la imagen mediante la concatenación de la ruta base y el nombre de la imagen obtenido del archivo de texto.
					img.src =
						"./assets/entregadefotografiasfinales/ZonaVerde/" +
						nombreImagen.trim();
					img.alt = "Imagen"; // Agrega un atributo "alt" para describir la imagen.

					// 10. Agrega la imagen recién creada al div contenedor creado anteriormente.
					box.appendChild(img);
					// 11. Agrega el div contenedor con la imagen al contenedor principal GalZonVer.
					GalZonVer.appendChild(box);
				}
			});
		})
		// 12. Maneja errores en caso de que la solicitud falle.
		.catch((error) => {
			console.error("Error al cargar las imágenes:", error);
		});
}

function cargarImagenesPequenos() {
	// 1. Utiliza fetch para obtener el contenido del archivo de texto que contiene los nombres de las imágenes.
	fetch(
		"./assets/entregadefotografiasfinales/LosMasPequenos/NombresPequenos.txt"
	)
		// 2. Convierte la respuesta de la solicitud fetch a texto.
		.then((response) => response.text())
		// 3. Procesa el texto obtenido y maneja los nombres de las imágenes.
		.then((text) => {
			// 4. Divide el texto en líneas para obtener los nombres de las imágenes y almacénalos en un array.
			const nombresImagenes = text.split("\n");

			// 5. Itera sobre cada nombre de imagen obtenido.
			nombresImagenes.forEach((nombreImagen) => {
				// 6. Verifica si el nombre de la imagen no está vacío.
				if (nombreImagen.trim() !== "") {
					// 7. Crea un nuevo elemento div para contener cada imagen.
					const box = document.createElement("div");
					box.classList.add("box"); // Añade la clase "box" al div creado.

					// 8. Crea un elemento img para cada imagen.
					const img = document.createElement("img");
					// 9. Establece la ruta de la imagen mediante la concatenación de la ruta base y el nombre de la imagen obtenido del archivo de texto.
					img.src =
						"./assets/entregadefotografiasfinales/LosMasPequenos/" +
						nombreImagen.trim();
					img.alt = "Imagen"; // Agrega un atributo "alt" para describir la imagen.

					// 10. Agrega la imagen recién creada al div contenedor creado anteriormente.
					box.appendChild(img);
					// 11. Agrega el div contenedor con la imagen al contenedor principal GalZonVer.
					GalPeq.appendChild(box);
				}
			});
		})
		// 12. Maneja errores en caso de que la solicitud falle.
		.catch((error) => {
			console.error("Error al cargar las imágenes:", error);
		});
}

function cargarImagenesSalones() {
	// 1. Utiliza fetch para obtener el contenido del archivo de texto que contiene los nombres de las imágenes.
	fetch("./assets/entregadefotografiasfinales/Salones/NombresSalones.txt")
		// 2. Convierte la respuesta de la solicitud fetch a texto.
		.then((response) => response.text())
		// 3. Procesa el texto obtenido y maneja los nombres de las imágenes.
		.then((text) => {
			// 4. Divide el texto en líneas para obtener los nombres de las imágenes y almacénalos en un array.
			const nombresImagenes = text.split("\n");

			// 5. Itera sobre cada nombre de imagen obtenido.
			nombresImagenes.forEach((nombreImagen) => {
				// 6. Verifica si el nombre de la imagen no está vacío.
				if (nombreImagen.trim() !== "") {
					// 7. Crea un nuevo elemento div para contener cada imagen.
					const box = document.createElement("div");
					box.classList.add("box"); // Añade la clase "box" al div creado.

					// 8. Crea un elemento img para cada imagen.
					const img = document.createElement("img");
					// 9. Establece la ruta de la imagen mediante la concatenación de la ruta base y el nombre de la imagen obtenido del archivo de texto.
					img.src =
						"./assets/entregadefotografiasfinales/Salones/" +
						nombreImagen.trim();
					img.alt = "Imagen"; // Agrega un atributo "alt" para describir la imagen.

					// 10. Agrega la imagen recién creada al div contenedor creado anteriormente.
					box.appendChild(img);
					// 11. Agrega el div contenedor con la imagen al contenedor principal GalZonVer.
					GalSal.appendChild(box);
				}
			});
		})
		// 12. Maneja errores en caso de que la solicitud falle.
		.catch((error) => {
			console.error("Error al cargar las imágenes:", error);
		});
}

function cargarImagenesComun() {
	// 1. Utiliza fetch para obtener el contenido del archivo de texto que contiene los nombres de las imágenes.
	fetch("./assets/entregadefotografiasfinales/ZonasComunes/NombresComun.txt")
		// 2. Convierte la respuesta de la solicitud fetch a texto.
		.then((response) => response.text())
		// 3. Procesa el texto obtenido y maneja los nombres de las imágenes.
		.then((text) => {
			// 4. Divide el texto en líneas para obtener los nombres de las imágenes y almacénalos en un array.
			const nombresImagenes = text.split("\n");

			// 5. Itera sobre cada nombre de imagen obtenido.
			nombresImagenes.forEach((nombreImagen) => {
				// 6. Verifica si el nombre de la imagen no está vacío.
				if (nombreImagen.trim() !== "") {
					// 7. Crea un nuevo elemento div para contener cada imagen.
					const box = document.createElement("div");
					box.classList.add("box"); // Añade la clase "box" al div creado.

					// 8. Crea un elemento img para cada imagen.
					const img = document.createElement("img");
					// 9. Establece la ruta de la imagen mediante la concatenación de la ruta base y el nombre de la imagen obtenido del archivo de texto.
					img.src =
						"./assets/entregadefotografiasfinales/ZonasComunes/" +
						nombreImagen.trim();
					img.alt = "Imagen"; // Agrega un atributo "alt" para describir la imagen.

					// 10. Agrega la imagen recién creada al div contenedor creado anteriormente.
					box.appendChild(img);
					// 11. Agrega el div contenedor con la imagen al contenedor principal GalZonVer.
					GalCom.appendChild(box);
				}
			});
		})
		// 12. Maneja errores en caso de que la solicitud falle.
		.catch((error) => {
			console.error("Error al cargar las imágenes:", error);
		});
}

// 13. Llama a la función cargarImagenesZonaVerde() cuando la ventana haya terminado de cargar.
window.onload = function () {
	cargarImagenesZonaVerde();
	cargarImagenesPequenos();
	cargarImagenesSalones();
	cargarImagenesComun();
};
