import { Award, Trophy, Medal, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [

    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: 'Software Development Leadership',
      description: 'Led the development of core features in enterprise applications, contributing to successful project deliveries.',
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: 'Data Structure And Algorithms',
      description: 'Solved 300+ Data Structures and Algorithms problems on different coding platforms such as LeetCode, GFG, and Code360 by coding ninjas.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: 'Certifications',
      description: 'C++ Programming Step By Step From Beginner To Ultimate Level (Udemy)',
      link: 'https://www.udemy.com/certificate/UC-9c2c3526-3114-4ab8-9f74-26e60f032453/'
    },
    // {
    //   icon: <Medal className="h-8 w-8 text-green-500" />,
    //   title: 'Certification',
    //   description: 'C++ Programming Step By Step From Beginner To Ultimate Level (Udemy)',
    //   link: 'https://www.udemy.com/certificate/UC-9c2c3526-3114-4ab8-9f74-26e60f032453/'
    // },

  ];

  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-center sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-center">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-center mt-4">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;