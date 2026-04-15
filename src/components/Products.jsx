import React, { useEffect, useState } from 'react'
import axios from "axios";

const Products = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false)


    const getProducts = async () => {
        setLoading(true)
        let response = await axios.get("https://fakestoreapi.com/products")
        setProduct(response.data)
        setLoading(false)

        // console.log("res", res)
        // fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((item) => setProduct(item))

    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
        return (
            <div className='h-screen w-full flex items-center justify-center text-4xl font-bold'>
                loading...
            </div>
        )
    }


    return (
        <div className='h-screen'>
            {/* <button className='bg-green-900 px-8 py-3 rounded-lg text-white' onClick={handleApi}>Retrieve Data</button> */}
            <div className='grid grid-cols-4 gap-4'>
                {
                    product?.map((item) => {
                        return (
                            <div>

                                <img src={item.image} alt="" />
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products