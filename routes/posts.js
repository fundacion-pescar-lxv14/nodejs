/** Todas las Publicaciones | Aquella con el Id especificado */
app.get('/posts/:id?', (req, res) => {
const { id } = req.params 
!id ? res.json(posts) : // Todas las Publicaciones
res.json(posts.filter(p => p.postId === Number(id))) // Filtro de Publicacion
})

/** Publicaciones de la Categoria especificada | Implementacion de Consulta */
app.get('/posts/category/:category?', (req, res) => {
const { category } = req.params
const { min, max, author } = req.query
const filter = []
posts.map(post => post.categories.map(c => c === category ? 
    filter.push(post) : null
))
// Verificamos que se hayan enviado argumentos de busqueda
if (req.query.length != 0){
    // Filtramos por precio minimo y maximo
    if (min && max && author) res.json( filter.filter(p => 
    p.user === author &&
    p.price >= Number(min) &&
    p.price <= Number(max) 
    ))
    if (min && max) res.json( filter.filter(p => 
    p.price >= Number(min) &&
    p.price <= Number(max)
    ))
    if (min) res.json( filter.filter(p => p.price >= Number(min)))
    if (max) res.json( filter.filter(p => p.price <= Number(max)))
    // Filtramos por Autor
    if (author) res.json( filter.filter(p => p.user === author) )
}
else res.json(filter)
})
