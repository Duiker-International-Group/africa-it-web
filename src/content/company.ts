// Single source of truth for contact details. Never hard-code these in pages.
export const COMPANY = {
  name: 'Africa IT Solutions',
  phoneDisplay: '+258 85 923 2670',
  phoneHref: 'tel:+258859232670',
  whatsappHref: 'https://wa.me/258859232670',
  emailSales: 'sales@africait.co.mz',
  emailStarlink: 'starlink@africait.co.mz',
  address: {
    pt: 'Av. Abel Baptista, esquina com a Av. Samora Machel, Talhão 374A, Loja 3, Maputo',
    en: 'Av. Abel Baptista, corner of Av. Samora Machel, Plot 374A, Shop 3, Maputo',
  },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Av. Abel Baptista & Av. Samora Machel, Maputo, Mozambique'),
  hours: {
    pt: [
      ['Segunda a sexta', '08:00 – 18:00'],
      ['Sábado', '09:00 – 13:00'],
      ['Domingo', 'Fechado'],
    ],
    en: [
      ['Monday to Friday', '08:00 – 18:00'],
      ['Saturday', '09:00 – 13:00'],
      ['Sunday', 'Closed'],
    ],
  },
} as const
