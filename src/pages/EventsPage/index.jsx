import PageTitle from "components/PageTitle";
import EventCardSection from "components/EventSectionCard";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <div className="flex flex-col gap-4">
            <EventCardSection />
            <EventCardSection />
          </div>
        </div>
        <ReturnButton path="/home1" />
      </div>
    </>
  );
};

export default EventsPagePage;
