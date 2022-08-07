import React from 'react'
import { NavLink}  from 'react-router-dom'
import { useState } from "react";


const Edit = () => {
  
  const [inpval,setINP] =  useState({
      name:"",
      email:"",
      age:"",
      phn_no:"",
      add:"",
      work:"",
      desc:""
    })
    const setData = (e)=>{
  console.log(e.target.value);
  const {name,value} = e.target;
  setINP((preval)=>{
         return{
          ...preval,
          [name]:value
         }
  })
    }
  return (
    <div className='container'>
    <NavLink to="/">Home2</NavLink>
    <form className='mt-5'>
      <div className="row">
<div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="name" className="form-label">Name</label>
  <input type="name" name="name" value={inpval.name} onChange={setData} className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
  <label for="exampleInputEmail1" className="form-label">Email</label>
  <input type="text" name="email"value={inpval.email} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
  <label for="text" className="form-label">Age</label>
  <input type="age" name="age" value={inpval.age} onChange={setData} className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
  <label for="text" className="form-label">Phn_No</label>
  <input type="phone" name="phn_no" value={inpval.phn_no} onChange={setData} className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
  <label for="text" className="form-label">Address</label>
  <input type="address" name="address" value={inpval.Address} onChange={setData} className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
  <label for="text" className="form-label">Work</label>
  <input type="work" name="work" value={inpval.work} onChange={setData} className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3">
  <label for="text" className="form-label">Description</label>
  <textarea name="desc" value={inpval.desc} onChange={setData} className='form-control' id="" cols="20" rows="5"></textarea>
</div>
<button type="submit" className="btn btn-success">Submit</button>
</div>

</form>
  </div>
  )
}

export default Edit