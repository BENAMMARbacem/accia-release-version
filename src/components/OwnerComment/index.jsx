import React from "react";

import { Img, Input, Text } from "components";

const OwnerComment = (props) => {
  return (
    <>
        <div className="flex flex-col justify-start mb-[33px] gap-4 w-full">
          <div className="flex flex-row gap-3 items-start justify-start w-[17%] md:w-full">
            <div className="bg-light_blue-100 flex flex-col h-9 items-center justify-start rounded-[50%] w-9">
              <Img
                className="h-9 md:h-auto rounded-[50%] w-9"
                alt="rectangle_One"
                src={props?.avatar}
              />
            </div>
            <Text
              className="text-gray-900 text-sm"
              size="10"
            >
              {props?.username}
            </Text>
          </div>
          <Input
            name="textareaThree"
            placeholder="Ajouter un commentaire"
            className="!placeholder:text-gray-500 !text-gray-500 font-manrope p-0 text-left text-sm w-full"
            wrapClassName="flex ml-12 md:ml-[0] outline outline-[1px] outline-gray-500 rounded w-[94%]"
            suffix={
              <div className="h-9 ml-[35px] w-9 bg-gray-50_02 rounded">
                <Img
                  className="h-9 rounded my-auto"
                  src="images/img_floatingicon.svg"
                  alt="floating_icon"
                />
              </div>
            }
            color="white_A700"
            size="xl"
            variant="fill"
          ></Input>
        </div>
    </>
  );
};

OwnerComment.defaultProps = {
  avatar: "images/img_rectangle.png",
  username: "User Name",
};

export default OwnerComment;
