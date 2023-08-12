import { Service } from "../models/Service";

export const ServicePrices: Record<Service, number> = {
  Consultation: 500,
  XRay: 1000,
  RoutineCheckup: 300,
  CTScan: 2000,
};
