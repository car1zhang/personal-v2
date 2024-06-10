import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="background-black flex flex-col gap-8 p-6 lg:w-1/2 2xl:w-1/3">
      <h1 className="text-4xl font-medium">CARL ZHANG</h1>
      <div className="flex flex-col gap-4 tracking-wide leading-relaxed font-light">
        <p>hi. my name is carl. </p>
        <p>i solve problems and craft tools. i&apos;m currently building product at <a href="https://www.usebutler.app/" target="_blank" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">butler</a> and i&apos;ll (likely) be studying <a href="https://cs.uwaterloo.ca/" target="_blank" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">cs at uwaterloo</a> this fall. </p>
        <p>this site is an active wip. in the meantime, you can reach me at <a href="mailto:zhang.carl.x@gmail.com" className="underline underline-offset-2 decoration-highlight decoration-2 hover:text-light hover:decoration-dark transition">zhang.carl.x@gmail.com</a> or via the platforms below.</p>
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
    </main>
  );
}
