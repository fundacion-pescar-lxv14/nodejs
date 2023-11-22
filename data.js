export const data = {
    nombre: "Pescar Shop",
    descripcion: "Tienda de articulos de todo tipo",
    version: "0.1.0",
    autor: "Pescar SA",
    menu: ["home", "posts", "profile"],
    social: [
        { link: "https://facebook.com", icon: "fa-facebook" },
        { link: "https://twitter.com", icon: "fa-twitter" },
        { link: "https://instagram.com", icon: "fa-instagram" },
    ],
}
export const user = {
    name: "Cristian",
    email: "Cristiandracedo@hotmail.com"
}
export const posts = {  
    title: 'Posts',
    description: 'All Posts',
    posts: [
        {
            title: "articulo 1",
            img: "ruta a la imagen",
            description: ["el1", "el2", "el3"],
            comments: [
            {author: "pepe", body: 'muy bueno'},
            {author: "pepe", body: 'muy bueno'},
            {author: "pepe", body: 'muy bueno'}
            ],
        },
        {
            title: "articulo 2",
            img: "ruta a la imagen",
            description: ["el1", "el2", "el3"],
            comments: [
                {author: "Tom", body: 'excelente'},
                {author: "Nemo", body: 'para sumergirme en el mar'},
                {author: "Dory", body: 'de maravilla'}
            ]
        }
    ]
}