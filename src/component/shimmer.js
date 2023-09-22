import '../../shimmer.css'
const ShimmerContent = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-image"></div>
      <div className="shimmer-info">
        <h2 className="shimmer-name"></h2>
        <h2 className="shimmer-area"></h2>
        <h3 className="shimmer-cuisines"></h3>
      </div>
    </div>
  )
}
const Shimmer = () => {
  return (<>
  <div className="shimmer-search-container">
   <div className='shimmer-input'></div>
    </div>
    <div className="shimmer-list">
      {Array(9).fill("").map((e, index) =>{
        return( <ShimmerContent key={index}/>)
      })}
    </div>
  </>

  )
}
export default Shimmer