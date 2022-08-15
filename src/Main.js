import React from "react"; 
import {useState, useEffect} from "react"; 
import './index.css'; 

 
export default function Mainin(){ 
    const [slider, setslider] = useState(0);
    const [pageView, setpageView] = useState(0);
    const [annually, setannually] = useState(false);
    const [cost, setcost] = useState(0);
    const [costY, setcostY] = useState(0);
  const [theme,settheme] = useState("light"); 
  const changetheme =()=>{ 
    if(theme === "dark"){ 
      settheme('light'); 
    }else{ 
      settheme('dark'); 
    } 
 
  } 
  useEffect(() => { 
    document.body.className = theme; 
  }, [theme]) 


    const handleOnChange = (event)=>{
        setslider(event.target.value);
        setpageView(event.target.value*0.5);
        setcost(event.target.value/5);
        let total=Math.round(event.target.value*0.2*12*0.75);
        setcostY(total);
    }
     
    return( 
        <> 
        <main className="container" > 
      <header> 
        <h1>Simple, traffic-based pricing</h1> 
        <p>Sign-up for our 30 day trial.No credit card required</p> 
        <div className="form-check form-switch pull-right" > 
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> changetheme()}/> 
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> 
</div>  
      </header> 
      <aside> 
        <div className="subcontainer"> 
         
          <div className="viewers"><span>{pageView}</span>k pageviews</div> 
          <div className="price"> 
            {annually && (<><span>$<span className="pricefix">{costY}</span></span> 
            <span className="month"> /year</span></>) }
            {!annually && (<><span>$<span className="pricefix">{cost}</span></span> 
            <span className="month"> /month</span></>) }
          </div>  
           
        </div> 
         <div className="loading "> 
          <div className="loading-bar"> 
            <input type="range" min="1" max="1000" step="1" value={slider} onChange={handleOnChange} className="myrange"/> 
          </div> 
           
          <div className="monthly"> 
            <span>monthly Billing</span> 
            <label className="switchh" > 
              <input type="checkbox" checked={annually}
            onChange={() => setannually(!annually)}/> 
              <span className="slider"></span> 
            </label> 
           
            <span>Yearly Billing</span> 
            <span className="discount">25% discount</span> 
            </div> 
          </div> 
 
          <hr/> 
          <div className="ulitems"> 
            <ul> 
              <li>Unlimited websites</li> 
              <li>100% data ownership</li> 
              <li>email reports</li> 
            </ul> 
            <button>Start my-trial</button> 
          </div> 
      </aside> 
    </main> 
        </> 
    ) 
}