import next from "next";
import { use, useState } from "react";
const Form = ({ Addmeeting, JoinMeeting, join_function, join_value }) => {

  const [join, setjoin] = useState(false)
 
  return (
    <>
      {/* <button className="btn btn-danger mr-3 mt-3">Schedule meeting</button> */}
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
    </>
  )
};
export default Form;