import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <>
        <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a> Blogs </a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a> Products </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a> About Us </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a> Conatact Us </a>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar
