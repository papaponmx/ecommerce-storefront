import { GetServerSideProps } from 'next'
import { PrismaClient, Product } from '@prisma/client'
import prisma from '@/lib/db'
import Link from 'next/link'



export async function fetchProducts() {
    try {
        console.log('🚪 fetching products', prisma)
        const products = await prisma.product.findMany()
        console.log('🔥 products', products)
        return { props: products }
    } catch (error) {
        console.log('🖼️ error', error)
        throw new Error('Failed to fetch products')
    }
}

export default async function ProductsPage() {

    const products = await fetchProducts()
    console.log('🌟 products', products)

    return (
        <main>
            <h1>Products page</h1>
            <ul>
                {products?.props.map((product: Product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}