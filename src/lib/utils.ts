import prisma from "./db"

export async function fetchProducts() {
  try {
    console.log('🚪 fetching products', prisma)
    const products = await prisma.product.findMany()
    console.log('🔥 products', products.length)
    return { props: products }
  } catch (error) {
    console.log('🖼️ error', error)
    throw new Error('Failed to fetch products')
  }
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
}
