import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SingleProduct = () => {
  const params = useParams()
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)

  if (loading) {
    return <div className='flex h-[90vh] justify-center items-center'>
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }

  if (error) {
    return <div className='flex h-[90vh] justify-center items-center'>
      <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  }
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Product Title and Image */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3">
          <img
            className="w-full h-auto rounded-lg"
            src={data.thumbnail}
            alt="Essence Mascara Lash Princess"
          />
        </div>
        <div className="w-full md:w-2/3 md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-900">
            {data.title}
          </h1>
          <p className="text-xl text-red-500 mt-2">
            ${data.price} <span className="line-through text-gray-500">${(data.price / (1 - (data.discountPercentage / 100))).toFixed(2)}</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">Discount: {data.discountPercentage}% off</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            <p className="ml-2 text-sm text-gray-600">({data.rating} based on {data.reviews.length} reviews)</p>
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div className="mt-6">
        <p className="text-gray-700 text-base">
          {data.description}
        </p>
      </div>
      {/* Product Availability & Shipping Info */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold">Availability:</span>
          <span className="ml-2 text-red-500">{data.availabilityStatus} ({data.stock} left)</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold">Shipping Info:</span>
          <span className="ml-2">{data.shippingInformation}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold">Min Order Quantity:</span>
          <span className="ml-2">{data.minimumOrderQuantity} units</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold">Return Policy:</span>
          <span className="ml-2">{data.returnPolicy}</span>
        </div>
      </div>
      {/* Warranty & Barcode */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          <span className="font-semibold">Warranty:</span>
          <span className="ml-2">{data.warrantyInformation}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-700 font-semibold mr-2">Barcode:</span>
          <img
            className="w-16 h-auto"
            src={data.meta.qrCode}
            alt="QR Code"
          />
        </div>
      </div>
      {/* Add to Cart Button */}
      <div className="mt-6 flex justify-between items-center">
        <button className={data.availabilityStatus === 'In Stock' ? "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300" : "bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"}>
          Add to Cart
        </button>
        <span className="text-sm text-gray-700">SKU: {data.sku}</span>
      </div>
    </div>

  )
}

export default SingleProduct

