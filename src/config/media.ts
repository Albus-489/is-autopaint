export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const BASE_PATH = '/media';

export const MEDIA = {
  hero: {
    main: `${BASE_PATH}/hero/hero-main.jpg`,
  },
  about: {
    workshop: `${BASE_PATH}/about/workshop-interior.jpg`,
  },
  services: {
    painting: `${BASE_PATH}/services/painting.jpg`,
    bodyRepair: `${BASE_PATH}/services/body-repair.jpg`,
    plasticRepair: `${BASE_PATH}/services/plastic-repair.jpg`,
    rustProtection: `${BASE_PATH}/services/rust-protection.jpg`,
  },
  gallery: [
    {
      id: 'work-01',
      src: `${BASE_PATH}/gallery/work-01.jpg`,
      alt: 'Kolarivaurion korjaus',
    },
    {
      id: 'work-02',
      src: `${BASE_PATH}/gallery/work-02.jpg`,
      alt: 'Maalaustyö',
    },
    {
      id: 'work-03',
      src: `${BASE_PATH}/gallery/work-03.jpg`,
      alt: 'Korjaamon tilat',
    },
    {
      id: 'work-04',
      src: `${BASE_PATH}/gallery/work-04.jpg`,
      alt: 'Viimeistely',
    },
    {
      id: 'work-05',
      src: `${BASE_PATH}/gallery/work-05.jpg`,
      alt: 'Puskurin korjaus',
    },
    {
      id: 'work-06',
      src: `${BASE_PATH}/gallery/work-06.jpg`,
      alt: 'Valmis työn jälki',
    },
  ] as GalleryImage[],
};
