import next from "next";
import { use, useState } from "react";
const Form = ({ Addmeeting, JoinMeeting, join_function, join_value }) => {

  const [join, setjoin] = useState(false)
  const[sechedulepopup,setsechedulepopup]=useState(false)
  const [scheduletime, setscheduletime] = useState()
  const[secheduledate,setsecheduledate]=useState()
 
  return (
    <>
      <button className="btn btn-danger mr-3 mt-3" onClick={()=>
      {
         let hostpassword=prompt('Enter thr password')
         if(hostpassword=="sandeep")
         {
          setsechedulepopup(!sechedulepopup)
         }
         else
         {
          alert("You are not a host")
         }
      }}>Schedule meeting</button>
      <div className="form d-flex justify-content-center align-items-center" style={{ "width": "100vw ", "height": "100vh", "flexDirection": "column" }} >
        <button className="btn btn-primary m-3" style={{ "height": "2.3rem", "borderRadius": "3rem", "width": "250px" }} onClick={Addmeeting}> New meeting</button>
        <button className="btn btn-primary m-3" style={{ "height": "2.3rem", "borderRadius": "3rem", "width": "250px" }} onClick={() => {
          setjoin(!join)
        }}>Join with a code</button>

        {
          join ?
            <div className="d-flex justify-content-center align-items-center" style={{ "flexDirection": "column" }}>
              <p className="text-center">Enter the code provided by the meeting organiser</p>
              <div className="d-flex justify-content-center align-items-center" >
                <input onChange={join_function} className="" type="text" value={join_value} id="" style={{ "height": "2.3rem", "width": "270px" }} />
                <button className="btn btn-primary" style={{ "height": "2.3rem" }} onClick={JoinMeeting}>Join</button>
              </div>
            </div> : ""
        }
      </div>

      {
        sechedulepopup ?
        <div className="Schedule">
      <div className="schedule_popup pt-3 d-flex justify-content-center align-items-center" style={{"flexDirection":"column"}}>
        <h5 className="text-white text-center pb-2">Only host can set the meeting</h5>
        <div className="d-flex justify-content-center">
          <input type="time" value={scheduletime}  onChange={(e)=>
          {
            setscheduletime(e.target.value)
          }}/>
          <input type="date" value={secheduledate} onChange={(e)=>
          {
            setsecheduledate(e.target.value)
          }} />
        </div>
       <div className="d-flex mt-2 ">
       <button className="btn btn-primary mr-2" onClick={()=>
      {
        
        setsechedulepopup(!sechedulepopup)
      }}>close</button>
       <button className="btn btn-primary " onClick={()=>
      {
        console.log(scheduletime)
        console.log(secheduledate)
      }}>Schedule</button>
       </div>
      </div>
      </div>
      :""
      }
    </>
  )
};
export default Form;