
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';

function App() {

        //state
        const[friend,setFriend] = useState();
        //function defination
        let myFriend=(e)=>{ 
        
        console.log(e.target.value);
        }
        
        //return statement
        
  return (
    <div className="App">
        <Form className="w-25 offset-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type your freind name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>mobile number</Form.Label>
            <Form.Control type="number" placeholder="Enter number" />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>date</Form.Label>
            <Form.Control type="text" placeholder="Enter date" />
            
          </Form.Group>
          <Button variant="primary" type="button" onClick={(e)=>{myFriend(e)}}>
            Submit
          </Button>
        
          
         
         
       </Form>
    </div>
  );
}

export default App;
