import React from 'react'

const Carousel = () => {
  return (
    <div style={{ }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  <form class="d-flex" style={{zIndex:"10"}}>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className="carousel-item active">
    
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700?burger" style={{filter:"brightness(50%)"}} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700?pastry" alt="Second slide"/>
    </div>
    
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700?chicken" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
</div>
    </div>

  )
}

export default Carousel
