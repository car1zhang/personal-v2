import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import clsx from "clsx";

export default function HomePage({ className }: { className: string }) {
  return (
    <div className={clsx("flex flex-col gap-8", className)}>
      <div className="flex flex-col gap-4 tracking-wide leading-relaxed font-light">
        <p>Hi, my name is Carl. </p>
        <p>I solve problems and craft tools. I&apos;m currently taking a year off from studying <a href="https://cs.uwaterloo.ca/" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">CS at UWaterloo</a> to build <a href="https://www.butler.ai/" target="_blank" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">Butler</a>.</p>
        <p>This site is an active WIP. You can reach me at <a href="mailto:carl@butler.ai" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">carl@butler.ai</a>.</p>
      </div>
      <div className="flex gap-8">
        <a href="https://www.linkedin.com/in/car1zhang/" target="_blank" className="hover:text-light transition">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/car1zhang" target="_blank" className="hover:text-light transition">
          <FaGithub size={22} />
        </a>
        <a href="https://twitter.com/car1zhang" target="_blank" className="pb-0.5 hover:text-light transition">
          <FaXTwitter size={22} />
        </a>
        <a href="https://www.instagram.com/car1.zhang/" target="_blank" className="hover:text-light transition">
          <FaInstagram size={22} />
        </a>
      </div>
    </div>
  )
}
