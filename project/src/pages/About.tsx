import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase } from 'lucide-react';

const About: FC = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      learningSince: "LearningSince - 2024-25",
      description: "Developing modern web applications using React, Node.js, and various cloud technologies."
    },
    {
      role: "Web Developer",
      learningSince: "LearningSince - 2023-24",
      description: "Created responsive websites and web applications for clients using modern frameworks and tools."
    },
    {
      role: "UI/UX Designer",
      learningSince: "LearningSince - 2023-24",
      description: "Designing intuitive user interfaces using Figma and Adobe XD, focusing on user-centered design principles."
    },
    {
      role: "Multimedia Creator",
      learningSince: "LearningSince - 2022-23",
      description: "Creating engaging multimedia content, including Adobe Illustrator, video editing, and interactive UI animations."
    }
  ];


  const education = [
    {
      year: "2022 - 2025",
      degree: "Bachelor of Vocational (SOFTWARE DEVELOPMENT)",
      school: "Asutosh College (CU)",
      focus: "Software Development"
    },
    {
      year: "2021 - 2022",
      degree: "Higher Secondary Education",
      school: "Sarengabad High School",
      focus: "Vocational Education"
    },
    {
      year: "2014 - 2020",
      degree: "Madhyamik Examination",
      school: "Budge Budge Abbey High School",
      focus: "Secondary Education"
    },
  ];

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-20 mx-auto max-w-6xl"
      >
        {/* About Me */}
        <div className="mb-20">
          <h1 className="mb-8 text-4xl font-bold font-syne md:text-6xl gradient-text">
            About Me
          </h1>
          <p className="mb-6 text-lg text-neutral-400">
            I'm a Passionate Web Developer And Desinger based in Kolkata, India, with a strong focus on creating 
            modern web applications and Design. Currently pursuing my B.Voc In Software Development, I combine my academic 
            knowledge with practical experience in building real-world applications.
          </p>
          <p className="text-lg text-neutral-400">
            I specialize in React, JavaScript, Python, MultiMedia, PHP, SQL, DataBase,  and Node.js, and I'm constantly exploring new technologies 
            to stay at the forefront of web development. When I'm not coding, I enjoy contributing to 
            open-source projects and sharing my knowledge with the developer community.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-4 w-8 h-8 gradient-text" />
            <h2 className="text-3xl font-bold font-syne">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border card-gradient border-neutral-800"
              >
                {/* <div className="mb-2 text-sm text-neutral-400">{exp.year}</div> */}
                <h3 className="mb-1 text-xl font-bold font-syne">{exp.role}</h3>
                {/* <div className="mb-2 text-neutral-300">{exp.company}</div> */}
                <div className="mb-2 text-neutral-300">{exp.learningSince}</div>
                <p className="text-neutral-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="mr-4 w-8 h-8 gradient-text" />
            <h2 className="text-3xl font-bold font-syne">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border card-gradient border-neutral-800"
              >
                <div className="mb-2 text-sm text-neutral-400">{edu.year}</div>
                <h3 className="mb-1 text-xl font-bold font-syne">{edu.degree}</h3>
                <div className="mb-2 text-neutral-300">{edu.school}</div>
                <p className="text-neutral-400">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="mr-4 w-8 h-8 gradient-text" />
            <h2 className="text-3xl font-bold font-syne">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Microsoft Azure Fundamentals - Simplilearn",
              "Google Cloud Platform Architect - Simplilearn", // done 
              "Linux Training - Simplilearn",
              "Python Programming - CodeWithHarry",
              "CompTIA Linux + Course - Simplilearn",
              "AWS - Simplilearn"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border card-gradient border-neutral-800"
              >
                <h3 className="text-lg font-bold font-syne">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;