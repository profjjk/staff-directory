import React from 'react';

const style = {
  img: {
    height: "8vh"
  },
  pg: {
    margin: 0,
    padding: 0
  }
}

const Employee = (props) => {
  return props.employees.map(({id, name, image, phone, email, dob}, index) => (
    <div className="row py-2" key={id}
      style={{
        background: (index + 1) % 2 === 0 ? "#fff" : "#f6f5f5"
      }}
    >
      <div className="col-2 d-flex">
        <img className="img-fluid rounded mx-auto"
          style={style.img}
          src={image}
          alt={name}
        />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {name}
        </p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {phone}
        </p>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <a className="text-center" href="#">
          {email}
        </a>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {dob}
        </p>
      </div>
    </div>
  ))
}

export default Employee;