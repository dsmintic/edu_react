import { AttendantsRequest, AttendantsResponse } from "../model/attendants";

export async function applyAttendants(request: AttendantsRequest): Promise<void> {
  await fetch("/api/attendants", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getAttendants(): Promise<AttendantsResponse[]> {
  const response = await fetch("/api/attendants");
  if (!response.ok) {
    throw new Error("Neš mi ne valja");
  }
  return response.json();
}
