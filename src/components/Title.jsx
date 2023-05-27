const Title = ({ title, titleSide }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{titleSide}</span>
      </h2>
    </div>
  )
}
export default Title
