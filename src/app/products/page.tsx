import { Product } from '@prisma/client'
import Link from 'next/link'
import { fetchProducts } from '@/lib/utils'

export const dynamic = 'force-dynamic'

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