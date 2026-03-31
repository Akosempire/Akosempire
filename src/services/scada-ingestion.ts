export type ScadaIngestionPayload = {
  mappingKey: string;
  value: number;
  timestamp: string;
};

export const ScadaIngestionService = {
  async ingest(payload: ScadaIngestionPayload) {
    // Placeholder for future SCADA integration.
    return { source: "SCADA", accepted: true, payload };
  }
};
