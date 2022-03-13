import { FaBabyCarriage, FaSyringe, FaRegSmileBeam } from "react-icons/fa";
import { SiTed } from "react-icons/si";

const projects = [
  {
    title: "US Teen Birth Trends from 1990 to 2018",
    description:
      "The purpose of this case study is to explore trends in teen births in the United States from nearly three decades using the data set U.S. and State Trends on Teen Births from NCHS. Tools used were RStudio and RMarkdown.",
    iconTitle: "baby carriage",
    liveURL:
      "https://www.kaggle.com/niksparlin/us-teen-birth-trends-from-1990-to-2018/notebook",
    Icon: FaBabyCarriage,
  },
  {
    title: "TED Talks Analysis",
    description:
      "This analysis and visualization project explores all TED talks that have been uploaded to the TED website using Python, Pandas, NumPy, and MatPlotLib. Data from Kaggle.",
    iconTitle: "ted talks logo",
    liveURL: "https://www.kaggle.com/niksparlin/ted-talks-analysis/notebook",
    Icon: SiTed,
  },
  {
    title: "World Happiness Dashboard",
    description:
      "This Tableau dashboard looks at trends in World Happiness Data from 2015 to 2017. Data set from Google Career Certificates.",
    iconTitle: "smile",
    liveURL:
      "https://public.tableau.com/app/profile/nik.sparlin/viz/WorldHappiness2015-2017_16432260114600/WorldHappinessScores2015to2017_1#1",
    Icon: FaRegSmileBeam,
  },
  {
    title: "Maine Drug Overdose Visualization",
    description:
      "This Google Sheets visualization looks at trends within Dr. Marcella H. Sorg’s data from the Maine Drug Death Report for 2020 (with historical data) and monthly drug overdose reports from 2021.",
    iconTitle: "syringe",
    liveURL:
      "https://docs.google.com/spreadsheets/d/1E6lJo3YSxz7lmk_iLEkoX_jl5PNuDAh-YDppix7KYzg/edit?usp=sharing",
    Icon: FaSyringe,
  },
];

export default projects;
