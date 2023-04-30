import { Button, Container, TableCell, TextField, Paper } from "@mui/material";
import React, { useState } from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
// import { removeData } from "../redux/Action/action";
export default function Home(props) {
  const [name, setName] = useState("");
  const [lName, setlName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { id: Date.now(), name, lName, age, email, password }
    props.addContact(data);
  }
  const handleDelete = (id) => {
    props.deleteContact(id)
  }
  const handleRemove = () => {
    props.removeContact([])

  }

  return (
    <Container className="classes.root">

      {console.log(">>>>calling from home", props)}
      <form className="todo-form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Last name"
          value={lName}
          onChange={(e) => setlName(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" >Add data</Button>
      </form>
      
      <TableContainer component={Paper} className="element">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>LAST NAME</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PASSWORD</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.contacts.data && props.contacts.data.map((element) =>
              (<TableRow key={element.id}>
                <TableCell>{element.name}</TableCell>
                <TableCell>{element.lName}</TableCell>
                <TableCell>{element.age}</TableCell>
                <TableCell>{element.email}</TableCell>
                <TableCell>{element.password}</TableCell>
                <TableCell><Button variant="contained" onClick={() => handleDelete(element.id)}>Delete</Button></TableCell>
              </TableRow>)
             )}
          </TableBody>
        </Table>
      </TableContainer>
      

      <div>
        <Button variant="outlined" onClick={() => handleRemove()}>Remove All</Button>
      </div>

    </Container>
    
  );
};
// export default Home;
