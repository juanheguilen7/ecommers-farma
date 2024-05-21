import React from 'react'

interface Param {
    params: string
}

const ShowProduct = ({ params }: { params: Param }) => {

    console.log(params);
    
    return (
        <div>ShowProduct</div>
    )
}

export default ShowProduct;