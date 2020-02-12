import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import ada from "../assets/img/mentors/logos/ada.svg";
import google from "../assets/img/mentors/logos/google.svg";
import kindred from "../assets/img/mentors/logos/kindred.svg";
import microsoft from "../assets/img/mentors/logos/microsoft.svg";
import twitter from "../assets/img/mentors/logos/twitter.svg";
import makeship from "../assets/img/mentors/logos/makeship.png";

// Mentor headshots
import anuj from "../assets/img/mentors/headshots/AnujArora.jpg"
import gordon from "../assets/img/mentors/headshots/GordonGibson.jpg";
import stefan from "../assets/img/mentors/headshots/StefanSokic.jpg";
import enoch from "../assets/img/mentors/headshots/EnochTam.jpg";
import nicole from "../assets/img/mentors/headshots/NicoleFitzgerald.jpg";
import alex from "../assets/img/mentors/headshots/AlexAdusei.jpg";
import rakan from "../assets/img/mentors/headshots/RakanAlShawaf.jpg";

import kermit from "../assets/img/headshots/kermit_slim.png";

const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors1 = [
    {
    name: "Kermit the Frog",
    title: "Sales Engineering Lead",
    headshot: kermit,
    companyLogo: ada,
    companyUrl: "https://www.ada.support/",
    logoHeight: "40px"
    },
    {
    name: "Kermit the Frog",
    title: "Machine Learning Manager",
    headshot: kermit,
    companyLogo: ada,
    companyUrl: "https://www.ada.support/",
    logoHeight: "40px"
    },
    {
    name: "Kermit the Frog",
    title: "Software Engineer",
    headshot: kermit,
    companyLogo: kindred,
    companyUrl: "https://www.kindred.ai/",
    }

];

const mentors2 = [
  // {
  // name: "Nicole Fitzgerald",
  // title: "Machine Learning Engineer",
  // headshot: nicole,
  // companyLogo: microsoft,
  // companyUrl: "https://www.microsoft.com"
  // },
  {
    name: "Kermit the Frog",
    title: "Software Engineer",
    headshot: kermit,
    companyLogo: google,
    companyUrl: "https://www.careers.google.com",
    logoMarginTop: "-15px",
    logoHeight: "80px"
  },
  {
  name: "Kermit the Frog",
  title: "Software Engineer",
  headshot: kermit,
  companyLogo: twitter,
  companyUrl: "https://www.twitter.com",
  logoMarginTop: "-15px",
  logoHeight: "80px"
  },
  {
  name: "Kermit the Frog",
  title: "Co-Founder",
  headshot: kermit,
  companyLogo: makeship,
  companyUrl: "https://makeship.com/",
  logoMarginTop: "-5px",
  }

];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ color: "#ffffff", fontWeight: "600", fontSize: "28px" ,textAlign: "center",position: "relative",}}>
      Additional Mentors and Workshop Leaders
    </h1>
    <div
      css={{
        position: "relative",
        zIndex: "2",
        color: "#ffffff",
        display: "grid",
        "@media (min-width: 1284px)": {
          gridTemplateColumns: "1fr 1fr 1fr"
        },
        "@media (max-width: 1284px)": {
          gridTemplateColumns: "1fr 1fr"
        },
        "@media (max-width: 912px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }
      }}
    >
      {mentors1.map((mentor, i) => (
        <MentorCard
          {...mentor}
           key={mentor.name}
          borderColor={QHACKS_COLORS[i % 3]}
          
        />
      ))}
    </div>

    <div
      css={{
        position: "relative",
        zIndex: "2",
        color: "#ffffff",
        display: "grid",
        "@media (min-width: 1284px)": {
          gridTemplateColumns: "1fr 1fr 1fr"
        },
        "@media (max-width: 1284px)": {
          gridTemplateColumns: "1fr 1fr"
        },
        "@media (max-width: 912px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }
      }}
    >
      {mentors2.map((mentor, i) => (
        <MentorCard
          {...mentor}
           key={mentor.name}
          borderColor={QHACKS_COLORS[i % 3]}
          
        />
      ))}
    </div>
  </div>

  
);
