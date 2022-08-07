import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="add_btn mt-2">
                <NavLink to="register" className='btn btn-primary mb-2'><i class="fa-solid fa-plus"></i>Add Data</NavLink>
            </div>
            <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">ID</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Phn_No</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Harsh</td>
      <td>harshvats@gmail.com</td>
      <td>MERN Stack Developer</td>
      <td>7521131233</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><RemoveRedEyeIcon/></button>
        <button className='btn btn-info '><CreateIcon/></button>
        <button className='btn btn-danger '><DeleteIcon/></button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sharma</td>
      <td>harshsharma@gmail.com</td>
      <td>MEAN Stack Developer</td>
      <td>9713234354</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success '><RemoveRedEyeIcon/></button>
        <button className='btn btn-info '><CreateIcon/></button>
        <button className='btn btn-danger '><DeleteIcon/></button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Vaibhav</td>
      <td>vaibhavvats321@gmail.com</td>
      <td>Data Scientist</td>
      <td>6334929329</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success '><RemoveRedEyeIcon/></button>
        <button className='btn btn-info '><CreateIcon/></button>
        <button className='btn btn-danger '><DeleteIcon/></button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home
