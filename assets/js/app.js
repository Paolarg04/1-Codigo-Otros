const baseEndpoint = 'https://api.github.com'; // almaena la url de la api de github
const usersEndpoint = `${baseEndpoint}/users`; //concatena la api de github el /user es para entra a la api dentro de la pag de github
const n = document.querySelector('.name'); //llama clase en html (a estas variables se les elimina el signo $ por buena practica)
const b = document.querySelector('.blog'); //se cambia nombre de variable conforme a clase en html 
const l = document.querySelector('.location'); //variable correcta, se crea clase en html


async function displayUser(username) { //funcion displayUser que recibe nombre de usuario
  n.textContent = 'cargando...'; //solicitud para cambiar texto de variable
  const response = await fetch (`${usersEndpoint}/${username}`); //se hace una solicitud para obtener informacion del usuario, con el nombre de usuario especificado
  const data = await response.json (); //data se utiliza para guardar la informacion que recaba del fetch y lo convierte a json en otras palabras se utiliza para la espera de la respuesta de la pagina para que el proceso pueda continuar
  console.log(data); //imprime response como objeto json
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) { 
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}` //se cambian las comillas dobles por backtics, las cuales se utilizan para icorporar variables y texto
}

displayUser('stolinski').catch(handleError); //se llaman las 2 funciones, en caso que no funcione se despliega el error


// Este código recupera información de un usuario de GitHub y la muestra en una página. Si hay algún problema durante el proceso, se maneja y muestra un mensaje de error.
