import React from 'react';

const SecondComponents = () => {

    var bg = 'dark'
    return (
        <div>
            <p> Component Without Hook</p>
            <img
                src="https://picsum.photos/100/100"
                alt="Katherine Johnson"
            />
            <div className={bg} style={{ backgroundColor: 'black', color: 'white' }} > This is random image</div>
        </div>
    );
}


const SecondComponentsHooks = (props) => {
    return (
        <div>
            <p> {props.title}</p>
            <img
                src="https://picsum.photos/100/100"
                alt="Katherine Johnson"
            />
            <div className='text-white' style={{ backgroundColor: props.bg }}> {props.msg}</div>
        </div>
    );
}

const SecondComponentsHooksNew = ({ title, msg, bg }) => {
    return (
        <div>
            <p> {title}</p>
            <img
                src="https://picsum.photos/100/100"
                alt="Katherine Johnson"
            />
            <div className='text-white' style={{ backgroundColor: bg }}> {msg}</div>
        </div>
    );
}


export default SecondComponents;
export { SecondComponentsHooks, SecondComponentsHooksNew };
