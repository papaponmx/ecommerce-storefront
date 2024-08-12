import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a brand
  const brand = await prisma.brand.create({
    data: {
      name: 'CULTO APPAREL',
    },
  });

  // Create a category
  const category = await prisma.category.create({
    data: {
      name: 'Sportswear',
    },
  });

  // Create a product
  const product = await prisma.product.create({
    data: {
      name: 'Training Sport Tee - Navy Blue',
      description: 'Training Sport Tee está diseñada con un largo perfecto y una terminación ondulada para que al momento de hacer ejercicio y levantar los brazos, tape por completo la parte de adelante y de atrás.',
      price: 750,
      imageUrl: '/images/training-sport-tee-navy.jpg',
      stock: 50,
      rating: 5,
      reviewCount: 138,
      features: [
        '93% Poliester y 7% Spandex.',
        'Tejido ultra elástico en 4 direcciones',
        'Fit ajustado en tronco superior',
        'Fit relajado en la zona del abdomen',
        'Tacto suave en el cuerpo',
        'Logotipo "High Density" con relieve al tacto'
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy Blue', 'Black', 'Gray'],
      modelInfo: 'El modelo de las fotos mide 1.90 mts y está usando talla XL',
      brandId: brand.id,
      categoryId: category.id,
    },
  });

  // Create payment options for the product
  await prisma.paymentOptions.create({
    data: {
      productId: product.id,
      installments: 12,
      provider: 'kueskipay',
    },
  });

  // Create product variants
  const variants = ['S', 'M', 'L', 'XL', 'XXL'].map(size => ({
    name: `Training Sport Tee - Navy Blue - ${size}`,
    price: 750,
    stock: 10,
    productId: product.id,
  }));

  await prisma.productVariant.createMany({
    data: variants,
  });

  // Fetch and log all products with their related data
  const allProducts = await prisma.product.findMany({
    include: {
      brand: true,
      category: true,
      variants: true,
      paymentOptions: true,
    },
  });

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
