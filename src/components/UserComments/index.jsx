import React from "react";

import { Img, Text } from "components";

const UserComments = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
          <div className="bg-light_blue-100 flex flex-col h-9 items-center justify-start mb-2 rounded-[50%] w-9">
            <Img
              className="h-9 md:h-auto rounded-[50%] w-9"
              alt="rectangle_Two"
              src={props?.avatar}
            />
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[94%] md:w-full">
            <div className="flex flex-row gap-4 items-start justify-start w-[100%] md:w-full">
              <Text
                className="text-gray-900 text-sm"
                size="10"
              >
                {props?.username}
              </Text>
              <Text
                className="mt-[3px] text-gray-500 text-xs"
                size="txtManropeRegular12Gray500"
              >
                {props?.commentDate}
              </Text>
            </div>
            <Text
              className="mt-[7px] text-gray-900 text-sm"
              size="txtLexendSemiBold14"
            >
              {props?.headline}
            </Text>
            <Text
              className="leading-[22.00px] mt-0.5 text-blue_gray-900 text-sm w-full"
              size="txtManropeRegular14Bluegray900"
            >
              {props?.content}
            </Text>
            <div className="flex flex-row items-center justify-start mt-3 w-[13%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_offer_gray_500.svg"
                alt="offer_One"
              />
              <Text
                className="ml-1 text-gray-500 text-sm"
                size="txtManropeRegular14Gray500"
              >
                {props?.likesCount}
              </Text>
              <Img
                className="h-4 ml-[21px] w-4"
                src="images/img_profile.svg"
                alt="profile"
              />
              <Text
                className="ml-1 text-gray-500 text-sm"
                size="txtManropeRegular14Gray500"
              >
                {props?.repliesCount}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserComments.defaultProps = {
  avatar: "images/img_rectangle_36x36.png",
  username: "Klara Weaver",
  commentDate: "10:50 AM",
  headline:
    "Nulla aute nisi quis nostrud reprehenderit nisi cillum mollit anim amet duis non esse.",
  content:
    "Eu laborum fugiat magna reprehenderit reprehenderit tempor aliquip nisi officia irure qui ad. Labore pariatur ex ut aliqua ad exercitation deserunt eu nisi do velit mollit consequat in quis. Adipisicing magna 🚀🚀🚀",
  likesCount: "3",
  repliesCount: "20",
};

export default UserComments;
