import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub, FaX } from "react-icons/fa6";
import clsx from "clsx";
import HomePage from "./HomePage";

export default function Window(
  { className, setWindowOpen }
  : 
  { 
    className: string;
    setWindowOpen: (arg: boolean) => void;
  }
) {
  return (
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={clsx("bg-[url('/frame.png')] bg-cover pt-[85px] pl-[19px] pr-[35px] w-[620px] h-[461px]", className)}
    >

      <FaX className="absolute right-2 top-2 cursor-pointer text-black opacity-0" size={10} onClick={() => { setWindowOpen(false); }} />
      <HomePage className="h-[341px] p-12 overflow-y-auto"/>

    </motion.div>
  );
}