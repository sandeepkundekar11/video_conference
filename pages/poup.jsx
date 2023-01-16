import next from "next";
const Popup = ({ shareScreen, record, muteVideo, invite, share, stop, stopvideofunction }) => {
    return (
        <div className="popup d-flex" style={{ "flexDirection": "column" }}>

            <button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={shareScreen}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg> <p className="mt-3 pl-2">shareScreen</p></button>
            {/* <button className="btn btn-primary" onClick={record}>recordScreen</button> */}
            <button className="btn btn-primary" onClick={muteVideo}>muteEveryone</button>
            <button className="btn btn-primary" onClick={invite}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-288H96q-40 0-68-28t-28-68V640q0-40 20-88t48-76L476 68q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213L853 896h299V597zM512 213 213 512h299V213zm196 647 316-316V128H640v416q0 40-28 68t-68 28H128v640h512v-256q0-40 20-88t48-76zm956 804V512h-384v416q0 40-28 68t-68 28H768v640h896z" />
                </svg> invite</button>
            {
                stop ?
                    <button className="btn btn-primary" onClick={share}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg> Share Video</button> :
                    <button className="btn btn-primary" onClick={stopvideofunction}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg> Stop Video</button>
            }
        </div>
    )
};
export default Popup;