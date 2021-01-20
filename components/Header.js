import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="https://daniilo.dev">
            <span>
            <img
                src="/images/profile.jpg"
                alt="Danilo Mello"
              />{' '}
              Danilo Mello
            </span>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-size: 1rem;
        }
        nav a {
          margin-right: 20px;
          color: #64FFDA;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
        nav img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        nav span {
          width: 220px;
          display: grid;
          grid-template-columns: 70px 1fr;
          align-items: center;
          transition: all 0.5s ease;
        }
        nav span:hover {
          transform: translateY(-10px);
          transition: all 0.5s ease;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
