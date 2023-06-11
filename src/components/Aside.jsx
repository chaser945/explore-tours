import { useGlobalContext } from "../context"
import { pageLinks } from "../Data"

const Aside = () => {
  const { showAside, hideAside } = useGlobalContext()
  return (
    <div className={`aside-container ${showAside && "active"}`}>
      <div className="aside">
        <button className="close-btn" onClick={hideAside}>
          <i className="fa-solid fa-xmark close-icon"></i>
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
