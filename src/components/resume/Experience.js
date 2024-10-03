import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DSA LEAD"
            subTitle="NSCC KIET CLUB"
            result="Offline"
            des=" Mentored 200+ students in NSCC KIET club in preparation of Data Structure and Algorithms."
          />

          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Alpine Formworks"
            result="Remote"
            des="I worked on a CRM project using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
            I was responsible for developing key features like user management, 
            lead tracking, and data visualization, 
            ensuring a seamless user experience and efficient backend operations."
          />

          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Freelance Project"
            result="Online"
            des="As a freelance developer, I worked on the Solaroot project, 
            a CRM solution designed for solar product sales. 
            I built features for customer management, sales tracking, 
            and project lifecycle management using the MERN stack,
            helping streamline the sales and service process for solar solutions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
