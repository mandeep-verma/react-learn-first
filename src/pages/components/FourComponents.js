import React ,{ useState } from 'react';
import './FourComponents.css';

const FourComponents = (props) => {
    function handleClick() {
        // console.log(props.message);
        props.onSmash();    // from propse se data
    }
    return (
        <>
            {/* props.children   // tag ke ander data likhna ho tb */}
            <button onClick={handleClick}> {props.children} </button>
        </>
    );
}

const FourComponentsSecond = (props) => {
    let playing = false;
    function handleClick() {
        if (playing) props.onPause();
        else props.onPlay();
        playing = !playing;
    }
    return (
        <>
            <button onClick={handleClick}> {props.children} :  {playing ? 'Play' : 'Pause'} </button>
        </>
    );
}

const FourComponentsThirdUseState = (props) => {
    const [playing, setPlaying] = useState(false);
    function handleClick() {
        if (playing) props.onPause();
        else props.onPlay();
        setPlaying(!playing);  // Correctly call the state updater function
    }
    return (
        <>
            <button onClick={handleClick}>
                {props.children} : {playing ? 'Play' : 'Pause'}
            </button>
        </>
    );
}
export default FourComponents;
export { FourComponentsSecond, FourComponentsThirdUseState };