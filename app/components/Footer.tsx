import Link from "next/link"

export default function Footer() {
    return (
        <footer
        className="bg-sfprimary text-center  lg:text-left">
        <div className="p-4 text-center text-white ">
          © 2024 Copyright:
          <Link
            className="text-white "
            href="/"
            >SF International</Link>
        </div>
      </footer>
    )
}