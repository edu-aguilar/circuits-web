export interface CircuitApi {
  _id: string;
  name: string;
  provinceId: string;
  address: string;
  location: {
    lat: string;
    lng: string;
  };
  images: string[];
  website?: string;
  price?: {
    half?: number;
    complete?: number;
  };
  social?: {
    instagram?: string;
    facebook?: string;
  };
  distance?: number;
  width?: number;
  settings?: {
    160?: string;
    190?: string;
  };
}
