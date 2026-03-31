export type NotificationEventType =
  | "INTERRUPTION_OPENED"
  | "INTERRUPTION_CLOSED"
  | "HIGH_PRIORITY_MESSAGE"
  | "KNOWLEDGE_ARTICLE_PUBLISHED"
  | "OPERATION_APPROVED";

export const NotificationOrchestrator = {
  async dispatch(eventType: NotificationEventType, payload: Record<string, unknown>) {
    // Queue-ready orchestration hook; this can later route to workers, WhatsApp, SMS, Email, and in-app providers.
    return { accepted: true, eventType, payload };
  }
};
