

import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

import React,{ useState } from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect,

} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";
import { json } from 'react-router-dom';

function Countrys() {
  const [countryid, setCountryid] = useState(0);

  

  const [stateid, setstateid] = useState(0);

  const [adds, setAdds] = useState({
    country:"",
    state:"",
    city:""
  });

  const [ada, setAda] = useState({
    country:"",
    state:"",
    city:"",
    name:"",
    zip:""
  });

const handlechange=(e)=>{

  console.log(e.name)


    adds.country=e.name 
  

}

const handlechangestate=(e)=>{
    adds.state=e.name 
    console.log(adds)
}

const handlechangecity=(e)=>{
   adds.city=e.name 
    //set the form values

    console.log(adds)
    var copyof=adds
    setAda(copyof);
    console.log(ada)
}

  return (
    <div>
      {/* <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
      <h6>State</h6>
      <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
      <h6>City</h6>
      <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      /> */}

      
      <h1>After Change</h1>
      <br></br>
      <br></br>
      <br></br>

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



      
      
    </div>
  );
}

export default Countrys