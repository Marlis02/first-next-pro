import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  })
  if (!res.ok) throw new Error('Unable to fetch posts!!!')
  return res.json()
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

const Blog = async () => {
  const posts = await getData()

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog
