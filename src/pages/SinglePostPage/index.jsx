import { Img, Text } from "components";
import OwnerComment from "components/OwnerComment";
import ReturnButton from "components/ReturnButton";
import UserComments from "components/UserComments";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getpostById } from "utils/requests";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SinglePostPagePage = () => {
  let { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    getpostById(postId).then((post) => {
      setPost(post);
      setLoading(false);
      console.log(post);
      console.log(post);
    });
  }, []);

  return (
    <>
      {!loading ? (
        <div className="flex flex-col font-lexend items-center justify-start mx-auto lg:mx-0 shadow-bs3 w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="">
              <Img
                className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
                // src="images/img_image35.png"
                src={`../${post.thumbnail}`}
                alt="imageThirtyFive"
              />
              <Text
                className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
                size="txtLexendSemiBold14"
              >
                {post.publisher}
              </Text>
              <Text
                className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full text-gray-500 text-sm"
                size="txtManropeRegular14Gray500"
              >
                {post.publishDate}
              </Text>
              <Text
                className="leading-[22.00px] text-gray-900 text-sm flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full "
                size="txtManropeRegular14"
              >
                {post.content}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-manrope md:gap-5  max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                  <Img
                    className="h-7 w-7"
                    src="../images/img_offer.svg"
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
                    src="../images/img_share1.svg"
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
              {post.comments.map((props, index) => (
                <React.Fragment key={`PostCard${props.Id}`}>
                  <UserComments
                    username={props.username}
                    avatar={props.avatar}
                    content={props.text}
                    commentDate={props.commentDate}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <ReturnButton path="/" />
        </div>
      ) : (
        <div>loading ....</div>
      )}
    </>
  );
};

export default SinglePostPagePage;
