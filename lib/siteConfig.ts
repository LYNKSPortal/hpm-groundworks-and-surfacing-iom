export const siteConfig = {
  name:      process.env.NEXT_PUBLIC_BUSINESS_NAME    ?? 'HPM Groundworks & Surfacing LTD',
  url:       process.env.NEXT_PUBLIC_SITE_URL         ?? 'https://hpm.im',
  phone:     process.env.NEXT_PUBLIC_BUSINESS_PHONE   ?? '+44 7624 229993',
  phoneTel:  process.env.NEXT_PUBLIC_BUSINESS_PHONE_TEL ?? '+447624229993',
  email:     process.env.NEXT_PUBLIC_BUSINESS_EMAIL   ?? 'jaye@hpm.im',
  facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL     ?? 'https://www.facebook.com/highpressuremaintenance',
  address: {
    street:   process.env.NEXT_PUBLIC_ADDRESS_STREET  ?? '7 Brookfield Avenue',
    town:     process.env.NEXT_PUBLIC_ADDRESS_TOWN    ?? 'Ramsey',
    postcode: process.env.NEXT_PUBLIC_ADDRESS_POSTCODE ?? 'IM8 2AD',
    country:  process.env.NEXT_PUBLIC_ADDRESS_COUNTRY ?? 'Isle of Man',
    countryCode: 'IM',
    full:     `${process.env.NEXT_PUBLIC_ADDRESS_STREET ?? '7 Brookfield Avenue'}, ${process.env.NEXT_PUBLIC_ADDRESS_TOWN ?? 'Ramsey'}, ${process.env.NEXT_PUBLIC_ADDRESS_POSTCODE ?? 'IM8 2AD'}, ${process.env.NEXT_PUBLIC_ADDRESS_COUNTRY ?? 'Isle of Man'}`,
  },
  geo: {
    lat: process.env.NEXT_PUBLIC_GEO_LAT ?? '54.3244',
    lng: process.env.NEXT_PUBLIC_GEO_LNG ?? '-4.3864',
  },
};
