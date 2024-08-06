import { Product } from '@prisma/client'
import Link from 'next/link'
import { fetchProducts } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
    const products = await fetchProducts()
    console.log('🌟 products', (products as any)?.length)

    return (
        <div>
            <header>
                <div className="logo">CULTO APPAREL</div>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <div className="cart">
                    <Link href="/cart">🛒</Link>
                </div>
            </header>
            <main className="pt-20 px-4">
                <h1 className="text-3xl font-bold mb-6">Products page</h1>
                <ul className="space-y-4">
                    {products?.props.map((product: Product) => (
                        <li key={product.id} className="bg-white p-4 rounded-lg shadow">
                            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>

        </div>
    )
}