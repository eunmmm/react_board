import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import { addInfo, removeInfo, editInfo } from './redux/actions';
import './style.scss'

const Board = () => {
  const info = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const afterId = useRef(11);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => { 
        console.log(addInfo(res.data));
        dispatch(addInfo(res.data))
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleSave = (data) => {
    if (data.id) {
      dispatch(editInfo(data));
      console.log('default');
    } else {
      dispatch(addInfo({ ...data, id: afterId.current }));
      afterId.current += 1;
      console.log('concat');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeInfo(id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone
    }
    console.log("selectData 는", selectedData)
    setSelected(selectedData)
  }

  const handleCancel = () => {
    setModalOn(false)
  }

  const handleEditSubmit = (item) => {
    console.log("item 은", item)
    handleSave(item);
    setModalOn(false);
  }
  return (
    <div className="page_board">
      <div className="box_board">
        <table className="box_table">
          <thead>
            <tr>
              <th className="title">Id.</th>
              <th className="title">Name.</th>
              <th className="title">Email.</th>
              <th className="title">Phone.</th>
              <th className="title">Edit</th>
              <th className="title">Delete</th>
            </tr>
          </thead>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </table>
        <Post onSaveData={handleSave} />
        {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit} />}
      </div>
    </div>
  )
}

export default Board;