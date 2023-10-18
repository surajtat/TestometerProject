

import {useNavigate} from "react-router-dom";



import React,{ useState } from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
 
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

import {
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function AddLead() {

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);


  const [lead, setLead] = useState({
     

      fname:"",
      lname:"",
      c_name:"",
      c_number:"",
      comment:"",
      country:"",
      state:"",
      city:"",
      created_by:"",
      email:"",
      interest:"",
      lead_source:"",
      lead_type:"",
      create_date:"",
      booking_type:""
      
  
  });

  var navigate = useNavigate();

  const handleChange = (e) => {
    var copyOfLead = { ...lead };
    copyOfLead[e.target.id] = e.target.value;
    //set the form values
    setLead(copyOfLead);
  };

  const submit=()=>{

    console.log(lead)
    
    
    var userObjectInStringFormat = JSON.stringify(lead);
  
    console.log(userObjectInStringFormat);
    
    var helper = new XMLHttpRequest();
    helper.onreadystatechange=()=>{
      
      if(helper.readyState==4 && helper.status==201)
      {
   
      
        var result=JSON.parse(helper.responseText);
         if(result!=null)
        {
          alert("Registation done...!!!")
         navigate("/")
        }
  
      }
  
      
  };
  helper.open("POST","http://localhost:8080/user/lead");
  
  helper.setRequestHeader("content-type","application/json")
  
  helper.send(userObjectInStringFormat);
  };



  const handlechange=(e)=>{

    console.log(e.name)
  
  
    lead.country=e.name 
    
  
  }

  const handlechangestate=(e)=>{
    lead.state=e.name 
    
}


const handlechangecity=(e)=>{
  lead.city=e.name 
   //set the form values

  
   
   console.log(lead)
}











    return (
      <>
      <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD LEAD</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='First Name' id='fname' type='text' className='w-100' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Last Name' id='lname' type='text' className='w-100' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Company Name' id='c_name' type='text' className='w-100' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='email' type='email' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Contact Number' id='c_number' type='number' onChange={handleChange}/>
        </div>

        <MDBDropdown group name="country" >
        <CountrySelect
        
       // value ='country'
        onChange={(e) => {
          setCountryid(e.id);
          console.log(e.name)
          handlechange(e);

        
        }}
        
        
        placeHolder="Select Country"
        
      /> 
      </MDBDropdown>

      <MDBDropdown group name='state'>
      <StateSelect
     
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
          handlechangestate(e);
        }}
        
        placeHolder="Select State"
        id="state"
      />
      </MDBDropdown>

      <MDBDropdown group >
      <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
          handlechangecity(e);
        }}
        id="city"
        
        
        placeHolder="Select City"
      />
      
      </MDBDropdown>
      <br></br>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Created By' id='created_by' type='text' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Interest' id='interest' type='text' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Lead Source' id='lead_source' type='text' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Customer Type' id='lead_type' type='text' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Booking Type' id='booking_type' type='text' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Date' id='create_date' type='date' onChange={handleChange}/>
        </div>
        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Comment' id='comment' type='text' onChange={handleChange}/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg' onClick={submit}>ADD LEAD</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
      
      
      </>
    );
  }
  
  export default AddLead;
  
