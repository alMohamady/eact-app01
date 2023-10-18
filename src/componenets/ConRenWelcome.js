

function Welcome(props) {
    return (
        <h2> Welcome Back {props.name} </h2>
    );
}

function Guest(){
    return (
        <h2> hi you must click log in </h2>
    );
}

export {Welcome, Guest};