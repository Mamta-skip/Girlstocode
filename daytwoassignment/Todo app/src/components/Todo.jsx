import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Todo() {
  const [item, setItem] = useState("");
  const [todolist, setTodoList] = useState([]);

  const handleAddTodo = () => {
    setTodoList([...todolist, { item: item }]);
    setItem(''); 
  };

  const handleDeleteTodo = (index) => {
    
    setTodoList([...todolist.slice(0, index), ...todolist.slice(index + 1)]);
  };
  // const newList =[...todoList]
  // newList.slice(index,1)
  // settodo(newList)

  return (
    <Container >

      <div>
        
        <input
          type="text"
          placeholder='Enter todo item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div>
        <Row>
         
            <ul>
              {todolist.map((items, index) => (
                <li key={index}>{items.item}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
       
          </li>
              ))}
                </ul>
               
              
          
           
        </Row>
      </div>
    </Container>
  );

              }
export default Todo
              
