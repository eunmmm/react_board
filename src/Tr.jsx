import React from "react";
import Td from './Td'

const Tr = ({ info, handleRemove, handleEdit }) => {
  return (
    <tbody>
      {info.flatMap(i => i.map(item => (
        <Td key={item.id} item={item} handleRemove={handleRemove} handleEdit={handleEdit} />
      )))}
    </tbody>
  )
}

export default Tr;