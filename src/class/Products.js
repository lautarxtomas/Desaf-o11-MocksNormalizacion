const { faker } = require('@faker-js/faker');

class ContenedorProductos {

    async getRandom() {
        try {
            const productos = []

            for (let i = 0; i < 5; i++) {
                productos.push({
                    title: faker.commerce.productName(),
                    price: faker.commerce.price(),
                    thumbnail: faker.image.image()
                })
            }

            return productos
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorProductos;