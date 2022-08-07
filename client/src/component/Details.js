import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
  return (
    <div className='container mt-3'>
        <h1 style={{fontWeight:"400"}}>Welcome Vaibhav Vats</h1>

        <Card sx={{ maxWidth: 675 }}>
      <CardContent>
      <div className="add_btn">
          <button className='btn btn-primary mx-2'><CreateIcon/></button>
        <button className='btn btn-danger '><DeleteIcon/></button>
          </div>
        <div className="row">
        <div className="left_view col-lg-6 col-12">
        <img src="../profile.png" alt="profile" style={{width:50}} />
        <h3 className='mt-3'>Name: <span>Vaibhav Vats</span></h3>        
        <h3 className='mt-3'>Age: <span>21</span></h3>     
        <p className='mt-3'> <MailIcon/> Email: <span>vaibhavvats321@gmail</span></p>   
        <p><WorkIcon/> Occupation: <span>MERN Stack Developer</span></p>   
        </div>
        <div className="right_view col-lg-6 col-12">
       
            <p className='mt-5'> <PhoneAndroidIcon/> Mobile: <span>+91 9711293948</span> </p>
            <p className='mt-3'> <LocationOnIcon/> Address: <span>Nakur, Saharanpur</span> </p>
            <p className='mt-3'> Description: <span>hi, Im a web developer  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni.</span> </p>
        </div>
        </div>
        </CardContent>

      </Card>
    </div>
  )
}

export default Details