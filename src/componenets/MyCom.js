
function SyaHi(props) {
    console.log(props);

    return (
           <>
               <h1> Hi , {props.name}  </h1>
               <h2> age : { props.age }</h2>
           </>
    );
}

export default SyaHi;