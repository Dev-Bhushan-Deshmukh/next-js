'use client'
import { useEffect, useState } from 'react'
// import React from 'react'
import { nationalParks } from '../data/np'
import classes from './parks.module.css'
export default function Parks(){
const[nationalParkList,setNationalParks]=useState(nationalParks);
  // console.log(nationalParks.length)
  const [dropdown,setDropDown]=useState();
  const [dropdownState,setDropDownState]=useState();
  useEffect(()=>{
    let stateArr=[];
    for(let i of nationalParks)
      {
       
        stateArr.push(i.state)
    
      }
    
      stateArr=[...new Set(stateArr)]
      setDropDownState(stateArr)
  
    let arr=[];
    for(let i of nationalParks)
      {
        for(let j of i.famousFor)
        arr.push(j)
    
      }
    
    arr=[...new Set(arr)]
    // console.log(arr)
    setDropDown(arr);
  },[])

function searchItems(e){

let filterTimeout=setTimeout(() => {
  
let searchItem=e.target.value;
setNationalParks(nationalParks.filter((item)=>item.name.toLowerCase().includes(searchItem.toLowerCase())))
}, 2000);
return ()=>{
 clearTimeout(filterTimeout); 
}

}
  return (
    <div id={classes['park-main-container']} >
<div className={classes['news-container']}>




</div>
<div className={classes['park-list']}>
  <input onChange={searchItems} />
  
  <select>
    {dropdownState && dropdownState.map((item)=><option>{item}</option>)}
  </select>
   <select>
    {dropdown && dropdown.map((item)=><option>{item}</option>)}
  </select>
{
nationalParkList.map((park)=>  
<>
{/* <i class="fa-solid fa-tree" style="color: #ffffff;"></i> */}
<li key={park.name}>{park.name}</li>
</>

)

}


  
</div>
<div className={classes['park-info']} >



  
</div>

      
    </div>
  )
}
