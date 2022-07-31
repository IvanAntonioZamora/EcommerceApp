const products =[
    {
        albumId: 1,
        id: 1,
        title: "Album",
        genero: "1",
        description: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        price: "1000",
        stock: "3"
      },
      {
        albumId: 1,
        id: 2,
        title: "Album",
        genero: "2",
        description: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
        price: "1000",
        stock: "10"
      },
      {
        albumId: 1,
        id: 3,
        title: "Album",
        genero: "3",
        description: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
        price: "1000",
        stock: "5"
      },
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    })
}