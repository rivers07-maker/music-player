axios.get('https://leonardoapi.onrender.com/songs')
  .then((res) => {
    console.log(res.data)
    res.data.songs.map((song) => {

      console.log(song)

      let li = document.createElement('li')

      li.innerHTML = `

          <img src="${song.path.front}">
          <h2>${song.title}</h2>
          <p>${song.author}</p>

      `
      li.addEventListener('click', () => {

        document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
      })

      document.getElementById('track-list').appendChild(li)

    })
  })


