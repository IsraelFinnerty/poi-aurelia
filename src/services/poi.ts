export interface Geodetic {
  lat: number;
  long: number;
}

export interface Pois {
  id: string;
  name: string;
  location: string;
  geo: Geodetic;
  website: string,
  description : string;
  imageMain :string;
  image1 : string;
  image2 : string;
  image3 : string;
}

export interface Category {
    id: string;
    category: string;
    pois: Array<Pois>;
}
