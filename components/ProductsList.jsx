import React from 'react'

const ProductsList = ({ data }) => {
    return (
        <table class="table-fixed w-full mb-5">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Expiry date</th>
                    <th>Batch number</th>
                </tr>
            </thead>
            <tbody>
                {data.map((itemsList) => (
                    <tr className='odd:bg-white even:bg-slate-50 h-10'>
                        <td>{itemsList.description}</td>
                        <td>{itemsList.brand}</td>
                        <td>{itemsList.expiryDate}</td>
                        <td>{itemsList.batchNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductsList;