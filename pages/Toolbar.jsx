import next from "next";
const Toolbar = ({ audio, video, chat, hand, tool, end }) => {
    return (
        <div className="tool d-flex ">
            <button onClick={audio} className="btn btn primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16">
                <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z" />
                <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
            </svg></button>
            <button onClick={video} className="btn btn primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
            </svg></button>
            <button onClick={chat} className="btn btn primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg></button>
            <button onClick={hand} className="btn btn primary">

                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>left-hand-high-five-outline</title><path d="M303.11,450.66v45Q261.84,512,224.82,512a176.13,176.13,0,0,1-74.06-16.35V461l-28-31.47Q97.91,384.89,88.11,314.39l3.56-37.76L29.61,172.45q-14-23.54-14-37.66a28.84,28.84,0,0,1,8.61-21.18,28.55,28.55,0,0,1,21-8.63q18.2,0,36.41,28.92l56.25,89.57L103,95.23q-6.52-23.89-6.51-33,0-17.6,8-26.25t23.87-8.65q27.29,0,39.31,40.24l39,131.69V49q0-24.52,9.1-36.77T243,0q36.05,0,36,55.32l-3.57,150.24,40.6-116.93Q334,37.09,359.94,37.09q14.94,0,22.41,7.22t7.48,22q0,15.06-5.2,35.46L344.36,253q3.24,10.71,5.52,33,10.4-5.66,28.91-12,13.32-21.55,29.56-32.32A63.28,63.28,0,0,1,444.08,231q18.83,0,45.8,22.07l6.5,5-70.16,64.51L366.44,400Q331,432.09,303.11,450.66Zm-15.92-7.55q44-33,71-58.85l54.71-70.81L473,259q-15.6-12.58-29.56-12.59a47.43,47.43,0,0,0-28.91,9.92q-13.32,9.91-24.36,30.05a200.55,200.55,0,0,0-96.23,62.94l-12.36-9.44q19.52-28.31,53.37-45.94A264.63,264.63,0,0,0,326.49,253l40.93-147.81q6.48-22.58,6.5-32.95,0-9.42-3.58-14t-10.72-4.55q-13.64,0-25,32.37l-47.1,135.15H259.58l3.89-154.56.33-10.07q0-41.24-20.46-41.24-10.08,0-15.27,7.08t-5.2,21.57l.33,19.83V221.27l-25.58,4.4L157.13,81.41q-10.69-38.66-27.85-38.66-8.43,0-12.63,4.87t-4.21,14.91q0,6.6,5.81,26.68L161.47,242.1,137.88,253,67.54,142.33Q54.23,121,44.52,121q-6.48,0-9.73,3.45t-3.24,10.66q0,9.1,12,29.18l64.89,107.61-4,42.48q10,64.83,33.4,108.89l29.78,34.61v27.38A170,170,0,0,0,227.9,496q26.23,0,59.28-10.7Z" fill="#737277" /></svg>
            </button>
            <button onClick={tool} className="btn btn primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg></button>
            <button onClick={end} className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg></button>
        </div>
    )
};
export default Toolbar;