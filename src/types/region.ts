export type Region = {
  name: string;
  id: string;
};
export type PayloadRegion = Omit<Region, "id">;
export type ListPayloadRegion = PayloadRegion[];
