import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Projects = () => {
  const projects = [
    {
      title: '🩺 VitalSync - Health App',
      description: 'VitalSync is a cross-platform health app that lets users manage profiles, book doctor appointments, and track upcoming visits. Doctors handle schedules and transactions, while admins manage doctors, leads, and system data—all in one platform. Fully deployed and live on both the Play Store and App Store. It is a collaborative project completed in Mintways Technology.',
      image: 'https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148562986.jpg?t=st=1746959391~exp=1746962991~hmac=752354a4f372fe221fa0b5f4e41735ad59408098272290141f731b34d427b058&w=2000',
      technologies: ['React Native', '.Net', 'Microsoft SQL', 'Microservice using Node.js', 'Firebase Cloud Messaging'],
      github: '',
      live: 'https://play.google.com/store/apps/details?id=com.doctorproject',
      details: 'Features include user role management, Real Time Notification and payment gateway integration.',
    },
    {
      title: 'School Management Application',
      description: 'A full-featured school management mobile application built with Flutter , It is a collaborative project completed in Mintways Technology.',
      image: 'https://img.freepik.com/free-vector/flat-university-concept_23-2148174524.jpg?t=st=1746959494~exp=1746963094~hmac=47107acaa75255648b6d4d878f28cae2b94c27bf8bb47c370f59ac44fae4d932&w=1380',
      technologies: ['Flutter', '.Net', 'Microsoft SQL', 'Firebase Cloud Messaging'],
      github: '',
      live: 'https://play.google.com/store/apps/details?id=com.app.gurukul_sarathi&hl=en',
      details: 'Features include user role management, Real Time Notification and payment gateway integration.',
    },
    {
      title: 'Real Time Face Recognition App',
      description: 'A flutter application which recognize faces in realtime using Tensor Flow Model and Google ML Kit, It is my Personal Project',
      image: 'https://img.freepik.com/free-photo/facial-recognition-software_52683-104208.jpg?t=st=1735579845~exp=1735583445~hmac=e229db53f49461299a59dd4f16d0a71bf05e94257b44177e3922bdc666272fc8&w=2000',
      technologies: ['Flutter', 'SQFLite', 'TensorFlow Lite', 'Google ML Kit', "Face Recognition Model"],
      details: 'Recognize and validate faces in real time it is a standalone model.',
      github: 'https://github.com/itstabrez/realTime-face-recognition-flutter-app',
      live: '',
    },
    {
      title: 'College Attendance Management System',
      description: 'A flutter application which utilize Tensorflow Model to mark student attendance using face recognition with enhanced security like geofence to mark attendance only in college premises.',
      image: 'https://img.freepik.com/free-vector/man-woman-biometric-process-technology_24908-56387.jpg?t=st=1746959576~exp=1746963176~hmac=3d7ea522fa8dcfc926c22f498a5130c779cbfa2ee3ff37519731f032056bb790&w=2000',
      technologies: ['Flutter', '.Net', 'TensorFlow Lite', 'Google ML Kit', "Face Recognition Model", "Firebase Crashlytics"],
      github: '',
      live: 'https://play.google.com/store/apps/details?id=com.college.gurukul_sarathi',
      details: 'Features include user role management, Student Face Registration and Attendance Marking Feature with enhanced security using Geofencing.',
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
                <CardFooter className="space-x-4 center">
                  {(
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
                          <ExternalLink size={16} className="mr-1" /> Live On Play Store
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