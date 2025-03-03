import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Projects = () => {
  const projects = [
    {
      title: 'School Management Application',
      description: 'A full-featured school management mobile application built with Flutter , It is a collaborative project completed in Mintways Technology.',
      image: 'https://img.freepik.com/free-vector/charity-app_23-2148621304.jpg?t=st=1735579932~exp=1735583532~hmac=62172eeb7ad7af3edae25fe370734fa6dbdb17400c6bdc05d6bc083ae416e8a1&w=1480',
      technologies: ['Flutter', '.Net', 'Microsoft SQL'],
      github: '',
      live: 'https://play.google.com/store/apps/details?id=com.app.gurukul_sarathi&hl=en',
      details: 'Features include user role management, Real Time Notification and payment gateway integration.',
      note: 'This is a collaborative project of company, so the code is not available publicly.'
    },
    {
      title: 'Real Time Face Recognition App',
      description: 'A flutter application which recognize faces in realtime using Tensor Flow Model and Google ML Kit',
      image: 'https://img.freepik.com/free-photo/facial-recognition-software_52683-104208.jpg?t=st=1735579845~exp=1735583445~hmac=e229db53f49461299a59dd4f16d0a71bf05e94257b44177e3922bdc666272fc8&w=2000',
      technologies: ['Flutter', 'SQFLite', 'TensorFlow Lite', 'Google ML Kit', "Face Recognition Model"],
      details: 'Recognize and validate faces in real time it is a standalone model.',
      github: 'https://github.com/itstabrez/realTime-face-recognition-flutter-app',
      live: '',
    },
    {
      title: 'College Attendance Management System',
      description: 'A flutter application which utilize Tensorflow Model to mark student attendance using face recognition with enhanced security like geofence to mark attendance only in college premises.',
      image: 'https://img.freepik.com/free-vector/online-certification-concept_23-2148569761.jpg?t=st=1735666020~exp=1735669620~hmac=54202d48f3cbb4dd32c2b76dccaee105f419a8706f5c1c6d4adfe3dfcab3547f&w=1060',
      technologies: ['Flutter', '.Net', 'TensorFlow Lite', 'Google ML Kit', "Face Recognition Model , Firebase"],
      github: 'https://github.com/itstabrez/realTime-face-recognition-flutter-app',
      live: '',
      details: 'Features include user role management, Student Face Registration and Attendance Marking Feature with enhanced security using Geofencing.',
      note: 'This is a collaborative project of company, so the code is not available publicly.'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <HoverCard key={tech}>
                        <HoverCardTrigger>
                          <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded cursor-pointer">
                            {tech}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          {project.details}
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="space-x-4">
                  {project.note ? (
                    <p>{project.note}</p>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={16} className="mr-1" /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1" /> Live Demo
                        </a>
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;