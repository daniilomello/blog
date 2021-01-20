import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      <style jsx>{`
        .postlist{
          padding: 0;
          text-align: center;
        }
        .postlist li span{
          display: block;
          font-size: 11px;
          color: #cad6f6;
        }
        .postlist li a {
          font-size: 2.5rem;
        }
        .postlist li{
          margin-bottom: 20px;
        }
      `}</style>
      {!posts && <div>No posts!</div>}
      <ul className="postlist">
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <span>{post.frontmatter.date} {` `}</span>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post?.frontmatter?.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
      
    </div>
  )
}
