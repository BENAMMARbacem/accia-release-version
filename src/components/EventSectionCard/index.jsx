import { Button, Img, Text } from "components";
import PageTitle from "components/PageTitle";
import { useNavigate } from "react-router-dom";

export default function EventCardSection({eventId,eventTitle,eventImage,eventDate,eventStartTime,eventEndTime,eventLocation,eventDescription}) {
    const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4">
        <Img
          className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full h-[300px]"
          src={eventImage}
          alt="imageSixtyEight"
        />
        <Text
          size="txtManropeBold14"
          className="flex font-manrope  max-w-[1099px] mt-2 mx-auto md:px-5 w-full text-light_blue-900 text-lg"
        >
          {eventTitle}
        </Text>
      </div>

      <div className="flex md:flex-col flex-row font-manrope gap-3.5 items-center justify-center max-w-[1096px] mt-2 mx-auto md:px-5 w-full">
        <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[27%] md:w-full">
          <div className="flex flex-col gap-[11px] items-start justify-start w-full">
            <Text
              className="text-light_blue-900 text-sm"
              size="txtManropeBold14"
            >
              {eventDate}
            </Text>
            <div className="flex flex-row items-start justify-start w-[85%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_clock1.svg"
                alt="clockOne"
              />
              <Text
                className="ml-1 text-blue_gray-900 text-xs"
                size="txtManropeRegular12"
              >
                {eventStartTime} - {eventEndTime}
              </Text>
              <Img
                className="h-4 ml-[31px] w-4"
                src="images/img_clock1_blue_gray_500.svg"
                alt="clockOne_One"
              />
              <Text
                className="ml-1 text-blue_gray-900 text-xs"
                size="txtManropeRegular12"
              >
                {eventDate}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start w-[34%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_pin31_blue_gray_500_16x16.svg"
                alt="pinThirtyOne"
              />
              <Text
                className="ml-1 text-blue_gray-900 text-xs"
                size="txtManropeRegular12"
              >
                {eventLocation}
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[86px] w-[67%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[48%]">
                <Button
                  className="common-pointer border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[80px] rounded-[12px]"
                  onClick={() => navigate(`/singleeventpage/${eventId}`)}
                  leftIcon={
                    <Img
                      className="h-4 mb-px mr-1"
                      src="images/img_view.svg"
                      alt="View"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <div className="text-[11px] text-left">Voir plus</div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%]">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[82px] rounded-[12px]"
                  leftIcon={
                    <Img
                      className="h-4 mb-px mr-1"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  }
                  color="light_blue_900_01"
                  size="xs"
                  variant="fill"
                >
                  <div className="text-[11px] text-left">Reserver</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col gap-[9px] items-start justify-center p-4 rounded-lg">
          <Text className="text-light_blue-900 text-sm" size="txtManropeBold14">
            Details
          </Text>
          <Text
            className="leading-[20.00px] mb-1 text-blue_gray-900 text-xs w-full"
            size="txtManropeRegular12"
          >
            {eventDescription}
          
           
          </Text>
        </div>
      </div>
    </>
  );
}
