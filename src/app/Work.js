import React from 'react'
import './css/homeContent.css';
import GridDividedNumber from "./components/GridDividedNumber"
import "./css/grid.css"


const centerStyle = {
  margin: '40px',
};

const cardStyle = {
  height: '300px',
}

const Work = () => (


<div className = "workContent" >

<section class="hero is-info">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Work
      </h1>
      <h2 class="subtitle">
        A Sample of My Work
      </h2>
    </div>
  </div>
</section>

<br/>

<center style={centerStyle}>
<GridDividedNumber style={cardStyle} />

</center>
</div>

)
export default Work
