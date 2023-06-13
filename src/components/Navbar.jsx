import { useGlobalContext } from "../context"
import { pageLinks } from "../Data"
import { socialLinks } from "../Data"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const { displayAside } = useGlobalContext()
  // console.log(displayAside)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-title">
            Explore <span className="blue-title">Tours</span>
          </h3>
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={displayAside}
          >
            <FaBars />
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, title } = link
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {" "}
                  {title}{" "}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            const Icon = icon
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon">
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
