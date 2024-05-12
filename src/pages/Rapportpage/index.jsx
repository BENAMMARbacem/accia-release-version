import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { List, Text } from "components";
import PageTitle from "components/PageTitle";
import RapportCard from "components/RapportCard";
import ReturnButton from "components/ReturnButton";
import { getAllRapports } from "utils/requests";



const RapportpagePage = () => {
  const navigate = useNavigate();

    const [rapports, setRapports] = useState([]);
    useEffect(() => {
      getAllRapports().then((res) => {
        setRapports(res);
        console.log(res);
      });
    }, []);
    
    const rapportsDocs = rapports.filter((rapport) => rapport.type === "rapport");
    const guidesDocs = rapports.filter((rapport) => rapport.type === "guide");
  

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle className="font-lexend md:h-[162px] h-[66px] md:ml-[0] ml-[206px] mt-[97px] md:px-5 relative w-[32%] sm:w-full" />
          <div className="">
            <div className="ml-3">
              <Text
                className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
                size="txtLexendSemiBold14"
              >
                Rapports
              </Text>
              <List
                className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 md:ml-[0] mx-4 mt-[19px] md:px-5 w-full"
                orientation="horizontal"
              >
                {rapportsDocs.map((props, index) => (
                  <React.Fragment key={`RapportCard${index}`}>
                    <RapportCard
                      rapportTitle={props.rapportTitle}
                      rapportImage={props.rapportImage}
                      publishDate={props.publishDate}
                      rapportId={props.rapportId}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div>
              <Text
                className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
                size="txtLexendSemiBold14"
              >
                Guides{" "}
              </Text>
              <List
                className="sm:flex-col flex-row font-lexend gap-9 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 md:ml-[0] mx-4 mt-[19px] md:px-5 w-full"
                orientation="horizontal"
              >
                {guidesDocs.map((props, index) => (
                  <React.Fragment key={`RapportCard${index}`}>
                   <RapportCard
                      rapportTitle={props.rapportTitle}
                      rapportImage={props.rapportImage}
                      publishDate={props.publishDate}
                      rapportId={props.rapportId}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <ReturnButton />
      </div>
    </>
  );
};

export default RapportpagePage;
