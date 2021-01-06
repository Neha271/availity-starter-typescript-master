import { Form ,Input} from "@availity/form";
import Select from "@availity/select";
import { Button } from "reactstrap";
import * as yup from "yup";
import { Route } from 'react-router';
import "@availity/yup";
import {BrowserRouter as Router,useHistory} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Home from "./Home" ;


 export default function Login() {


  const [fname, setfName] = useState('');
  const [sname, setsName] = useState('');

  const rootElement = document.getElementById("root");
 
 /*  function handleChange(event) {
    setDisable(event.target.disable);
  } */

  const history = useHistory();
  const handleHistory=()=>{
   history.push('/Home');

  }
  useEffect(() => {
    console.log("updating the  first name " )
  },[fname])

  return (
    <div>
    <Route path="/Home" component ={Home} />
      <Form
        initialValues={{
          justTheInput: undefined
        }}
        onSubmit={(values) => window.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          justTheInput: yup.string().required("This field is required.")
        })}
      >
       <h3>enter ur name </h3>
       <h4>first name :</h4>
       <Input  type ="text"
       name="hello"
       value={fname}
       onChange={
         e=> setfName(e.target.value)
       } placeholder="first name " /><br />
        <h4> second Name:</h4>
        <Input  type ="text"
       name="hello"
       value={sname}
       onChange={
         e=> setsName(e.target.value)
       } placeholder="second name " /><br />
      
        <Select
          id="justTheInput"
          name="justTheInput"
          isMulti={false}
         
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 },
            { label: "Option 3", value: 3 }
          ]}
        />
    

        <Button
          className="mt-3"
          color="primary"
         // disabled={disable}
          type="submit"
          onClick={handleHistory}
        >
          Submit
        </Button>

      </Form>
    
   
    </div>

  );
}
