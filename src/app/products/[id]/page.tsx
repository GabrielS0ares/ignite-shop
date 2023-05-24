interface ProductProps {
  params : {
    id : string  
  }
}

export default function Products({ params } : ProductProps ){


  return (
    <h1>Products {params.id}</h1>
  )
}