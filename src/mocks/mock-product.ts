// import { Product } from "@prisma/client";

// export const mockProduct: Product = {
// TODO: Add this to the  back end.
export const mockProduct = {
  id: '1',
  name: 'Training Sport Tee - Navy Blue',
  description: 'Training Sport Tee está diseñada con un largo perfecto y una terminación ondulada para que al momento de hacer ejercicio y levantar los brazos, tape por completo la parte de adelante y de atrás.',
  price: 750,
  imageUrl: '/images/training-sport-tee-navy.jpg',
  rating: 5,
  reviewCount: 138,
  stock: 50,
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
  brand: 'CULTO APPAREL',
  category: 'Sportswear',
  modelInfo: 'El modelo de las fotos mide 1.90 mts y está usando talla XL',
  paymentOptions: {
    installments: 12,
    provider: 'kueskipay'
  },
  createdAt: new Date('2023-01-01T00:00:00Z'),
  updatedAt: new Date('2023-06-15T12:30:00Z')
};
