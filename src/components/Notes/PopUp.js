import "../../PopUp.css"
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrAdd } from 'react-icons/gr';
import "../../Appp.css"
import React, {useState} from "react"
 
const Popup = ({ addLog }) => {
  // const [value, setValue] = React.useState([
  //   {
  //     text: "This is a sampe todo",
  //     desc: "It is a way to generate money"
  //   }
  // ]);
  // const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  

  const Pop = (props) => {
    const [name, setName] = useState();
    const [des, setDes] = useState();

    const handleSubmit = (e) => {
      addLog([name, des]);
      e.preventDefault();
    };

    return(
      <div className="popup-box">
        
        <form 
        onSubmit={(e) => {
        handleSubmit(e);
        }}> 
          {/* <Form.Group> */}
          <input 
            type="text" 
            name="text" 
            className="input"
            placeholder="First Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <br/>

            <input 
            type="text" 
            name="desc"
            className="input" 
            placeholder="Description" 
            value={des}
            onChange={(e) => setDes(e.target.value)}
            />  
            
          {/* <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add name" /> */}
        
          {/* </Form.Group> */}
          <div className="end">
          <Button variant="primary mb-3" type="submit">
            Add
          </Button>
          <Button  variant="primary mb-3" className="close-icon" onClick={props.handleClose}>Close</Button>
          </div>
        </form>
    </div>
    )
  } 

  return (
          <div className="cotan">
            
            {isOpen ? <Pop handleClose={togglePopup}/> : 
            
            <div className="nts">
              <h3>Notes</h3>
              <GrAdd className="ctn" onClick={togglePopup}/> 
            </div>}
          </div>
    
    
    
  );
};
 
export default Popup;