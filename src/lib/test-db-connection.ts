import prisma from "./db"

async function testDatabaseConnection() {
    try {
        const result = await prisma.product.findMany()
        console.log('Database connection successful:', result)
    } catch (error) {
        console.error('Database connection failed:', error)
    }
}

testDatabaseConnection()