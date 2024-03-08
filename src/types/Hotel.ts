export interface ImageDetails {
  size: number;
  image: {
    width: number;
    height: number;
  };
}

export interface Image {
  url: string;
  details: ImageDetails;
  fileName: string;
  contentType: string;
}

export interface Price {
  value: string;
  symbol: string;
  currency: string;
}

export interface Hotel {
  name: string;
  description: string;
  images: Image;
  rating: number;
  price: Price;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
}
