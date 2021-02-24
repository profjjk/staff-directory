import React from 'react';

const style = {
  header: {
    background: "#0f3460",
    color: "#fff",
    height: "10vh"
  },
  redBar: {
    background: "#e94560",
    height: "5px"
  }
}

function Header() {
  return (
    <header className="row">
      <div className="col-12 p-2" style={style.header}>
        <h1 className="text-center">Staff Directory</h1>
        <p className="text-center">Click on carrots to filter by heading or use the search box to narrow your results</p>
      </div>
      <div className="col-12" style={style.redBar}></div>
    </header>
  )
}

export default Header;