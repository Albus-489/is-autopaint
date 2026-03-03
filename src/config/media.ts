export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const CLOUD_NAME = 'is-autopaint-cloud';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1600/is-autopaint`;

export const MEDIA = {
  hero: {
    main: `${BASE_URL}/hero/hero-main.jpg`,
  },
  about: {
    workshop: `${BASE_URL}/about/workshop-interior.jpg`,
  },
  services: {
    painting: `${BASE_URL}/services/painting-booth.jpg`,
    bodyRepair: `${BASE_URL}/services/body-repair.jpg`,
    plasticRepair: `${BASE_URL}/services/plastic-repair.jpg`,
    rustProtection: `${BASE_URL}/services/rust-protection.jpg`,
  },
  gallery: [
    {
      id: 'body-repair-01',
      src: `${BASE_URL}/gallery/body-repair-01.jpg`,
      alt: 'Kolarivaurion korjaus',
    },
    {
      id: 'painting-01',
      src: `${BASE_URL}/gallery/painting-01.jpg`,
      alt: 'Maalaustyö uunissa',
    },
    {
      id: 'workshop-01',
      src: `${BASE_URL}/gallery/workshop-01.jpg`,
      alt: 'Korjaamon tilat',
    },
    {
      id: 'detailing-01',
      src: `${BASE_URL}/gallery/detailing-01.jpg`,
      alt: 'Viimeistely ja kiillotus',
    },
    {
      id: 'plastic-repair-01',
      src: `${BASE_URL}/gallery/plastic-repair-01.jpg`,
      alt: 'Puskurin korjaus',
    },
    {
      id: 'finish-01',
      src: `${BASE_URL}/gallery/finish-01.jpg`,
      alt: 'Valmis työn jälki',
    },
  ] as GalleryImage[],
};
