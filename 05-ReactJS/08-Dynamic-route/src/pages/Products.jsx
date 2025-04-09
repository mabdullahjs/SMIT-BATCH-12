import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

const Products = () => {
  const [loading, error, data] = useFetch('https://dummyjson.com/products')

  if (loading) {
    return <div className='flex h-[90vh] justify-center items-center'>
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
  return (
    <div className='flex justify-center items-center gap-5 flex-wrap my-14'>
      {data.products.map(item => {
        return <Card key={item.id} title={item.title} description={item.description} image={item.thumbnail} id={item.id} />
      })}
    </div>
  )
}

export default Products