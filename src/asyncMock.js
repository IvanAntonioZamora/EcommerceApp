const products =[
    {
        id: '1',
        albumId: "1",
        title: "Greatest Hits I / Universal",
        artist: "Queen",
        genero: "ROCK CLÁSICO",
        description: "Greatest Hits es el primer álbum compilatorio de la banda de rock Queen, aparecido en 1981. En él se reúnen los éxitos de la banda entre 1973 y 1981. Llama la atención que la banda haya marginado a su disco debut de la lista de temas del álbum, esto probablemente se haya debido a que “Queen I” no logró ningún gran hit comercial al margen de los temas considerados como clásicos por los fanes, como “Keep Yourself Alive” o “Liar”.",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 1,150.00",
        price2: "1150",
        stock: "3"
      },
      {
        id: '2',
        albumId: "1",
        title: "Starboy",
        artist: "Weeknd",
        genero: "POP",
        description: "Lanzamiento de 2016, el tercer álbum de estudio del cantante y compositor canadiense The Weeknd. El álbum presenta contribuciones invitadas de los músicos Daft Punk, la cantante Lana Del Rey y los raperos Future y Kendrick Lamar. El álbum cuenta con el apoyo de la canción principal / sencillo principal “Starboy”. - La portada del álbum está fotografiada y diseñada por Nabil Elderkin.",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 920.00",
        price2: "920",
        stock: "5"
      },
      {
        id: '3',
        albumId: "1",
        title: "Live And Dangerous",
        artist: "Thin Lizzy",
        genero: "ROCK PESADO",
        description: "Thin Lizzy /Live And Dangerous",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 950.00",
        price2: "950",
        stock: "4"
      },
      {
        id: '4',
        albumId: "1",
        title: "Nevermind / 30th Anniversary",
        artist: "Nirvana",
        genero: "ALTERNATIVO & INDIE",
        description: "Edición Limitada del 20 aniversario del Nevermind de Nirvana. Nevermind es el segundo álbum de estudio de la banda de rock estadounidense Nirvana, lanzado el 24 de septiembre de 1991 por DGC Records. Producido por Butch Vig, fue el primer lanzamiento de Nirvana en el sello DGC, así como el primero en contar con el baterista Dave Grohl.",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 1,100.00",
        price2: "1100",
        stock: "2"
      },
      {
        id: '5',
        albumId: "1",
        title: "En El Palacio de Bellas Artes",
        artist: "Juan Gabriel",
        genero: "EN ESPAÑOL",
        description: "Juan Gabriel en el Palacio de Bellas Artes.",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 920.00",
        price2: "920",
        stock: "3"
      },
      {
        id: '6',
        albumId: "1",
        title: "The Best of Bob Marley",
        artist: "Bob Marley",
        genero: "REGGAE",
        description: "Bob Marley / The Best of Bob Marley",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "$ 620.00",
        price2: "620",
        stock: "1"
      },
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductByCategory = (categoryId) =>{
  return new Promise((resolve) => {
      setTimeout(()=>{
          resolve(products.filter(prod => prod.genero === categoryId))
      }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 500)
  })
}