
/** Todos los usuarios | Aquel cuyo nombre sea el indicado */
app.get('/users/:username?', (req, res) => {
    const {username} = req.params
    const {email, name, phone } = req.query
    const filter = []
    // Filtro por Consulta
    if (req.query.length != 0){
      if (email) res.json(users.filter(u => u.email.toLowerCase() === email.toLowerCase()))
      if (name) {
        users.map( u => u.userData && u.userData.name.toLowerCase() === name.toLowerCase() ? filter.push(u) : null)
        res.json(filter)
      }
      if (phone) {
        users.map(u => {
          if (
            u.userData && 
            u.userData.phone && 
            u.userData.phone.toLowerCase() === phone.toLowerCase()
          ) filter.push(u)
        })
        res.json(filter)
      }
    }
    // Filtro por Nombre de usuario
    if (username) res.json(
      users.filter(u => u.username.toLowerCase() === username.toLowerCase())
    )
    // Todos los usuarios
    else res.json(users)
})