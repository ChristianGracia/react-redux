import React from "react";
import { withRouter } from "react-router-dom";
import InjectorImage from "../../components/common/injector-image/injector-image-component";
import ami1 from "../../assets/ami1.jpg";
import angelina1 from "../../assets/angelina1.jpg";
import "./injectors.styles.scss";

const Injectors = () => (
  <div className="row">
    <InjectorImage
      title="Dr. Ami Muehlberg"
      linkUrl="ami"
      imgUrl={ami1}
      subtitle="Physician"
    />
    <InjectorImage
      title="Angelina Papaioannou"
      linkUrl="angelina"
      imgUrl={angelina1}
      subtitle="BSN, RN"
    />
    <InjectorImage
      title="Maranda Dailey"
      linkUrl="miranda"
      imgUrl="https://www.cona-nurse.org/images/banner_nurse.png"
      subtitle="BSN, RN"
    />
  </div>
);

export default withRouter(Injectors);
