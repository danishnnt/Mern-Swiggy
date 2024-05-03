import React from 'react'

const Card = () => {
  return (
    <div className="card mt-3" style={{ "width": "18rem" , "maxHeight":"360px" }}>
        <img src="" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is some importanat text.
          </p>
          <div className="container w-100">
           <select className="m-2 h-100 rounded">
            {Array.from(Array(6) , (e,i) => {
              return(
                <option key={i+1} value={i+1}> {i+1}</option>
              )
            }
            )}
           </select>
           <select className="m-2 h-100 rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
           </select>
           <div className="d-inline">Total Price</div>
          </div>
        </div>
      </div>
  )
}

export default Card