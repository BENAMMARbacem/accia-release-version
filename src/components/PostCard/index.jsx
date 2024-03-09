import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const PostCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <Text className="text-gray-900 text-xs" size="txtManropeBold12">
                {props?.publisher}
              </Text>
              <Text
                className="text-[11px] text-gray-500"
                size="txtManropeRegular11Gray500"
              >
                {props?.publishDate}
              </Text>
            </div>

          </div>
          <Text
            className="leading-[20.00px] mt-[7px] text-gray-900 text-xs w-full"
            size="txtManropeRegular12Gray900"
          >
            {props?.content}
          </Text>
          <Img
            className="h-48 md:h-auto mt-3 object-cover rounded w-full"
            alt="imageTwentyTwo"
            src={props?.thumbnail}
          />
          <div className="flex flex-row items-start justify-between mt-[17px] w-full">
            { props?.showReadMore ? ( <Button
              className="common-pointer cursor-pointer font-manrope min-w-[134px] text-center text-xs"
              onClick={() => navigate("/singlepostpage")}
              shape="round"
              color="light_blue_900"
              size="sm"
              variant="fill"
            >
              {props?.readMoreButtonContent}
            </Button>):(
<></>            )}
            <div className=" flex flex-row">            <Img
              className="h-4  mt-0.5 w-4"
              src="images/img_sharenetwork1.svg"
              alt="sharenetworkOne"
            />
              <Text
                className="ml-[5px] mt-0.5 text-gray-500 text-xs"
                size="txtManropeRegular12Gray500"
              >
                {props?.views}
              </Text></div>

          </div>
        </div>
      </div>
    </>
  );
};

PostCard.defaultProps = {
  publisher: "Publisher",
  publishDate: "Mar 25, 2022",
  content:
    "le description de publicationt doint saisir ici",
  thumbnail: "images/img_image22.png",
  readMoreButtonContent: "Voir plus",
  views: "220",
};

export default PostCard;
