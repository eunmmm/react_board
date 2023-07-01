import React from "react";

const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id)
  }
  const onEdit = () => {
    handleEdit(item)
  }
  return (
    <>
      <tr>
        <td className="text">{item.id}</td>
        <td className="text">{item.name}</td>
        <td className="text">{item.email}</td>
        <td className="text">{item.phone}</td>
        <td className="btn_edit" onClick={onEdit}>수정</td>
        <td className="btn_delete" onClick={onRemove}>삭제</td>
      </tr>
    </>
  )
}

export default Td;