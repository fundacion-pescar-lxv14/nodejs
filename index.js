import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

const products = [
    {
      
      postId: 1,
      postTitle: 'Teclado Mecanico Redragon',
      description: 'el mejor teclado que vas a encontrar con piezas intercambiables',
      product: 'teclado',
      categories: [ 'tecnologia', 'informatica' ],
      user: 'c215714n',
      stock: 20,
      price: 49999.99,
      date: "2023-10-23T20:05:08",
      postDate: "2023-10-25T19:57:13",
      comments: []
    },
    {
      
      postId: 2,
      postTitle: 'Taladro Percutor',
      description: 'taladro con multiples piezas intercambiables, potencia de 750W, 2 rotaciones, 10 velocidades y set de 150 piezas',
      product: 'taladro',
      categories: [ 'hogar', 'herramientas' ],
      user: 'c215714n',
      stock: 10,
      price: 85699.99,
      date: "2023-10-23T20:05:08",
      postDate: "2023-10-25T19:57:13",
      comments: []
    },
    {
      
      postId: 3,
      postTitle: 'Escritorio ergonomico Moderno para Oficina',
      description: 'Te duele la espalda, cansado de tener que levantarte para estirar las piernas cada 30 minutos, con este escritorio ideal para las dimensiones humanas, no tendras mas problemas',
      product: 'escritorio',
      categories: [ 'muebles', 'hogar' ],
      user: 'Antonette',
      stock: 10,
      price: 150839.99,
      date: "2023-10-23T20:05:08",
      postDate: "2023-10-25T19:57:13",
      comments: []
    },
    {
      
      postId: 4,
      postTitle: 'Samsung A34 256Gb con caja y accesorios',
      description: 'El telefono ideal para tu rutina, con 256Gb de almacenamiento, 8Gb de RAM, 4 camaras y una bateria de 5000mAh, no te quedes sin el tuyo',
      product: 'smartphone',
      categories: [ 'tecnologia', 'informatica' ],
      user: 'Samantha',
      stock: 2,
      price: 289999.99,
      date: "2023-10-23T20:05:08",
      postDate: "2023-10-25T19:57:13",
      comments: []
    },
    {
      
      user: 'c215714n',
      date: "2023-10-23T20:05:08",
      postTitle: 'Mouse ergonomico',
      description: 'cansado de los dolores de muñeca, no dejes que el uso de la computadora afecte tu vida cotidiana, adquiri este producto antes que se agote',
      stock: 250,
      price: 12499.99,
      postId: 5,
      postDate: "2023-10-25T19:57:13",
      categories: [ 'tecnologia', 'informatica' ],
      comments: []
    },
    {
      
      postTitle: 'Combo Computadora, Monitor teclado y Mouse',
      description: 'Gabinete Gamer Thermaltake Aht600 Snow Blanco Full Tower, procesador Ryzen 9 5900x AM4 12 Nucleos, 16Gb RAM DDR4 Fury Beast SSD 500GB HDD 4TB Western Digital',
      postId: 6,
      user: 'c215714n',
      postDate: "2023-10-25T19:57:13",
      price: 3976859.99,
      categories: [ 'tecnologia', 'computacion', 'pc', 'informatica' ],
      stock: 15,
      comments: []
    },
    {
      
      postTitle: "Monitor 65' 4K Full HD QLED",
      description: 'Televisor ideal para pasar una tarde en familiar y disfrutar con los que mas amas',
      price: 625000,
      stock: 300,
      user: 'Bret',
      postDate: "2023-10-27T18:10:42",
      categories: [ 'hogar', 'tecnologia', 'muebles' ],
      postId: 7,
      comments: []
    }
]
const users = [
    {
            username: 'cristian',
      email: 'cristiandracedo@ymail.com'
    },
    {
            username: 'Bret',
      email: 'Sincere@april.biz',
      userData: {
        name: 'Leanne Graham',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874'
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }
    },
    {
            username: 'Antonette',
      email: 'Shanna@melissa.tv',
      userData: {
        name: 'Ervin Howell',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771'
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      }
    },
    {
            username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      userData: {
        name: 'Patricia Lebsack',
        address: {
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          city: 'South Elvis',
          zipcode: '53919-4257'
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
          name: 'Robel-Corkery',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          bs: 'transition cutting-edge web services'
        }
      }
    },
    {
            username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      userData: {
        name: 'Chelsey Dietrich',
        address: {
          street: 'Skiles Walks',
          suite: 'Suite 351',
          city: 'Roscoeview',
          zipcode: '33263'
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
          name: 'Keebler LLC',
          catchPhrase: 'User-centric fault-tolerant solution',
          bs: 'revolutionize end-to-end systems'
        }
      }
    },
    {
            username: 'c215714n',
      email: 'cristiandracedo@hotmail.com',
      userData: {
        firstName: 'Cristian',
        lastName: 'Racedo',
        age: 33,
        gender: 'masculino',
        personalId: { type: 'DNI', number: '35336446' }
      }
    },
    {
            username: 'Samantha',
      email: 'Nathan@yesenia.net',
      userData: {
        name: 'Clementine Bauch',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157'
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      }
    }
]

// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

// Rutas de la API
app.get('/products/:category?/:id?', (req, res) => {
    const { id, category } = req.params;
    const filter = [];
    // Si Existe categoria (filtramos)
    products.map(product => 
        product.categories.map(c => 
        c === category  ? filter.push(product) : null )
    )
    // Si existe id (filtramos)
    const selected = filter.filter(product => product.postId === Number(id))
    // Mostramos todos los productos
    if(!id && !category) res.json(products)
    if(!id) res.json(filter)
    else res.json(selected)
})
app.get('/users', (req, res) => {
    res.json(users)
})
app.get('/users/:username', (req, res) => {
    account
    res.json(account)
})

app.listen(PORT, console.log(startMsg))