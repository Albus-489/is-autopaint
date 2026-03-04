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
    video: `${BASE_PATH}/about/workshop-video.mp4`,
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
  ] as GalleryImage[],
  beforeAfter: [
    {
      id: 'case-01',
      before: `${BASE_PATH}/before-after/case-01-before.jpg`,
      after: `${BASE_PATH}/before-after/case-01-after.jpg`,
      title: '',
    },
    {
      id: 'case-02',
      before: `${BASE_PATH}/before-after/case-02-before.jpg`,
      after: `${BASE_PATH}/before-after/case-02-after.jpg`,
      title: '',
    }
  ],
};
