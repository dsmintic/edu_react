import { Course } from "./courses";

export interface AttendantsRequest {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  courseId: string;
}

export interface AttendantsResponse {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  course: Course;
}
