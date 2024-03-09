import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import InputField from "components/InputField";
import InputMessageFiels from "components/InputMessageFiels";
import PostCard from "components/PostCard";
import RapportCard from "components/RapportCard";
import Features from "components/Features";
import TextComponent from "components/TextComponent";

const Home1Page = () => {
  const navigate = useNavigate();

  const rapportCardPropList = [
    {},
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
    { rapportImage: "images/img_image34_3.png" },
  ];
  const postCardPropList = [
    {},
    { thumbnail: "images/img_image22_192x291.png" ,showReadMore : false},
    { thumbnail: "images/img_image22_1.png" },
  ];
  const inputFieldPropList = [
    {},
    { placeholder: "Votre Prenom", label: "Prenom" },
    {
      icon: "images/img_lock_gray_900.svg",
      label: "Email",
      placeholder: "Votre Email",
    },
    {
      icon: "images/img_call_gray_900.svg",
      label: "Telephone",
      placeholder: "+216 ",
    },
  ];

  return (

    // bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full
    <>
      {/* <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full"> */}
      <div className="flex flex-col justify-end w-full">

        <div className="font-manrope h-[559px] md:px-5 relative w-full">

          <div className="">
            <div className="absolute h-[600px] inset-[0] justify-center mt-0 w-full">
              <Img
                className="h-[560px] m-auto object-cover w-full"
                src="images/img_image169.png"
                alt="image169"
              />
              <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[93%]">
                <Button
                  className="flex h-11 items-center justify-center rounded-sm w-11"
                  shape="round"
                  color="light_blue_200"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowleft_teal_900.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="flex h-11 items-center justify-center rounded-sm w-11"
                  shape="round"
                  color="light_blue_200"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowleft_teal_900.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-end md:ml-[0] ml-[3px] p-[70px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[43px] items-start justify-start max-w-[1191px] mt-[0px] w-full">
            <div className="flex md:flex-1 flex-col gap-[41px] items-start justify-start w-[76%] md:w-full">
              <Text
                className="leading-[50.00px] text-5xl sm:text-[38px] md:text-[44px] text-light_blue-900_01 w-full"
                size="txtLexendBold48"
              >
                <>
                  ACCIA est la 1ére organisation à but non lucratif en Tunisie
                  dédiée à l&#39;audit financier.
                </>
              </Text>
              <Button
                className="common-pointer cursor-pointer font-manrope min-w-[192px] rounded-lg shadow-bs4 text-center text-lg"
                onClick={() => navigate("/membership")}
                color="light_blue_900"
                size="md"
                variant="fill"
              >
                Joindre ACCIA
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[212px] sm:h-auto object-cover rounded-[3px] w-[21%] md:w-full"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
          </div>
        </div>
        <div className="ml-9 mr-9 ">
          <Features />
        </div>
        <div className="bg-gray-50 flex flex-col font-manrope items-center justify-end mt-8 md:px-10 sm:px-5 w-full ">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-8 mb-8 max-w-[1212px]  mx-auto w-full">
            <div className="flex flex-col items-start justify-start">

<TextComponent/>              <Text
                className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[35px] text-blue_gray-900 text-xl w-full"
                size="txtManropeRegular20"
              >
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum
                ad veniam cupidatat ullamco ullamco et. Aliqua tempor do
                consectetur reprehenderit Lorem aliqua commodo occaecat
                deserunt. Do eiusmod incididunt
              </Text>
              <Button
                className="common-pointer text-white border
                           border-deep_purple-A400 border-solid cursor-pointer 
                             min-w-[242px] md:ml-[0] ml-[3px] mt-7 rounded-lg text-center text-lg"
                onClick={() => navigate("/about")}
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                Voir plus              </Button>
            </div>
            <Img
              className="h-[344px] md:h-auto object-cover rounded-lg"
              src="images/img_image199.png"
              alt="image199"
            />
          </div>
        </div>
        <TextComponent />
        {/* font-lexend gap-9  sm:grid-cols-1
                       md:grid-cols-2 grid-cols-4 justify-center max-w-[1228px] 
                       mt-[34px] mx-auto md:px-5 w-full */}
        <List
          className="grid lg:grid-cols-2 lg:gap-y-1 gap-x-4 lg:gap-x-1 grid-cols-4 mx-auto mt-4"
          orientation="horizontal"
        >
          {rapportCardPropList.map((props, index) => (
            <React.Fragment key={`RapportCard${index}`}>
              <RapportCard
                className="bg-gray-50_01 flex flex-1 flex-col items-center justify-end p-[9px] rounded w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        <div className="flex md:flex-col flex-row font-manrope gap-[27px]
                          items-center justify-start md:ml-[0] ml-[134px]
                           mr-[911px] mt-9 md:px-5 w-[28%] md:w-full">
          <Button
            className="common-pointer cursor-pointer min-w-[138px] rounded-lg text-center text-sm"
            onClick={() => navigate("/rapportpage")}
            color="light_blue_900"
            size="sm"
            variant="fill"
          >
            Voir plus
          </Button>
        </div>
       {/* TODO: //Gallerie here */}
<TextComponent/>
        <List
          className="grid lg:grid-cols-2 lg:gap-y-1 gap-x-4 lg:gap-x-1 grid-cols-4 mx-auto mt-4"
          orientation="horizontal"
        >
          {postCardPropList.map((props, index) => (
            <React.Fragment key={`PostCard${index}`}>
              <PostCard 
                className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs2 w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        <div className="flex md:flex-col flex-row font-manrope gap-[27px]
                          items-center justify-start md:ml-[0] ml-[134px]
                           mr-[911px] mt-9 md:px-5 w-[28%] md:w-full">
          <Button
            className="common-pointer cursor-pointer min-w-[138px] rounded-lg text-center text-sm"
            onClick={() => navigate("/rapportpage")}
            color="light_blue_900"
            size="sm"
            variant="fill"
          >
            Voir plus
          </Button>
        </div>
        <Text
          className="md:ml-[0] ml-[122px] mr-[995px] mt-5 md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
          size="txtLexendBold32Lightblue900"
        >
          Conférence Annuelle{" "}
        </Text>
        <Img
          className="h-48 sm:h-auto md:ml-[0] ml-[122px] mr-[230px] mt-[29px] object-cover rounded-lg w-[76%] md:w-full"
          src="images/img_image68.png"
          alt="imageSixtyEight"
        />
        <Button
          className="common-pointer cursor-pointer font-manrope min-w-[138px] md:ml-[0] ml-[122px] mr-[1191px] mt-[43px] rounded-lg text-center text-sm"
          onClick={() => navigate("/eventspage")}
          color="light_blue_900"
          size="sm"
          variant="fill"
        >
          Voir plus
        </Button>
        <div className="bg-light_blue-900_01 flex flex-col font-lexend items-center justify-end ml-1 md:ml-[0] mt-[18px] p-[52px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1194px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-3.5 w-[39%] md:w-full">
              <Text
                className="ml-2.5 md:ml-[0] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                size="txtLexendBold52WhiteA700"
              >
                Partenaires
              </Text>
              <div className="flex flex-col font-manrope gap-6 items-start justify-start ml-2.5 md:ml-[0] w-[98%] md:w-full">
                <Text
                  className="leading-[26.00px] text-base text-white-A700 w-full"
                  size="txtManropeRegular16"
                >
                  Incididunt ex irure ad non Lorem culpa fugiat exercitation
                  ullamco esse minim tempor quis l
                </Text>
               
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <div className="gap-1 sm:gap-5 grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_82x82.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_5.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_6.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_7.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_8.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_9.png"
                    alt="imageTwentyTwo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       <TextComponent title="Contacter Nous" />
        <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start max-w-[1197px] mt-8 mx-auto p-4 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-3 justify-start mb-[22px] mt-0.5 w-[95%] md:w-full">
            <Text
              className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
              size="txtManropeBold24"
            >
              Address
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="h-8 md:mt-0 mt-1.5 w-8"
                src="images/img_pin31.svg"
                alt="pinThirtyOne"
              />
              <Text
                className="ml-1.5 md:ml-[0] md:mt-0 mt-[9px] text-blue_gray-900 text-xl"
                size="txtManropeRegular20"
              >
                15 Av. Jean Jaurès, Tunis 1002
              </Text>
              <Img
                className="h-8 md:ml-[0] ml-[94px] md:mt-0 mt-1.5 w-8"
                src="images/img_call.svg"
                alt="call"
              />
              <Text
                className="ml-1.5 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-xl"
                size="txtManropeRegular20"
              >
                +216 58 456 120
              </Text>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[335px] w-[17%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-[22px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-1.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  color="light_blue_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-left">Contacter Nous</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start max-w-[1197px] mt-9 mx-auto p-[17px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-8 items-end justify-start mb-6 w-[99%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                size="txtManropeBold24"
              >
                Formulaire de contact
              </Text>
              <div className="md:gap-5 gap-9 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {inputFieldPropList.map((props, index) => (
                  <React.Fragment key={`InputField${index}`}>
                    <InputField
                      className="bg-white-A700 flex flex-1 flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[11px] rounded w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
              <InputMessageFiels className="bg-white-A700 flex flex-col md:gap-10 gap-[69px] justify-end outline outline-[1px] outline-gray-500 rounded w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[122px] rounded-[22px]"
                leftIcon={
                  <Img
                    className="h-6 mb-px mr-1.5"
                    src="images/img_save.svg"
                    alt="save"
                  />
                }
                color="light_blue_900_01"
                size="md"
                variant="fill"
              >
                <div className="text-base text-left">Envoyer</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home1Page;
