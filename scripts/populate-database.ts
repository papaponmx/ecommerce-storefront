import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.product.create({
        data: {
            name: "Product 1",
            price: 1000,
            description: "This is product 1",
            imageUrl: "https://via.placeholder.com/150",
            stock: 10,
        },
    });

    const allProducts = await prisma.product.findMany();

    console.dir(allProducts, { depth: null });

}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });