import { StaticImageData } from 'next/image';

export type ArticleProps = {
  title: string;
  description: string;
  name: string;
  createdAt: Date;
  dateType: string;
  Image: StaticImageData | string;
};
