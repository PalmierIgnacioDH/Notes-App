window.onload = () => { // window.onload para que el navegador primero cargue el html y dsps el script
    
    // traemos el formulario del DOM
    let formNuevaNota = document.querySelector('form.crear-nota');

    // guardamos los objetos notes del localStorage en nuestro arrayNotes, 
    //utilizamos ... (spread operator) para esparcir los objetos de nuestro array en el arrayNotes, 
    // y Utilizamos JSON.parse() para convertir nuestro array de obejtos(que viene como JSON) del localStorage en un array con objetos literales
    const arrayNotes = [...(JSON.parse(localStorage.getItem('notes')))];

    // traemos el contenedor para las notas
    const contNotas = document.getElementById('notes');

    // un cilco for para ir creando en el DOM las notas que esten guardadas en el arrayNotes que fueron traidas del localStorage
    for (let i = 0; i < arrayNotes.length; i++) {
        // de la propiedad innerHTML de nuetro contenedor notas, le agregamos las notas con una estructura HTML con los valores de cu de los atributos de cu de las notas
        contNotas.innerHTML += `
        <div class="note ${arrayNotes[i].category}" id="${arrayNotes[i].id}">
            <h4>${arrayNotes[i].title}</h4>
            <hr>
            <span>${arrayNotes[i].bodyNote}</span>
        </div>
        `
    }


    // cuando reciba un evento 'submit' que haga cierta lógica
    formNuevaNota.addEventListener('submit', (event)=>{

        // obtenemos los input y el select del formulario, es valido usar location.search con URLSearchParams para hacerlo de otra manera ;)
        // const title = document.querySelector('#title')
        const title = document.getElementById('title');
        const bodyNote = document.getElementById('body-note');
        const category = document.getElementById('category');

        // creamos la variable id para las notas
        let id;
        // con un if decimos que si el array esta vacio, el id es 0 y si no, es +1 de la ultima nota
        if(arrayNotes.length === 0){
            id = 0;
        }else{
            id = arrayNotes[arrayNotes.length-1].id + 1;
        }

        // creamos el objeto nota con sus valores, id, titulo, cuerpo y categoria
        const note = {
            id: id,
            title: title.value,
            bodyNote: bodyNote.value,
            category: category.value
        }

        // guardamos la nota en arrayNotes
        arrayNotes.push(note)

        // guardamos arrayNotes en la key notes, en localStorage, utilizamos JSON.Stringify ya que localSotrage guarda solo strings
        localStorage.setItem('notes', JSON.stringify(arrayNotes))      
    })

}