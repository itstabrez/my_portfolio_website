import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
const handleType = (count: number) => {
  // access word count number
  console.log(count)
}

const handleDone = () => {
  console.log(`Done after 5 loops!`)
}
const Hero = () => {


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">
              <Typewriter
            words={['Mohammd Tabrez Alam', 'A Software Developer', 'An Engineer', 'A Coder!']}
            loop={25}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a passionate developer who loves to create amazing web experiences.
          </motion.p>
          
          <motion.div
            className="mt-5 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="https://github.com/itstabrez"target='_blank'  className="text-primary hover:text-secondary transition-colors duration-30 0">
              <Github size={45} />
              Git
            </a>
            <a href="https://www.linkedin.com/in/mohammad-tabrez-alam-65a551208/" target='_blank' className="text-primary hover:text-secondary transition-colors duration-300">
              <Linkedin size={45} />
              Linkedin
            </a>
            <a href="https://leetcode.com/u/itstabrez/" target='_blank' className="text-primary hover:text-secondary transition-colors duration-300">
              <Code2 size={45} />
              LeetCode
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;