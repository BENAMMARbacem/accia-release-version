
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import EventInfosBar from "components/EventInfosBar";
import PageTitle from "components/PageTitle";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SingleEventPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <Img
            className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
            src="images/img_image68_390x1099.png"
            alt="imageSixtyEight"
          />
          <EventInfosBar />
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
                Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
                sunt commodo anim minim laborum magna. Cillum amet id id cillum
                mollit magna incididunt culpa ea quis do consectetur
                reprehenderit ut elit.Dolore esse Lorem cupidatat deserunt
                ullamco ullamco dolor consequat veniam Lorem aliqua anim
                consectetur esse est eiusmod ad. Dolor nulla laborum laborum ut
                magna fugiat id aliqua mollit est velit incididunt eu eu fugiat
                fugiat. Sit irure Lorem ut aute pariatur magna. Quis ea ea non
                nostrud ex do cupidatat consectetur do labore mollit sunt
                voluptate. Consequat magna ad cupidatat occaecat est pariatur
                laboris commodo magna consectetur.Minim in eiusmod labori
              </Text>
            </div>

            <div className="flex flex-col gap-2">
              <Text
                className="md:ml-[0] ml-[193px] mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
                size="txtLexendBold29"
              >
                Thematique
              </Text>

              
              <Text
                className="leading-[22.00px] md:ml-[0] ml-[193px] mt-2 text-gray-900 text-sm w-[76%] sm:w-full"
                size="txtManropeRegular14"
              >
                Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
                sunt commodo anim minim laborum magna. Cillum amet id id cillum
                mollit magna incididunt culpa ea quis do consectetur
                reprehenderit ut elit.Dolore esse Lorem cupidatat deserunt
                ullamco ullamco dolor consequat veniam Lorem aliqua anim
                consectetur esse est eiusmod ad. Dolor nulla laborum laborum ut
                magna fugiat id aliqua mollit est velit incididunt eu eu fugiat
                fugiat. Sit irure Lorem ut aute pariatur magna. Quis ea ea non
                nostrud ex do cupidatat consectetur do labore mollit sunt
                voluptate. Consequat magna ad cupidatat occaecat est pariatur
                laboris commodo magna consectetur.Minim in eiusmod labori
              </Text>
            </div>

         <div className="flex flex-col gap-2">
         
        
              <div className="sm:grid sm:grid-cols-2 flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[213px] mt-7 md:px-5 w-[41%] md:w-full">
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_82x82.png"
                  alt="imageSixtyNine"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_5.png"
                  alt="imageSixtyNine_One"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image69.png"
                  alt="imageSixtyNine_Two"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_6.png"
                  alt="imageSixtyNine_Three"
                />
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
