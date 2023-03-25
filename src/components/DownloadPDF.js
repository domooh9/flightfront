import { useState, useEffect } from 'react';
import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Table, Button } from 'react-bootstrap';

function DownloadPDF() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  function generateRandomTime() {
    const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#user-table' });
    doc.save('users.pdf');
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Login Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{generateRandomTime()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={downloadPDF}>Download PDF</Button>
    </div>
  );
}

export default DownloadPDF;