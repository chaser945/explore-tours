import Title from "./Title"
import { featuredTours } from "../Data"
import { FaMapMarkerAlt } from "react-icons/fa"

const Featured = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" titleSide="tours" />

      <div className="section-center featured-center">
        {featuredTours.map((tour) => {
          const { id, src, date, title, text, location, duration, cost } = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={src} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <FaMapMarkerAlt />
                    </span>{" "}
                    <span className="location-span">{location}</span>
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Featured
