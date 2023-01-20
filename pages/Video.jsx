import next from "next";
import { useEffect, useState } from "react";
import Form from "./form";
import Toolbar from "./Toolbar";
import Popup from "./poup";
import SharePopup from "./SharePopup";
const Video = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const generateString = (length) => {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    let [myapi, setmyapi] = useState({})                            //used to set jitsi api
    const [record, setrecord] = useState(false)
    const [modarator, setmodarator] = useState(true)
    const [link, setlink] = useState(generateString(9).trim().toLocaleLowerCase())  //use to generate random invite code
    const [meeting, setmeeting] = useState(false)                 //to set toolbar
    const [popup, setopup] = useState(false)                      //to set popup
    const [joincode, setjoincode] = useState("")                   // used in form  to join meeting from invitation code

    const [userInfo, setuserInfo] = useState("")                  //used to store joined user information
    const [sharedvideo, setsharevideo] = useState(false)         // used for sharepopup to show input popup
    const [shareurl, setshareurl] = useState("")                     // used for sharepopup to get url from input
    const [stopVideo, setstopVideo] = useState(true)                // used to replace share video to stop video
    const [enable_audio, setenable_audio] = useState(false)
    const [enable_video, setenable_video] = useState(false)

    useEffect(() => {
    })
    // console.log(userInfo)

    const Start_meeting = (given_Name) => {
        const domain = 'meet.jit.si';

        const options = {
            roomName: given_Name,
            width: '100%',
            height: 740,
            parentNode: document.querySelector('#meeting'),
            userInfo: {
                email: 'email@jitsiexamplemail.com',
                displayName: ''
            },

            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                prejoinPageEnabled: true
            },

            interfaceConfigOverwrite: {
                SHOW_JITSI_WATERMARK: false,
                DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
                TOOLBAR_ALWAYS_VISIBLE: true,
                TOOLBAR_BUTTONS: [
                    'closedcaptions',
                    'filmstrip',
                    'fullscreen',
                    'participants-pane',
                    'select-background',
                    'settings'
                ],

            },


            onload: function () {
                setmeeting(!meeting)

            }

        };
        setmyapi(new JitsiMeetExternalAPI(domain, options))

    }
    return (
        <div className="d-flex justify-content-end align-items-end" style={{ "flexDirection": "column" }}>
            {
                sharedvideo ?
                    <SharePopup name={"Video"} Share={() => {
                        if (shareurl.length < 2) {
                            alert("Enter correct url")
                        }
                        else {
                            myapi.executeCommand('startShareVideo', shareurl);
                            setsharevideo(!sharedvideo)
                            setstopVideo(!stopVideo)

                        }
                    }} scvalue={shareurl} scChange={(e) => {
                        setshareurl(e.target.value)
                    }} Cancel={() => {
                        setsharevideo(!sharedvideo)
                    }} /> : ""
            }
            <div id="meeting" className="d-flex justify-content-center align-items-center w-100 h-100" style={{ "flexDirection": "column" }}>

            </div>
            {
                meeting ?
                    <Toolbar audio={() => {
                        myapi.executeCommand('toggleAudio');
                        setenable_audio(!enable_audio)
                    }}
                        video={() => {
                            myapi.executeCommand('toggleVideo');
                            setenable_video(!enable_video)
                        }}
                        chat={() => {
                            myapi.executeCommand('toggleChat');
                        }}
                        hand={() => {
                            myapi.executeCommand('toggleRaiseHand')
                        }}

                        tool={() => {
                            setopup(!popup)
                        }}
                        end={() => {
                            myapi.executeCommand('endConference');
                            setmeeting(!meeting)
                            setopup(false)
                            myapi.dispose();
                            setenable_audio(false)
                            setenable_video(false)
                            setsharevideo(false)
                        }}
                        audio_enable={enable_audio}
                        video_enable={enable_video}
                    /> : ""
            }
            <Form
                Addmeeting={() => {
                    Start_meeting(link)
                    setmodarator(true)
                }}
                join_value={joincode}

                join_function={(e) => {
                    setjoincode(e.target.value)
                }}
                JoinMeeting={() => {
                    Start_meeting(joincode)
                    setjoincode("")
                }} />
            {
                popup ?
                    <Popup shareScreen={() => {
                        myapi.executeCommand('toggleShareScreen');
                        setopup(!popup)
                    }}

                        muteVideo={() => {
                            myapi.executeCommand('muteEveryone', 'audio');
                            setopup(!popup)
                        }}
                        invite={() => {
                            const copy = `https://meet.jit.si/${link}`
                            navigator.clipboard.writeText(copy).then(() => {
                                alert("link is copied")
                            })
                            setopup(!popup)
                        }} share={() => {
                            setopup(!popup)
                            setsharevideo(!sharedvideo)
                        }}
                        stopvideofunction={() => {
                            myapi.executeCommand('stopShareVideo');
                            setopup(!popup)
                        }} stop={stopVideo}

                        Start_recording={() => {
                            myapi.executeCommand('startRecording', {
                                mode: 'local', //recording mode, either `local`, `file` or `stream`.
                                onlySelf: false,  //Whether to only record the local streams. Only applies to `local` recording mode.
                                shouldShare: false, //whether the recording should be shared with the participants or not. Only applies to certain jitsi meet deploys.
                            });
                            setrecord(!record)
                            setopup(!popup)
                        }} Stop_recording={() => {
                            myapi.stopRecording('local')
                            setrecord(!record)
                            setopup(!popup)
                        }} start_stop={record}
                        host={modarator} /> : ""
            }


            {/* {
                modarator ?
                    <div className="recorder_popup">
                        <div>
                            <h3>Start the Recording</h3>
                            <button className="btn btn-primaty" onClick={()=>
                            {

                            }}>start</button>
                        </div>
                    </div> : ""
            } */}
        </div>
    )
}
export default Video;
