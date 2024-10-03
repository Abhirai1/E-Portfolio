import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">Problem Solving</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Solved 1000+ DSA problems."
            subTitle="On Different coding platforms."
            des="Successfully solved 1000+ Data Structures and Algorithms problems!  It's been an incredible journey of continuous learning, problem-solving, and honing my coding skills. "
          />
          <ResumeCard
            title="2000+ Rated at Leetcode"
            subTitle="Data Structure and Algorithms"
            // result="Success"
            des="Knight at Leetcode (Top 2.59%) (Max.2036)."
          />
          <ResumeCard
            title="3🌟 at CODECHEF."
            subTitle="Competitive Programming"
            des="Achieved a 3-star rating on CodeChef! I'm grateful for the challenges, the knowledge gained, and the incredible community that has supported me along the way. "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Global Rank 354 and 1223"
            subTitle=" Biweekly Contest 129 and Weekly Contest 386 at Leetcode"
            des="Achieved impressive global ranks of 354 in Biweekly Contest 129 and 1223 in Weekly Contest 386 on LeetCode,
             demonstrating strong problem-solving skills and algorithmic proficiency in competitive programming."
          />
          <ResumeCard
            title=" Global Rank 71 and 132"
            subTitle="November Long 2022 Division 3 and in starter 104 at Codechef"
            des="Secured global ranks of 71 in CodeChef November Long 2022 Division 3 and 132 in Starter 104, 
            showcasing my expertise in competitive programming and the ability to solve complex algorithmic challenges efficiently."
          />
          <ResumeCard
            title="All India Regional Rank 703"
            subTitle="ICPC India Preliminary 2023"
            des="Achieved a regional rank of 703 in the ICPC India Preliminary 2023, demonstrating strong teamwork, problem-solving skills, 
            and a solid grasp of competitive programming at a national level."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
