import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";
import clsx from "clsx";
import HomePage from "./HomePage";
import Draggable from "react-draggable";

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
      transition={{
        ease: "linear",
        duration: 0.3
      }}
    >

      <Draggable cancel=".cancel">
        <div className={clsx("bg-[url('/frame.png')] bg-cover pt-[85px] pl-[19px] pr-[35px] w-[620px] h-[461px] shadow-md", className)}>
          <FaX className="absolute right-2 top-2 cursor-pointer text-black opacity-0 cancel" size={10} onClick={() => { setWindowOpen(false); }} />
          <HomePage className="h-[341px] p-12 overflow-y-auto cancel bg-black" />
        </div>
      </Draggable>
    </motion.div>
  );
}