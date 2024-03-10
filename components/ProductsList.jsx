import React from 'react'

const ProductsList = ({ data }) => {
    return (
        <div>
            {data.map((itemsList) => (
                <>
                    <p>{itemsList.description}</p>
                    <p>{itemsList.brand}</p>
                    <p>{itemsList.expiryDate}</p>
                    <p>{itemsList.batchNumber}</p>
                </>
            ))}
        </div>
    )
}

export default ProductsList;