import React from "react";
import "sections/Section2/Section2.styles.css";
import phone3 from "assets/images/phone3x2.png";
import { SectionContent } from "components/SectionContent/SectionContent";

export const Section2 = () => {
  return (
    <section id="section2">
      <div className="rewards-sample">
        <div className="square">
          <img src={phone3} alt="phone3" />
        </div>
      </div>
      <div className="rewards">
        <SectionContent
          title="Get Started"
          subtitle="Download and Start Using Starstec!"
          btnType="btn-accent btn-long"
          btnText="Download"
        >
         Experience the benefits of Starstec and take your esports performance to the next level
        </SectionContent>
      </div>
    </section>
  );
};
