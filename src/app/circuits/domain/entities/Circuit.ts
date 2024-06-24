interface CircuitConstructor {
  id: string;
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

export class Circuit {
  readonly id: string;
  readonly name: string;
  readonly provinceId: string;
  readonly address: string;
  readonly location: {
    lat: string;
    lng: string;
  };
  readonly images: string[];
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

  constructor(circuit: CircuitConstructor) {
    this.id = circuit.id;
    this.name = circuit.name;
    this.provinceId = circuit.provinceId;
    this.address = circuit.address;
    this.location = circuit.location;
    this.images = circuit.images;
    this.website = circuit.website;
    this.price = circuit.price;
    this.social = circuit.social;
    this.distance = circuit.distance;
    this.width = circuit.width;
    this.settings = circuit.settings;
  }
}
