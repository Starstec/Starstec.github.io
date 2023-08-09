import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "sections/Section1/Section1.styles.css";
import { SmallCard } from "components/Card/Card";

export const Section1 = () => {
  const details = [
    {
      id: 1,
      number: "98%",
      title: "Accurate Detection",
      text:
        "Providing valuable insights into an athlete's stress levels in real-time.",
    },
    {
      id: 2,
      number: "80%",
      title: "Optimize Performance",
      text:
        "Helps athletes optimize their performance by providing actionable insights.",
    },
    {
      id: 3,
      number: "User Friendly",
      title: "UI/UX",
      text:
        "Making it easy for athletes to access and interpret their stress-related data.",
    },
  ];

  return (
    <section id="section1">
      <h2 className="title">Our Features</h2>

      <div className="small-cards">
        {details.map((detail) => {
          const { id, number, title, text } = detail;
          return (
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={id}
              delay={250 * id}
              animateOnce={true}
            >
              <SmallCard
                key={id}
                number={number}
                title={title}
                description={text}
              />
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
};
