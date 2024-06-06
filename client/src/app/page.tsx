import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="background-black flex flex-col gap-8 p-6 md:w-1/3">
      <h1 className="text-4xl font-medium">Carl Zhang</h1>
      <div className="flex flex-col gap-4 tracking-wide leading-relaxed font-light">
        <p>hi. my name is carl. </p>
        <p>i&apos;m an incoming cs student at uwaterloo. i solve problems and build tools. </p>
        <p>this site is currently under construction. in the meantime, you can reach me at <a href="mailto:zhang.carl.x@gmail.com" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">zhang.carl.x@gmail.com</a>.</p>
      </div>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/car1zhang/" target="_blank" className="hover:text-light transition">
          <FaLinkedin size={18} />
        </a>
        <a href="https://github.com/car1zhang" target="_blank" className="hover:text-light transition">
          <FaGithub size={18} />
        </a>
        <a href="https://twitter.com/car1zhang" target="_blank" className="hover:text-light transition">
          <FaXTwitter size={18} />
        </a>
        <a href="https://www.instagram.com/car1.zhang/" target="_blank" className="hover:text-light transition">
          <FaInstagram size={18} />
        </a>
      </div>
    </main>
  );
}
