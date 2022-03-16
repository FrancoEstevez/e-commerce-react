import { useParams } from "react-router-dom"


const ItemDetail = ({producto}) => {
  const { detailId } = useParams()
  console.log(detailId)
  return (
    
    <div>
        {producto.id}
    </div>
  )
}

export default ItemDetail