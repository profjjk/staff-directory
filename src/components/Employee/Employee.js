import React, { useState } from 'react';
import Employees from '../../employees.json';

const style = {
  img: {
    height: "8vh"
  },
  pg: {
    margin: 0,
    padding: 0
  }
}

const Employee = () => {
  const [employees, setEmployees] = useState(Employees);

  return employees.map(employee => (
    <div className="row py-2" id={employee.id} key={employee.id}
      style={{
        background: employee.id % 2 === 0 ? "#fff" : "#f6f5f5"
      }}
    >
      <div className="col-2 d-flex">
        <img className="img-fluid rounded mx-auto"
          style={style.img}
          src={employee.image}
          alt={employee.name}
        />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {employee.name}
        </p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {employee.phone}
        </p>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <a className="text-center" href="#">
          {employee.email}
        </a>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {employee.dob}
        </p>
      </div>
    </div>
  ))
}

export default Employee;