var main = document.getElementById('main');
var lista = document.getElementById('lista');
var anadir = document.getElementById('anadir');
//contenedor de la lista
var contenedor = document.createElement('div');
contenedor.classList.add('cont');

//input tipo text
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Añadir una lista...';
input.setAttribute('id', 'oculto');

//boton guardar
var guardar = document.createElement('input');
guardar.type = 'button';
guardar.value = 'Guardar';
guardar.classList.add('guardar');

//boton cancelar
var cancel = document.createElement('span');
cancel.classList.add('icon-cancel');

//estilo tarjeta
var txtSave = document.createElement('div');
txtSave.classList.add('txtSave');
var input2 = document.createElement('p');
var tarjeta = document.createElement('span');
var txtTarjeta = document.createTextNode('Añadir una tarjeta...');
tarjeta.setAttribute('id', 'txt-tarjeta');
input2.setAttribute('id', 'txt');
var spanPunto = document.createElement('span');
var puntito = document.createTextNode('...');
spanPunto.setAttribute('id', 'puntitos');


//añadir un cuadro para agregar listas
anadir.addEventListener('click', function () {

  //ocultar span añadir
  main.removeChild(lista);

  contenedor.appendChild(input);
  contenedor.appendChild(guardar);
  contenedor.appendChild(cancel);
  main.appendChild(contenedor);

  contenedor.style.float = 'left';
  document.getElementById('oculto').value = '';

})

//evento para eliminar contenedor de lista
cancel.addEventListener('click', function () {
  main.removeChild(contenedor);

  main.appendChild(lista);
})

//evento para guardar lista 
guardar.addEventListener('click', function () {




  var txtInput = document.createTextNode(document.getElementById('oculto').value);


  tarjeta.appendChild(txtTarjeta);
  spanPunto.appendChild(puntito);
  input2.appendChild(txtInput);
  txtSave.appendChild(input2);
  txtSave.appendChild(spanPunto);
  txtSave.appendChild(tarjeta);

  main.removeChild(contenedor);
  main.appendChild(txtSave);

  anadir.style.float = 'left';

  main.appendChild(lista);
  lista.style.marginLeft = '10px';


})


function test() {
  //elemento textarea
  var txtArea = createElement('input');
  txtArea.type = 'textarea';
  var btnArea = createElement('input');
  btnArea.type = 'button';
  btnArea.value = 'Añadir';

  txtSave.removeChild(tarjeta);
  txtSave.appendChild(txtArea);
  txtSave.appendChild(btnArea);
  txtSave.appendChild(cancel);
}

txtSave.setAttribute('onclick', 'test()');
