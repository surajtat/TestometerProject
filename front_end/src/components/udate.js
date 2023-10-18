import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
} from 'mdb-react-ui-kit';


function Update() {


  const [lead, setLead] = useState({
    id:"",
      fname:"",
      lname:"",
      c_name:"",
      c_number:"",
      comment:"",
      country:"",
      created_by:"",
      email:"",
      interest:"",
      lead_source:"",
      lead_type:"",
      booking_type:"",
      create_date:""
     
  });

  var navigate = useNavigate();

  // const handleChange = (e) => {
  //   var copyOfLead = { ...lead };
  //   copyOfLead[e.target.id] = e.target.value;
  //   //set the form values
  //   setLead(copyOfLead);
  // };

  useEffect(()=>{
      
    const user_id=sessionStorage.getItem("id");

    

    console.log(user_id+"This is get session")

    var helper = new XMLHttpRequest();

    
    const url="http://localhost:8080/user/lead/"+user_id

    helper.onreadystatechange=()=>{

  
        if(helper.readyState === 4 )
        {
          console.log(helper);
            var result=JSON.parse(helper.responseText);

            console.log("this is result "+result)
            
            
            setLead(result)

            console.log(result)
            
        }
    }

  
    helper.open("GET",url)
    helper.setRequestHeader("Content-Type", "application/json")
    helper.send()

    

  },[]);

  const submit=()=>{

    // console.log(lead+"after lead")
    // console.log(lead)
    // console.log(lead+"after lead")

    const change_id=sessionStorage.getItem("id");

   
    
    var urls="http://localhost:8080/user/"+change_id 


    var userObjectInStringFormat = JSON.stringify(lead);
  
   console.log(userObjectInStringFormat);
    
    var helper = new XMLHttpRequest();
    helper.onreadystatechange=()=>{
      
      if(helper.readyState==4 && helper.status==200)
      {
   
      
        var result=JSON.parse(helper.responseText);
         if(result!=null)
        {
          alert("Updated Lead !!!!!!!!!!")
         navigate("/all_lead")
        }
  
      }
  
      
  };
  helper.open("PUT",urls);
  
  helper.setRequestHeader("content-type","application/json")
  
  helper.send(userObjectInStringFormat);
  };


 
  


  const onChange = (e) => {
    var copyOfLead = { ...lead };
    copyOfLead[e.target.id] = e.target.value;
    //set the form values

    console.log(lead);
    setLead(copyOfLead);

    
  };

    return (
      <>
      <br></br>
      <br></br>
      <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.fname}
          name='fname'
          onChange={onChange}
          id='fname'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.lname}
          name='lname'
          onChange={onChange}
          id='lname'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            value={lead.email}
            id='email'
            placeholder='Email'
            onChange={onChange}
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>



      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.c_name}
          name='c_name'
          onChange={onChange}
          id='c_name'
          required
          label='Company name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.c_number}
          name='c_number'
          onChange={onChange}
          id='c_number'
          required
          label='Company number'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
      <MDBInputGroup textBefore='Country'>
          <input
            type='text'
            className='form-control'
            value={lead.country}
            id='country'
            placeholder='Country'
            onChange={onChange}
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      


      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.interest}
          name='interest'
          onChange={onChange}
          id='interest'
          required
          label='Interest'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.lead_source}
          name='lead_source'
          onChange={onChange}
          id='lead_source'
          required
          label='Lead Source'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            value={lead.booking_type}
            id='booking_type'
            placeholder='Booking Type'
            onChange={onChange}
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>






      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={lead.comment}
          name='comment'
          onChange={onChange}
          id='comment'
          required
          label='Comment'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={lead.lead_type}
          name='lead_type'
          onChange={onChange}
          id='lead_type'
          required
          label='lead_type'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={lead.create_date}
          name='create_date'
          onChange={onChange}
          id='create_date'
          required
          label='Created Date'
        />
      </MDBValidationItem>

      
      <div className='col-12'>
        <MDBBtn type='submit' onClick={submit}>Submit form</MDBBtn>
      </div>
    </MDBValidation>
  
      
      
      </>
    );
  }
  
  export default Update;