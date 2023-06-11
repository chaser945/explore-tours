import { pageLinks } from "../Data"
import { socialLinks } from "../Data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, title } = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">© 2023 Explore Tours</p>
      <p className="copyright">all rights reserved.</p>
    </footer>
  )
}
export default Footer
