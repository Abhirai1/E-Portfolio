import React from 'react';
import { Sharp, blood, book, major, pixel, text } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" GradCart | Web Platform for Student-to-Student Exchange"
          des=" Pioneered the development of Gradcart, a platform aimed at facilitating student-to-student exchanges within the
 college community, fostering stronger connections."
          src={blood}
          git="https://github.com/Abhirai1/gradCartUpdates"
          live="https://gradcartupdates-1.onrender.com/"
        />
        <ProjectsCard
          title=" Sakha-Spiritual Growth Platform"
          des=" Spearheaded the creation of Sakha, an integrated platform designed to foster spiritual growth and provide companionship
 to individuals experiencing loneliness and disturbances in their lives."
          src={book}
          git="https://github.com/Abhirai1/finalhome"
          live="https://play.google.com/store/apps/details?id=com.morpankh.sakha"
        />
        <ProjectsCard
          title="TnP Automation | Centralized College Placement Monitoring System"
          des="  Spearheaded development of a centralized system to track and manage student placements effectively.Implemented four modules: Student, Department, CRPC (College Placement and Recruiting Cell), and
 Recruiter, ensuring comprehensive stakeholder coverage."
          src={text}
          git="https://github.com/Abhirai1/TrainingAndProcessAutomation"
          live=""
        />
      </div>
    </section>
  );
}

export default Projects