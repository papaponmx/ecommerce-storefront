import { GetServerSideProps } from 'next'
import { Product } from '@prisma/client'
import prisma from '@/lib/db'
import Link from 'next/link'

async function fetchProducts() {
    try {
        const products = await prisma.product.findMany()
        console.log('🔥 Database connection successful:', products)

        return products
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch products')
    }
}


export const getServerSideProps: GetServerSideProps = async () => {
    const products = await fetchProducts()

    return {
        props: {
            products,
        },
    }
}

interface ProductsPageProps {
    products: Product[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
    console.log('🌟 Page Products:', products)
    return (
        <main>
            <h1>Products</h1>

            <ul>
                {products?.map((product: Product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}