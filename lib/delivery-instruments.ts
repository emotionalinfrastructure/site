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

// The framework modules ship with column architecture, not a pre-loaded requirement
// set: requirement text is drawn from the current authoritative source at the start of
// each engagement, because a cached copy of a moving regulatory target is a liability
// rather than an asset. The manifest names read as though the requirement text is
// already present, so the register publishes corrected names and states the position
// explicitly. Manifest inventory IDs are preserved so the record stays traceable.
export const instrumentNames: Record<string, string> = {
  "EI-INV-133": "EU AI Act obligation register",
  "EI-INV-134": "NIST AI RMF mapping register",
  "EI-INV-135": "ISO/IEC 42001 clause mapping register",
  "EI-INV-136": "IEEE 7014.1 requirement mapping register",
  "EI-INV-137": "C2PA provenance control mapping register"
};

export const structureOnlyNote =
  "Structure supplied. Requirement text is populated from the current authoritative source at the start of the engagement.";

export const structureOnlyIds = [
  "EI-INV-133",
  "EI-INV-134",
  "EI-INV-135",
  "EI-INV-136",
  "EI-INV-137",
  "EI-INV-138"
];

export function instrumentName(id: string, manifestName: string) {
  return instrumentNames[id] ?? manifestName;
}

export const registerFile = "EI_Delivery_Instrument_Register_v1_0.csv";
export const registerFileBytes = 64060;
export const registerFileSha256 = "312482ae1a410ba3f7451957b6b9abdb75ae814adc0b2bbf10d94bf1c267e0b6";
