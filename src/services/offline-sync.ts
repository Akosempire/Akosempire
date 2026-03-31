export type SyncAction = {
  id: string;
  module: string;
  endpoint: string;
  method: "POST" | "PATCH" | "PUT" | "DELETE";
  payload: unknown;
  createdAt: string;
};

export const OfflineSyncService = {
  enqueue(action: SyncAction) {
    if (typeof window === "undefined") return;
    const queue = JSON.parse(localStorage.getItem("niso_sync_queue") ?? "[]") as SyncAction[];
    queue.push(action);
    localStorage.setItem("niso_sync_queue", JSON.stringify(queue));
  }
};
