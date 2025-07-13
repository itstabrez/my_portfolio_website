import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: 'Techasoft Pvt. Ltd.',
      position: 'Software Developer',
      period: `June 2025 - Present`,
      description: 'As a Software Developer, I work on building scalable web applications with React.js on the frontend and Node.js with Express on the backend. I’ve implemented real-time features using WebSockets for chat, notifications, and live data sync, and integrated Firebase Cloud Messaging (FCM) for smart push notifications. On the backend, I develop secure, optimized REST APIs and manage deployments using AWS services like EC2 and S3 to ensure high reliability and performance.',
    },
    {
      company: 'Mintways Technology',
      position: 'Software Engineer',
      period: `May 2024 - June 2025`,
      description: 'I have led the development of key features for enterprise applications and worked on React.js, React Native and Flutter apps, creating end-to-end solutions. I have also shared knowledge with peers and contributed to implementing best practices in development',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="mt-12 max-w-lg mx-auto grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <Briefcase size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription>{exp.company} • {exp.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;