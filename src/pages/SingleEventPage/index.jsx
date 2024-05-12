
import { useNavigate, useParams } from "react-router-dom";

import { Img, Text } from "components";
import EventInfosBar from "components/EventInfosBar";
import PageTitle from "components/PageTitle";
import ReturnButton from "components/ReturnButton";
import { useEffect, useState } from "react";
import { getEventById } from "utils/requests";



const SingleEventPagePage = () => {
  const [event,setEvent] = useState(null);
  const {eventId} = useParams();
  useEffect(()=>{
    getEventById(eventId).then((data)=>{
      setEvent(data);
    })
  },[eventId])
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle title={event?.eventTitle}/>
          <Img
            className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full h-[200px]"
            src={event?.eventImage}
            alt="imageSixtyEight"
          />
          <EventInfosBar eventLocation={event?.eventLocation} eventDate={event?.eventDate} eventStartTime={event?.eventStartTime} eventEndTime={event?.eventEndTime} />
          <div className="flex flex-col font-lexend items-center justify-start mx-auto lg:mx-4 shadow-bs3 w-full">
            <div className="flex flex-col gap-2">
              <Text
                className="md:ml-[0] ml-[193px] mt-[77px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
                size="txtLexendBold29"
              >
                Details
              </Text>
              <Text
                className="leading-[22.00px] md:ml-[0] ml-[193px] mt-[11px] text-gray-900 text-sm w-[76%] sm:w-full"
                size="txtManropeRegular14"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </div>

           

         <div className="flex flex-col gap-2">
         
        
              <div className="sm:grid sm:grid-cols-2 flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[213px] mt-7 md:px-5 w-[41%] md:w-full">
               {event?.eventSponsor.map((sponsor)=>(

                <Img
                key={sponsor?.id}
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src={sponsor?.sponsorLogo}
                  alt={sponsor?.sponsorName}
                />
               ))}
              </div>
            </div>
          <ReturnButton />
          </div>

        </div>
      </div>
    </>
  );
};

export default SingleEventPagePage;
