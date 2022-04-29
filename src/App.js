import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./app.css";
import Bounce from "react-reveal/Bounce";
import { handleValues, addItem, deleteItem, handleSubmit } from "./store/reducer/todoSlice";


function App() {
  console.log(localStorage.getItem('data'))
  // get data From reduscer
  const { arr } = useSelector(state => state.todoStore)
  // call Dispatch
  const dispatch = useDispatch();

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <div className="cards">
          <div className="card">
            {/* {loop on Arr For Create Items} */}
            {arr.length > 0 ? arr.map(item => (
              <div className="card-body" key={item.id}>
                <Bounce >
                  <div className='item'>{item.val}</div>
                  <button><span aria-hidden="true" onClick={() => dispatch(deleteItem({ item: item }))}>&times;</span></button>
                </Bounce>
              </div>)) : <div className="no-task">YOU DON`T HAVE ANY TASK</div>}
          </div>
        </div>
        {/* Add  Section */}
        <div className="edit-parent">
          <div className="add-parent">
            <input type="text" className="form-control" placeholder='Todo item'
              name='todo' onChange={(e) => dispatch(handleValues({ e: e.target.value }))} />
            <button className="btn" type="reset" onClick={() => dispatch(addItem())}>Add Item</button>
          </div>
          <small className="form-text">Item Count : {arr.length}</small>
        </div>
      </form >
    </div >
  );
}

export default App;
