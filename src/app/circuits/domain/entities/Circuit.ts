interface CircuitConstructor {
  id: string;
  name: string;
  nameUrl: string;
  provinceId: string;
  address: string;
  location: {
    lat: string;
    lng: string;
  };
  images: string[];
  description?: string;
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
  readonly nameUrl: string;
  readonly provinceId: string;
  readonly address: string;
  readonly location: {
    lat: string;
    lng: string;
  };
  readonly images: string[];
  readonly description?: string;
  readonly website?: string;
  readonly price?: {
    half?: number;
    complete?: number;
  };
  readonly social?: {
    instagram?: string;
    facebook?: string;
  };
  readonly distance?: number;
  readonly width?: number;
  readonly settings?: {
    160?: string;
    190?: string;
  };

  constructor(circuit: CircuitConstructor) {
    this.id = circuit.id;
    this.name = circuit.name;
    this.nameUrl = circuit.nameUrl;
    this.provinceId = circuit.provinceId;
    this.address = circuit.address;
    this.location = circuit.location;
    this.images = circuit.images;
    this.description = circuit.description;
    this.website = circuit.website;
    this.price = circuit.price;
    this.social = circuit.social;
    this.distance = circuit.distance;
    this.width = circuit.width;
    this.settings = circuit.settings;
  }
}
