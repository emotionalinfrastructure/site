import register from "./delivery-instruments.json";

export type DeliveryInstrument = {
  id: string;
  name: string;
  type: string;
  format: string;
  purpose: string;
  phase: string;
  priority: string;
};

export type DeliveryCategory = {
  name: string;
  assets: DeliveryInstrument[];
};

export type DeliveryWorkstream = {
  slug: string;
  number: string;
  name: string;
  service: string;
  assetCount: number;
  categories: DeliveryCategory[];
};

export type DeliveryRegister = {
  registerVersion: string;
  recordedOn: string;
  assetCount: number;
  formats: { format: string; count: number }[];
  phases: { phase: string; count: number }[];
  workstreams: DeliveryWorkstream[];
};

// Recorded from the Emotional Infrastructure™ Services asset manifest (220 assets).
// The register lists what each engagement produces; the templates themselves are
// controlled delivery instruments and are not published on this site.
export const deliveryRegister = register as DeliveryRegister;

export const registerFile = "EI_Delivery_Instrument_Register_v1_0.csv";
export const registerFileBytes = 62704;
export const registerFileSha256 = "4e68346f8c72d3e57c8bc270d42c13eba13080eb2a23702e8aa25bce8a5a5605";
