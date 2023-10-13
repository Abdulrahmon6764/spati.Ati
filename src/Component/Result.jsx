import './result.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Result() {
  const [title, SetTitle] = useState("spati.At");
  return (
    <div>
     <div className='container backhome_button'>
      <button type='submit'><i class="fa-solid fa-arrow-left"></i>  <Link to='/' style={{textDecoration:"none",color:"black"}}>Back to home</Link></button>
    </div> 

    <div className="titl">
        <h1>{title}</h1>
      </div><br></br>

      <div className='head_result'>
        <h2>Result for vending machines nearby</h2>
      </div><br></br>

      <div className='dev_result_one container col-4'>
      <div className='backColo'>
       <h1>Brothers Store</h1>
       <p><i class="fa-solid fa-location-dot"></i> Taborstrasse 16, 1020 Vienna</p>
       <div className='result_button'>
        <button  type='submit' className='buttone'><i class="pe-2 fa-solid fa-phone"></i> Call</button>

        <button type='submit' className='buttontwo'><i style={{border:"3px solid black", borderRadius:"50%",padding:"2px 3px 4px 8px",fontSize:"17px",}} class="pe-2 fa-solid fa-info"></i> More Info</button>
       </div>
       </div>
      </div><br></br>

      <div className='dev_result_one container col-4'>
      <div className='backColo'>
       <h1>Brothers Store</h1>
       <p><i class="fa-solid fa-location-dot"></i> Taborstrasse 16, 1020 Vienna</p>
       <div className='result_button'>
        <button  type='submit' className='buttone'><i class="pe-2 fa-solid fa-phone"></i> Call</button>

        <button type='submit' className='buttontwo'><i style={{border:"3px solid black", borderRadius:"50%",padding:"2px 3px 4px 8px",fontSize:"17px",}} class="pe-2 fa-solid fa-info"></i> More Info</button>
       </div>
       </div>
      </div><br></br>

      <div className='dev_result_one container col-4'>
      <div className='backColo'>
       <h1>Brothers Store</h1>
       <p><i class="fa-solid fa-location-dot"></i> Taborstrasse 16, 1020 Vienna</p>
       <div className='result_button'>
        <button  type='submit' className='buttone'><i class="pe-2 fa-solid fa-phone"></i> Call</button>

        <button type='submit' className='buttontwo'><i style={{border:"3px solid black", borderRadius:"50%",padding:"2px 3px 4px 8px",fontSize:"17px",}} class="pe-2 fa-solid fa-info"></i> More Info</button>
       </div>
       </div>
      </div>


    </div>
  )
}

export default Result