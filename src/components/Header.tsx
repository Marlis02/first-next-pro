import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
      <Link className="link" href="/about">
        About
      </Link>
    </header>
  )
}

export default Header
