import React from 'react'
import DateFormatter from './DateFormatter';

const ProductsList = ({ data }) => {
    return (
        <div className='overflow-x-auto'>
            <table className="mb-5 item-table">
                <thead>
                    <tr className='bg-stone-50 h-12 text-left'>
                        <th className='pl-5'>Description</th>
                        <th>Brand</th>
                        <th>Expiry date</th>
                        <th>Batch number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((itemsList) => (
                        <tr className='odd:bg-white even:bg-stone-50 h-10'>
                            <td className='pl-5'>{itemsList.description}</td>
                            <td>{itemsList.brand}</td>
                            <td><DateFormatter date={itemsList.expiry}/></td>
                            <td><DateFormatter date={itemsList.batchNumber}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;