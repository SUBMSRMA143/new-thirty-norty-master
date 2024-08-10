import React from "react";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import ServicesList from "./ServicesList";

const List = [
  {
    id: 1,
    heading: "Tennis Coaching for all",
    icon: (
      <SportsBasketballOutlinedIcon
        style={{ color: "#47AEFF" }}
        fontSize="large"
      />
    ),
  },
  {
    id: 2,
    heading: "Global admission for Student-Athelete",
    icon: <SchoolOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
  {
    id: 3,
    heading: "Athletic & Academic Scholarships",
    icon: (
      <DirectionsBikeOutlinedIcon
        style={{ color: "#E80368" }}
        fontSize="large"
      />
    ),
  },
  {
    id: 4,
    heading: "Helping Players & Coaches with Jobs",
    icon: (
      <ApartmentOutlinedIcon style={{ color: "#47AEFF" }} fontSize="large" />
    ),
  },
  {
    id: 5,
    heading: "Tennis Academies Worldwide",
    icon: <SportsTennisIcon style={{ color: "red" }} fontSize="large" />,
  },
  {
    id: 6,
    heading: "Academies in India",
    icon: (
      <MilitaryTechOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    id: 7,
    heading: "League Matches (Clubs) in Europe",
    icon: (
      <EmojiEventsOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    id: 8,
    heading: "Student-specific Solutions as per needs",
    icon: <ArticleOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
];

const V6services = () => {
  return (
    <div className="row g-5">
      {List.map((e) => (
        <ServicesList key={e.id} heading={e.heading} icon={e.icon} />
      ))}
    </div>
  );
};

export default V6services;
