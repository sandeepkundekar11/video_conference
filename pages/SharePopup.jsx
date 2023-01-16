import next from "next";
const SharePopup=({Share,Cancel,scvalue,scChange})=>
{
    return(
        <div className="popup_container">
            <div className="sharepopup mr-sm-4">
            <h3 className="text-white">Share a Video</h3>
            <input onChange={scChange} value={scvalue} placeholder="YouTub link or Direct video link" className="" style={{"width":"16.6rem","margin":"auto","height":"2.6rem"}} type="text" name="" id="" />
            <div className="btns d-flex">
            <button className="btn text-white w-50" onClick={Cancel}>cancel</button>
            <button className="btn text-white  w-50" onClick={Share}>Share</button>
            </div>
        </div>
        </div>
    )
};
export default SharePopup;