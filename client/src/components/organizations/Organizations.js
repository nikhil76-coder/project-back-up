import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';
import './index.css';
import MaterialTable from 'material-table';
import 'material-icons';

const Organizations = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [organizationData, setOrganizationData] = useState([]);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  useEffect(() => {

    getOrganizationData();
    setCount(count + 1);
  }, [value]);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  const getOrganizationData = () => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return fetch("http://localhost:5000/organizations/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setOrganizationData(JSON.parse(result))
      })
      .catch(error => console.log('error', error));
  }

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { title: "Organization", field: "organization" },
    // { title: "Website", field: "Website" },
    // { title: "Description", field: "Description" },
    // { title: "Address", field: "address" },
    { title: "Contact Person", field: "contactperson" },
    { title: "Email", field: "email" },
    { title: "Number", field: "number" }, 
  ];


  return (
    <div style={{ padding: 16, margin: 'auto', paddingTop: 100 }}>
      <MaterialTable
        title='Organizations'
        columns={columns}
        data={organizationData}
        options={{
          filtering: true // false to disble column specific filter 
        }} />
      <br />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Organizations
      </Button>

      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default Organizations;
