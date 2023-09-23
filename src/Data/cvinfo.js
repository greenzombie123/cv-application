import { v4 as uuidv4 } from "uuid";

export const workInfoList = [
  {
    id: uuidv4(),
    startTime: "2018-07-22",
    endTime: "2019-10-22",
    company: "ABC Company",
    position: "Manager",
    workAchievementList: [
      { id: 0, text: "Did various activities" },
      { id: 1, text: "Did some other stuff that were a huge contribution to the team" },
    ],
  },
  {
    id: uuidv4(),
    startTime: "2018-07-22",
    endTime: "2019-10-22",
    company: "DEF Company",
    position: "Assistant Manager",
    workAchievementList: [
      { id: 0, text: "Did various activities" },
      { id: 1, text: "Did some other stuff that were a huge contribution to the team" },
    ],
  },
];

export const academicInfo = [
  {
    id: uuidv4(),
    school: "Arizona State University",
    degree: "Bachelor's Degree in Chemistry",
    startTime: "2015-07-22",
    endTime: "2019-05-22",
  },
  {
    id: uuidv4(),
    school: "California State University",
    degree: "Bachelor's Degree in Physics",
    startTime: "2016-07-22",
    endTime: "2020-05-22",
  },
];

export const languageData = [
  { id: uuidv4(), language: "English", level: "Native" },
  { id: uuidv4(), language: "Korean", level: "Intermediate" },
];

export const objectiveInfo =
  "Seeking a position that allows me to apply my strong analytical and problem-solving skills, along with my passion for continuous learning, to make a positive impact and contribute to the overall goals of the organization.";

  export const skillData = [
  { id: uuidv4(), skill: "Leadership" },
  { id: uuidv4(), skill: "Problem Solving" },
  { id: uuidv4(), skill: "Communications" },
];

export const nameInfo = "Jack Hart";
export const contactInfo = {
  phoneNumber: "123-132-3911",
  email: "somethingcool@hhh.com",
  socialMedia: "ggg.twitter",
  address: "Phoenix, AZ",
};
