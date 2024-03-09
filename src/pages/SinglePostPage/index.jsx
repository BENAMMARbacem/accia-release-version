import { Img, Text } from "components";
import OwnerComment from "components/OwnerComment";
import ReturnButton from "components/ReturnButton";
import UserComments from "components/UserComments";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SinglePostPagePage = () => {
  return (
    <>
      <div className="flex flex-col font-lexend items-center justify-start mx-auto lg:mx-0 shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="">
            <Img
              className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
              src="images/img_image35.png"
              alt="imageThirtyFive"
            />
            <Text
              className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
              size="txtLexendSemiBold14"
            >
              Titre de publication
            </Text>
            <Text
              className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full text-gray-500 text-sm"
              size="txtManropeRegular14Gray500"
            >
              29/08/2022
            </Text>
            <Text
              className="leading-[22.00px] text-gray-900 text-sm flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full "
              size="txtManropeRegular14"
            >
              Incididunt occaecat sunt Lorem et eu aliqua minim pariatur velit.
              Do sunt pariatur velit elit dolore non ad officia nulla do ex sint
              consequat. Lorem adipisicing est cillum do anim ea do anim
              occaecat. Amet ad anim aute ut est amet cillum est deserunt qui
              non.Eiusmod ad sit adipisicing eu deserunt dolore mollit elit
              adipisicing aliqua et irure voluptate ullamco consectetur.
              Reprehenderit id eu id magna ex anim consectetur aute. Deserunt ad
              dolore nulla elit nisi nisi mollit et tempor tempor aliqua d
              consectetur. reprehenderit incididunt laboris Lorem irure
              cupidatat irure aute ut quis elit eiusmod velit reprehenderit ut.
              Ex ipsum culpa nisi amet do pariatur non amet labore.Non nulla
              irure voluptate laboris aute esse. Nulla irure exercitation quis
              dolore eiusmod ea labore. In minim ad occaecat elit mollit dolore
              exercitation mollit laborum. Ex mollit aliqua ad Lorem ad sunt
              fugiat cillum magna dolore sint ut nisi nisi veniam culpa.Dolore
              officia anim ea labore eu proident eiusmod laborum proident
              eiusmod in lab
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-5  max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2">
                <Img
                  className="h-7 w-7"
                  src="images/img_offer.svg"
                  alt="offer"
                />
                <Text
                  className="md:ml-[0] ml-[3px] md:mt-0 mt-1.5 text-light_blue-900 text-sm"
                  size="txtManropeRegular14Lightblue900"
                >
                  <>J&#39;aime</>
                </Text>
              </div>
              <div className="flex flex-row gap-2">
                <Img
                  className="h-7 md:ml-[0] ml-[17px] w-7"
                  src="images/img_share1.svg"
                  alt="shareOne"
                />
                <Text
                  className="md:ml-[0] ml-[3px] md:mt-0 mt-[7px] text-light_blue-900 text-sm"
                  size="txtManropeRegular14Lightblue900"
                >
                  Partager
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[193px] mr-[1162px] mt-[26px] text-gray-500 text-sm"
            size="txtManropeRegular14Gray500"
          >
            Commentaires
          </Text>
          <div className="flex flex-col font-manrope md:gap-5  max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
            <OwnerComment />
            <UserComments />
            <UserComments />
            <UserComments />
          </div>
        </div>
        <ReturnButton path="/" />
      </div>
    </>
  );
};

export default SinglePostPagePage;
