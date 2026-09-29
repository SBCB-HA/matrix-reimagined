export interface EcosystemItem {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface NewsItem {
  date: string;
  title: string;
  featured?: boolean;
}

export interface CompanyItem {
  name: string;
  field: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}