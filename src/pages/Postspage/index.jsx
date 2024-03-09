import React from "react";

import PageTitle from "components/PageTitle";
import PostCard from "components/PostCard";
import ReturnButton from "components/ReturnButton";
import SearchBar from "components/SearchBar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PostspagePage = () => {
  const postCardPropList = [
    { thumbnail: "images/img_image22_192x291.png",showReadMore : true },
    { thumbnail: "images/img_image22_2.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_1.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_3.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_4.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_3.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_4.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_3.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_4.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_3.png" ,showReadMore : true},
    { thumbnail: "images/img_image22_4.png" ,showReadMore : true},
  ];

  return (
    <>
      <div className=" flex flex-col font-lexend items-center justify-start mx-auto lg:mx-0 shadow-bs3 w-full">
      {/* bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full */}
        <div className="flex flex-col justify-start w-full">
          {/* <PageTitle className="font-lexend md:h-[162px] h-[66px] md:ml-[0] ml-[206px] mt-[97px] md:px-5 relative w-[26%]" /> */}

          <PageTitle />
          <SearchBar />
          <div className="font-manrope md:gap-5 gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1099px] min-h-[auto] mt-[34px] mx-auto md:px-5 w-full">
            {postCardPropList.map((props, index) => (
              <React.Fragment key={`PostCard${index}`}>
                <PostCard {...props} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <ReturnButton />
      </div>
    </>
  );
};

export default PostspagePage;
