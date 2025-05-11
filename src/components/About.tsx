import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = ['React.js', 'React Native', 'Flutter', 'JavaScript', 'TypeScript', 'Node.js', 'SQL', 'MongoDB', 'Express', 'RestFul API'];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">About Me</h2>
          <Card className="mt-10">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/3 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar className="h-48 w-48">
                      <AvatarImage src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&h=400" />
                      <AvatarFallback>YN</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-lg text-muted-foreground">
                    I'm a passionate Software Engineer with a strong foundation in full-stack development, specializing in building scalable and user-centric web and mobile applications. With hands-on experience in React, React Native, Flutter, Node.js, Firebase, and RESTful APIs, I thrive at the intersection of clean code, elegant design, and meaningful user experiences.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    I believe in continuous learning and constantly challenge myself to stay current with modern technologies and best practices. Whether it's architecting backend services, crafting intuitive UIs, or automating workflows, I enjoy solving real-world problems through thoughtful and efficient code.

                    On weekends, you’ll find me exploring new tools, contributing to side projects, or refining my skills—not because I have to, but because I love to. I'm not just building apps; I'm building a craft.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;