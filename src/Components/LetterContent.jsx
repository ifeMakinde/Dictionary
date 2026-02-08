import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function LetterContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "25%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
      className={`m-auto text-start py-10 max-w-[90%] lg:max-w-200 `}
    >
      <p className="text-base lg:text-lg tracking-wide leading-relaxed">
        Hey mama, as I pen down this letter ( well, techinically, i typed it but
        that's besides the point 🫠😝 ). my heart is filled with an overwhelming
        sense of love and gratitude for having you in my life. You are the light
        that brightens my darkest days, you illuminate my life and as i fondly
        like to say, my life is black and white and you, the colour.🌈🤍🧡💛💚💜
        <br />
        Maybe I am a piece of work sometimems, but thank you so much for
        sticking around. <br />
        You've always been a tremendous source of inspiration, you are
        beautiful, your happiness is contagious, I'd forever admire you, and I
        without doubt grateful for you and what we share. <br />
        I cherish every moment we spend together and look forward to a future
        where we ARE and we no longer wish to be. <br />
        I love you more than words can express, and I'd hope maybe, just maybe
        this web app will ? 😂❤️
        <br />
        Happy Valentine's Day, Princess! ❤️
        <br />
        Weird music taste btw, but i digress...
      </p>
    </motion.div>
  );
}

export default LetterContent;
