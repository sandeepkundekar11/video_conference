import next from "next";
import { useState } from "react";
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


    const [link, setlink] = useState(generateString(9).trim().toLocaleLowerCase())  //use to generate random invite code
    const [meeting, setmeeting] = useState(false)                 //to set toolbar
    const [popup, setopup] = useState(false)                      //to set popup
    const [joincode, setjoincode] = useState("")                   // used in form  to join meeting from invitation code
    let [myapi, setmyapi] = useState({})                            //used to set jitsi api
    const [userInfo, setuserInfo] = useState("")                  //used to store joined user information
    const [sharedvideo, setsharevideo] = useState(false)         // used for sharepopup to show input popup
    const[shareurl,setshareurl]=useState("")                     // used for sharepopup to get url from input
    const[stopVideo,setstopVideo]=useState(true)                // used to replace share video to stop video
    const[enable_audio,setenable_audio]=useState(false)
    const[enable_video,setenable_video]=useState(false)
    
    const GetUserInfo = () => {
        const data = myapi.getParticipantsInfo();
        setuserInfo(data)
    }

    console.log(userInfo)

    const Start_meeting = (given_Name) => {
        const domain = 'meet.jit.si';

        const options = {
            roomName: given_Name,
            width: '100%',
            height: 760,
            parentNode: document.querySelector('#meeting'),
            userInfo: {
                email: 'email@jitsiexamplemail.com',
                displayName: ""
            },

            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: true,
            },

            interfaceConfigOverwrite: {
                SHOW_JITSI_WATERMARK:false,
                DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
                TOOLBAR_ALWAYS_VISIBLE: true,
                TOOLBAR_BUTTONS: [
                        // 'camera',
                        // 'chat',
                        'closedcaptions',
                        // 'desktop',
                        // 'download',
                        // 'embedmeeting',
                        // 'etherpad',
                        // 'feedback',
                        'filmstrip',
                        'fullscreen',
                    //     'hangup',
                    //     'help',
                    //     'highlight',
                        // 'invite',
                    //     'linktosalesforce',
                    //     'livestreaming',
                    //      'mute-everyone',
                    //     'mute-video-everyone',
                        'participants-pane',
                    //     'profile',
                    //     'raisehand',
                        'recording',
                        // 'security',
                        'select-background',
                        'settings',
                        // 'shareaudio',
                        // 'sharedvideo',
                    //    'shortcuts',
                        // 'stats',

                    //  '__end'
                ],

            },
            
            onload: function () {
                setmeeting(!meeting)
            },

        };
        setmyapi(new JitsiMeetExternalAPI(domain, options))

    }
    return (
        <div className="d-flex justify-content-end align-items-end" style={{ "flexDirection": "column" }}>
            {
                sharedvideo ?
                    <SharePopup name={"Video"} Share={()=>
                    {
                        if(shareurl.length <2)
                        {
                            alert("Enter correct url")
                        }
                        else
                        {
                            myapi.executeCommand('startShareVideo', shareurl);
                            setsharevideo(!sharedvideo)
                            setstopVideo(!stopVideo)
                            
                        }
                    }} scvalue={shareurl} scChange={(e)=>
                    {
                     setshareurl(e.target.value)
                    }}  Cancel={()=>
                    {
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
                            GetUserInfo()
                            setsharevideo(false)
                        }}
                        audio_enable={enable_audio}
                        video_enable={enable_video}
                    /> : ""
            }

            <Form
                Addmeeting={() => {
                    Start_meeting(link)

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
                            // myapi.executeCommand('muteEveryone', 'video');
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
                        stopvideofunction={()=>
                        {
                            myapi.executeCommand('stopShareVideo');
                            setopup(!popup)
                        }} stop={stopVideo}/> : ""
            }




        </div>
    )
}
export default Video;
