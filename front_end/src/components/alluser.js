
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function AllUser() {

  var navigate= useNavigate();
    const [leads, setLeads] = useState([{
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
    
    
    }]);
    
    const updatefunc=(e)=>{
console.log(e)



sessionStorage.setItem("id",e);
      navigate("/update")

    }


   // var navigate = useNavigate();


     useEffect(()=>{

      allusers()
      
      },[]);

      const allusers=()=>{

        
        var helper = new XMLHttpRequest();
    
        
        const url="http://localhost:8080/user/lead"

        helper.onreadystatechange=()=>{
    
      
            if(helper.readyState === 4 )
            {
              console.log(helper);
                var result=JSON.parse(helper.responseText);
                
                setLeads(result)
                
            }
        }
    
      
        helper.open("GET",url)
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send()
      }

      const deletes=(e)=>{


        var helper = new XMLHttpRequest();
    
        
        const url="http://localhost:8080/user/lead/"+e

        helper.onreadystatechange=()=>{
    
      
            if(helper.readyState === 4 )
            {
              
              allusers()
            }
        }
    
      
        helper.open("Delete",url)
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send()



      }
      

    
    
    return (
      <>

      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Company</th>
          <th scope='col'>Booking</th>
          <th scope='col'>Interest</th>
          <th scope='col'>Type</th>
          <th scope='col'>Source</th>
          <th scope='col'>Created By</th>
          <th scope='col'>Created Date</th>
          <th scope='col'>Comments</th>


          <th scope='col'>Edits</th>
          <th scope='col'>Actions</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      {
            leads.map((le)=>{
                return <>
      <MDBTableBody>
        
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-1'>
                <p className='fw-bold mb-1'>{le.fname} {' '} {le.lname}</p>
                <p className='text-muted mb-0'>{le.email}</p>
              </div>
            </div>
          </td>

          <td>
            <p className='fw-bold mb-0'>{le.c_name}</p>
            <p className='text-muted mb-0'>{le.c_number}</p>
            <p className='text-muted mb-0'>{le.country} {' '}</p>
          </td>

          <td>
            <MDBBadge color='success' pill>
              {le.booking_type}
            </MDBBadge>
          </td>

          <td>{le.interest}</td>



          <td>{le.lead_type}</td>

          <td>{le.lead_source}</td>

          <td>{le.created_by}</td>

          <td>{le.create_date}</td>

          <td><p className='text-muted mb-0'>{le.comment} {' '}</p></td>


          <td>
            <MDBBtn color='link' rounded size='sm' onClick={()=>{updatefunc(le.id)}} >
              Edit
            </MDBBtn>
          </td>

          <td>
          <button className="btn btn-sm btn-outline-danger" onClick={()=>{deletes(le.id)}}>
            Delete
          </button>
          </td>

          
        </tr>
        
       
      </MDBTableBody>
      </>
        })}
    </MDBTable>


      </>
                
    );
  }
  
  export default AllUser;