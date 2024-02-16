// regresa un dato async promise
axios.get('https://leonardoapi.onrender.com/songs')

  // cuando se cumpla promise se ejecuta el then
  // cada funcion tipo flecha es un callback
  .then((res) => {


    // recorrer la lista de canciones con el metodo map
    // cada song es una cancion distinta en cada vuelta del bucle .map
    res.data.songs.map((song) => {

      // comienza la linea de ensamblaje
      // creamos el elemento
      let li = document.createElement('li')

      // Metemos el contenido
      // el contenido es dinamico
      li.innerHTML = `
          <img src="${song.path.front}">
          <h2>${song.title}</h2>
          <p>${song.author}</p>

      `

      // damos funcionalidad al elemento
      li.addEventListener('click', () => {

        // aqui adentro cambiamos la path del audio
        document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
        document.getElementById('current-song-img').setAttribute('src', song.path.front)
        document.getElementById('current-song-title').innerHTML = song.title

        const sonando = document.getElementsByClassName('sonando')
        if (sonando.length > 0) {
          sonando[0].classList.remove('sonando')
        }

        li.classList.add('sonando')
      })

      // metemos el elemento en el contenedor padre
      document.getElementById('track-list').appendChild(li)

    })
  })

