import { useGlobalContext } from "../context"
import { pageLinks } from "../Data"
import { RiCloseLine } from "react-icons/ri"
const Aside = () => {
  const { showAside, hideAside } = useGlobalContext()
  return (
    <div className={`aside-container ${showAside && "active"}`}>
      <div className="aside">
        <button className="close-btn" onClick={hideAside}>
          <RiCloseLine className="close-icon" />
        </button>
        <ul className="aside-nav">
          {pageLinks.map((link) => {
            const { id, href, title } = link
            return (
              <li key={id} className="aside-link" onClick={hideAside}>
                <a href={href}>{title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Aside
