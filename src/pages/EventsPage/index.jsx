import PageTitle from "components/PageTitle";
import EventCardSection from "components/EventSectionCard";
import ReturnButton from "components/ReturnButton";
import { useEffect, useState } from "react";
import { getAllEvents } from "utils/requests";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsPagePage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAllEvents().then((data) => {
      setEvents(data);
    });
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <EventCardSection
                key={event.id}
                eventId={event.id}
                eventTitle={event.eventTitle}
                eventLocation={event.eventLocation}
                eventDescription={event.eventDescription}
                eventImage={event.eventImage}
                eventDate={event.eventDate}
                eventStartTime={event.eventStartTime}
                eventEndTime={event.eventEndTime}
              />
            ))}
          </div>
        </div>
        <ReturnButton path="/home1" />
      </div>
    </>
  );
};

export default EventsPagePage;
