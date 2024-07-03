import { CodeXml } from "lucide-react";
import { Coffee } from "lucide-react";
import { FileCode } from "lucide-react";
import { Atom  } from "lucide-react";
import {Fish } from "lucide-react";
import { SquareCode } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

import proj1 from "../assets/profile-pictures/budop.png";
import proj2 from "../assets/profile-pictures/codepen.png";
import proj3 from "../assets/profile-pictures/netop.png";




export const navItems = [
  { label: "About me", href: "About-me" },
  { label: "Skill's", href: "Skill's" },
  { label: "Education", href: "education" },
  { label: "Project's", href: "Project's" },
  { label: "certification's", href: "certification's" },
];

export const testimonials = [
  {
    image: user1,

  },
  {
    image: user2,
  },
  {
    image: user3,
  },
  {
    image: user4,
  },
];

export const features = [
  {
    icon: <CodeXml />,
    text: "HTML & CSS",
    description:
      "I have extensive experience in developing and designing responsive web interfaces using HTML & CSS.",
  },
  {
    icon: <FileCode />,
    text: "Tailwind CSS",
    description:
      "I utilize Tailwind CSS to efficiently style and customize web components, enhancing the aesthetic appeal and maintaining consistency across web projects.",
  },
  {
    icon: <Atom />,
    text: "React",
    description:
      "With my skills in React, I build dynamic and interactive web applications, successfully integrating complex functionalities to improve user engagement and streamline the user experience.",
  },
  {
    icon: <Coffee />,
    text: "Core Java & Cpp",
    description:
      "I possess strong knowledge in Core Java and C++, which I use to implement robust backend solutions, crucial in developing high-performance applications for data management and processing.",
  },
  {
    icon: <Fish />,
    text: "Mysql & PHP",
    description:
      "I manage databases and handle server-side scripting using MySQL & PHP, ensuring the backend infrastructure of web projects is reliable, supporting smooth operations and data integrity.",
  },
  {
    icon: <SquareCode />,
    text: "JavaScript",
    description:
      "My proficiency in JavaScript allows me to enhance the interactivity and functionality of web pages, significantly improving the overall user experience.",
  },
];

export const checklistItems = [
  {
    title: "Bachelor of Engineering",
    description:
      "I am currently pursuing a B.E. in Computer Engineering at Dr. D. Y. Patil Institute of Technology, Pune.",
  },
  {
    title: "Diploma",
    description:
      "I completed my Diploma in Information Technology from P. L. Government Polytechnic Latur  with an 91.40% score.",
  },
  {
    title: "Schooling",
    description:
      "I completed my schooling at M.N.D.V. High School in Latur with an 88.40% score.",
  },
];

export const pricingOptions = [
  {
    image:proj2,
    title: "Codepen",
    price: "CodePen is an online compiler that allows you to write and test HTML, CSS, and JavaScript code, and instantly view the results.",
    features: [
      "Tailwindcss",
      "React",
    ],
  },
  {
    image:proj3,
    title: "NetflixGPT",
    price: "A clone of Netflix, enhanced with AI-powered suggestions through ChatGPT.",
    features: [
      "React",
      "Tailwindcss",
      "Firebase",
    ],
  },
  {
    image:proj1,
    title: "Expense Tracking App",
    price: "The Expense Tracking App is a React-based application that allows users to track their income and expenses in an organized manner.",
    features: [
      "React",
      "Material UI",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.instagram.com/manmath_ashture_/", text: "Get In Touch" },
  { href: "https://mail.google.com/mail/u/0/#inbox", text: "Email" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "https://leetcode.com/u/Manmath_Ashture/", text: "Leetcode" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
