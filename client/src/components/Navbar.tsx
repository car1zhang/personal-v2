import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-8">
      <Link href="/">
        <p>Carl Zhang</p>
      </Link>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </div>
  )
}