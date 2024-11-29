import { AttendantsRequest } from "../model/attendants";

export async function applyAttendants(request: AttendantsRequest): Promise<void> {
  await fetch("/api/attendants", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
