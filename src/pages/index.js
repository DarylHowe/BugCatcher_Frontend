import React from "react";
import FooterContainer from "../components/Footer/FooterContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import InfoBox from "../components/Homepage/InfoBox";
import ProjectContainer from "../components/Project/ProjectContainer";
import ReduxExample from "../StateManagement/Example/ReduxExample";
function index() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <div className="homepageContainer">
        <InfoBox></InfoBox>
      </div>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default index;
