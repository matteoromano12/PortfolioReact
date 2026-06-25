import { useState, useRef } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const topRef = useRef(null)
  const menuRef = useRef(null)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  const maxHeight = isOpen
    ? (topRef.current?.scrollHeight ?? 64) + (menuRef.current?.scrollHeight ?? 0)
    : 64

  return (
    <div
      className={`isola${isOpen ? ' open' : ''}`}
      style={{ maxHeight: maxHeight + 'px' }}
    >
      <nav className="isola-top" ref={topRef}>
        <button
          className={`isola-hamburger${isOpen ? ' aperto' : ''}`}
          onClick={toggle}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>

        <div className="isola-nome"><a href="#">NSK Labs</a></div>

        <div style={{ width: '32px' }} />
      </nav>

      <div className="isola-divider" />

      <div className="isola-menu" ref={menuRef}>
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>
                <span className="menu-dot" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
