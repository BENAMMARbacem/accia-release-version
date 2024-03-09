import React from "react";

import { useNavigate } from "react-router-dom";

import PageTitle from "components/PageTitle";
import RapportCard from "components/RapportCard";
import SearchBar from "components/SearchBar";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LibraryPage = () => {
  const navigate = useNavigate();

  const categoryCardPropList = [
    { subhead: "21 Document", title: "Categorie 3" },
    { subhead: "1 Document", title: "Categorie 4" },
    { subhead: "1 Document", title: "Categorie 4" },
    { subhead: "1 Document", title: "Categorie 4" },
  ];
  const rapportCardPropList = [
    {},
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
    { rapportImage: "images/img_image34_1.png" },
    { rapportImage: "images/img_image34_2.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center  mt-[110px] mx-auto md:px-5 w-full" />
          {/* <div className=" border
                           border-gray-500 border-solid 
                         
                           bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto  max-w-[1099px] shadow-bs3 w-full
                            rounded-lg  ">
            
            <List
            className={"flex justify-center	"}
              orientation="horizontal"
            >
              {categoryCardPropList.map((props, index) => (
                <React.Fragment key={`CategoryCard${index}`}>
                  <CategoryCard
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div> */}

          <div className="font-lexend gap-32 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full">
            {rapportCardPropList.map((props, index) => (
              <React.Fragment key={`RapportCard${index}`}>
                <RapportCard
                  className="bg-gray-50_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1132px] mt-[67px] mx-auto md:px-5 w-full">


          </div>
        </div>
        <ReturnButton/>
      </div>
    </>
  );
};

export default LibraryPage;
