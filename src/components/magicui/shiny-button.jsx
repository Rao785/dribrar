"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

const ShinyButton = ({ text = "shiny-button", className }) => {

  const cvUrl = 'images/cv.pdf'; // Replace with the actual URL of your CV
  const handleDownload = () => {
    // alert('Download started');
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'cv.pdf'; // You can specify the file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  return (
    <motion.button
    onClick={handleDownload}
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] border-2 border-black "
      )}
    >
      <span
        onclick={handleDownload}
        className="relative block h-full w-full text-sm uppercase tracking-wide text-black dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
