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

function Employee(props) {
  return (
    <div className="row py-2">
      <div className="col-2 d-flex">
        <img className="img-fluid rounded mx-auto"
          style={style.img}
          // src={props.image}
          // alt={props.name}
          src={'img/lincoln.jpg'}
          alt={'Abraham Lincoln'}
        />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {/* {props.name} */}
          Abraham Lincoln
        </p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {/* {props.phone} */}
          (555) 123-4567
        </p>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <a className="text-center" href="#">
          {/* {props.email} */}
          abe@president.com
        </a>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="text-center" style={style.pg}>
          {/* {props.dob} */}
          03/04/1861
        </p>
      </div>
    </div>
  )
}

export default Employee;