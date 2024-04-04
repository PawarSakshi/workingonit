import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./personal.css";
function Personal() {
  return (
    <div>
      <div className="personal">
        <div className="tools">
          <div className="todo"></div>
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              // Example: custom event text color
            />
          </div>
        </div>
        <div className="chatbot"></div>
      </div>
    </div>
  );
}

export default Personal;
