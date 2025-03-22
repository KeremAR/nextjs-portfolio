"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a 4th year student of{" "}
        <span className="font-medium">Computer Engineering</span> at{" "}
        <span className="font-medium"> Akdeniz University.</span> . Skilled in{" "}
        <span className="font-medium">JavaScript</span> and{" "}
        <span className="font-medium">React</span>, with experience using{" "}
        <span className="font-medium">Next.js</span>. I
        completed my internship at Finpro consulting. I gained so much
        experience in ABAP programming language. Right now, I am looking for an{" "}
        <span className="font-medium">DevOps</span> opportunities.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and{" "}
        <span className="font-medium"> tv shows</span>. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
