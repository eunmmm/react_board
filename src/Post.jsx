import React, { useState } from 'react';

const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    console.log("form", form);
    setForm({
      name: '',
      email: '',
      phone: ''
    })
  }
  return (
    <>
      <h2 className="title">고객 추가하기</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="box_input" name="name" value={form.name} onChange={handleChange} />
        <input type="text" className="box_input" name="email" value={form.email} onChange={handleChange} />
        <input type="text" className="box_input" name="phone" value={form.phone} onChange={handleChange} />
      <button className="add_save" type="submit">저장</button>
      </form>
    </>
  )
}

export default Post;