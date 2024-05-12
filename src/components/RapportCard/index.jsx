import React from "react";

import { Img, Text } from "components";

const RapportCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mb-[7px] w-full md:w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-full md:w-full">
            <Img
              className="h-[26px] w-[26px]"
              alt="filepdfTwo"
              src="images/img_filepdf2.svg"
            />
            <Text
              className="mt-[3px] text-lg text-light_blue-900"
              size="txtLexendRegular18"
            >
              {props?.rapportTitle}
            </Text>
          </div>
          <div>
          <Img
            className="h-[212px] md:h-auto mt-[15px] object-cover rounded-[3px] w-full"
            alt="imageThirtyFour"
            src={props?.rapportImage}
          />
          </div>
        
          <div className=" grid grid-cols-2 items-center justify-start w-full mt-2">
           <div>
           <Text
              className="text-light_blue-900_9e text-xs"
              size="txtLexendRegular12"
            >
              {props?.publishDate}
            </Text>
           </div>
           <div className="flex flex-row gap-2 justify-end">
           <Img
              className="h-9 rounded w-9"
              src="images/img_button42.svg"
              alt="buttonFortyTwo"
            />
            <Img
              className="h-9 rounded w-9"
              src="images/img_download.svg"
              alt="download"
            />
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

RapportCard.defaultProps = {
  rapportTitle: "Titre de rapport",
  rapportImage: "images/img_image34_212x235.png",
  publishDate: "28/07/2022",
};

export default RapportCard;
