import { useEffect, useState } from "react";
import { AttendantsResponse } from "../../model/attendants";
import { getAttendants } from "../../api/attendants";
import "./Attendants.css";
import { useErrorBoundary } from "react-error-boundary";

export default function Attendants() {
  const [attendants, setAttendants] = useState<AttendantsResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    getAttendants()
      .then((attendants) => {
        setAttendants(attendants);
        setLoading(false);
      })
      .catch((e) => showBoundary(e));
  }, [showBoundary]);

  if (loading) {
    return "Loading course data...";
  }

  return (
    <div className="Att">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>E-mail</th>
          <th>Message</th>
          <th>Course</th>
        </tr>
        {attendants.map((attendant) => (
          <AttendantRow attendant={attendant} key={attendant.id} />
        ))}
      </table>
    </div>
  );
}

interface AttendantRowProps {
  attendant: AttendantsResponse;
}

function AttendantRow({ attendant }: AttendantRowProps) {
  return (
    <tr>
      <td>{attendant.firstName}</td>
      <td>{attendant.lastName}</td>
      <td>{attendant.company}</td>
      <td>{attendant.email}</td>
      <td>{attendant.message}</td>
      <td>{attendant.course.title}</td>
    </tr>
  );
}
