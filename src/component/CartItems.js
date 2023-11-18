import { imgCdn } from "./Constant"

const CartItems = ({ list }) => {
  console.log(list)
  return (
    <>
      <div>
        {list.map((item) => {
          return (<div>
            <img className="w-20" src={imgCdn + item.card.info.imageId} />
            <h2>{item.card.info.name}</h2>
            <h1>hey</h1>
            {console.log(item.card.info)}
          </div>)

        })}
      </div>
      <h1>dint work</h1>
    </>
  )
}
export default CartItems