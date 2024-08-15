import { FaStar, FaRegStar, FaTachometerAlt } from 'react-icons/fa';
import { MdOutlineAssignment, MdOutlineVisibility, MdOutlineGavel } from 'react-icons/md';
import colors from '../components/colors';
import { ReactNode } from 'react';

export interface AboutCardData {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface MissionVisionValuesData {
  mission: string;
  vision: string;
  values: string;
  missionIcon: ReactNode;
  visionIcon: ReactNode;
  valuesIcon: ReactNode;
}

export interface AboutData {
  title: string;
  differentials: string;
  differentialsDescricao: string;
  cards: AboutCardData[];
  missionVisionValues: MissionVisionValuesData;
  missionVisionSectionTitle: string; // Adicionado
  cardTitles: {
    mission: string; // Adicionado
    vision: string;  // Adicionado
    values: string;  // Adicionado
  };
  whatsAppLink: string;
  button : string;
}

const AboutModel: AboutData = {
  title: "About Us",
  differentials: "Differentials",
  differentialsDescricao: "Discover what sets us apart from the competition and why our solutions stand out.",
  cards: [
    {
      title: "Excellence",
      description: "We focus on delivering top-quality products and services, ensuring exceptional customer satisfaction.",
      icon: <FaStar color={colors.mediumBlue} />, 
    },
    {
      title: "Innovation",
      description: "Our team continually seeks innovative solutions and approaches to stay ahead of industry trends.",
      icon: <FaRegStar color={colors.mediumBlue} />, 
    },
    {
      title: "Efficiency",
      description: "We prioritize efficiency in all processes, ensuring quick and effective solutions for our clients.",
      icon: <FaTachometerAlt color={colors.mediumBlue} />, 
    },
  ],
  missionVisionValues: {
    mission: "Our mission is to offer innovative and high-quality solutions that simplify people's lives, promoting a positive impact in every community we serve.",
    vision: "Our vision is to be a market leader, recognized for excellence, reliability, and commitment to creating a more sustainable and accessible future for everyone.",
    values: "Our values are integrity, innovation, and commitment to excellence. We value transparency, respect for others, and the constant pursuit of improvement in everything we do.",
    missionIcon: <MdOutlineAssignment size={50} color={colors.mediumBlue} />,
    visionIcon: <MdOutlineVisibility size={50} color={colors.mediumBlue} />,
    valuesIcon: <MdOutlineGavel size={50} color={colors.mediumBlue} />,
  },
  missionVisionSectionTitle: "Mission, Vision, and Values", // Adicionado
  cardTitles: { // Adicionado
    mission: "Mission",
    vision: "Vision",
    values: "Values",
  },
  whatsAppLink: "https://wa.me/5511999999999",
  button : 'Contact Us',
};

export default AboutModel;