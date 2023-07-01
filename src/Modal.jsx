import React, { useState } from 'react';

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  }
  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  }
  return (
    <div className="box_modal">
      <h2 className="title">고객 정보 수정하기</h2>
      <form onSubmit={onSubmitEdit}>
        <div className="box_text">
          ID: {edited.id}
        </div>
        <div className="box_text">
          Name: <input type="text" name="name" value={edited.name} onChange={onEditChange} />
        </div>
        <div className="box_text">
          Email: <input type="text" name="email" value={edited.email} onChange={onEditChange} />
        </div>
        <div className="box_text">
          Phone: <input type="text" name="phone" value={edited.phone} onChange={onEditChange} />
        </div>
        <div className="box_button">
          <button type="button" className="btn_cancel" onClick={onCancel}>취소</button>
          <button type="submit" className="btn_submit">수정</button>
        </div>
      </form>
    </div>
  )
}

export default Modal;