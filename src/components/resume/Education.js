import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science and Engineering"
            subTitle="Kiet Group Of Institutions (2021 - 2025)"
            result="8.7/10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="CBSE (XII)"
            subTitle="Sterling Public School (2019 - 2021)"
            result="75.6%"
            //des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="CBSE (X)"
            subTitle="B & B International School (2017 - 2019)"
            result="86.5%"
            //des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certified Courses</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Namaste JS"
            subTitle="Namaste Dev - Akshay Saini"
            result="Skills Gained : Fundamentals of Java Script"
            des="Sucessfully completed this course and gained the deep understanding of How Js Works and fundamentals of JS."
          />
          <ResumeCard
            title="Namaste React-Js"
            subTitle="Namaste Dev - Akshay Saini"
            result="Skills Gained : Front-end Development (React Js)"
            des=" I have gained hands-on experience building interactive and responsive web applications using React.js, focusing on reusable components, state management, and efficient rendering."
          />
          <ResumeCard
            title="Namaste Node-Js"
            subTitle="Namaste Dev - Akshay Saini"
            result="Skills Gained : Back-end Development (Node-Js)"
            des="I have developed server-side applications with Node.js, creating RESTful APIs and working with databases, providing scalable backend solutions for web applications."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education