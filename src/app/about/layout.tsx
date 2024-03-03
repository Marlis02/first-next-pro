import Link from 'next/link'

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  console.log(children)

  return (
    <div>
      <h1>about us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default AboutLayout
