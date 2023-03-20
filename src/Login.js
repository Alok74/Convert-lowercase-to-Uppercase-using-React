import React,{useState} from 'react'
function Login(){
    const[user,setUser]=useState("")
    const[Password,setpassword]=useState("")
    const[usererr,setuserErr]=useState(false)
    const[passerr,setpassErr]=useState(false)
    function loginHandle(e){
        e.preventDefault()
    }

    function userHandler(e)
    {
        let item=e.target.value
        if(item<3){
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        console.log(e.target.value.length)
    }
    function passwordHandler(e)
    {
        let item=e.target.value
        if(item<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        console.log(e.target.value.length)
    }
    return(
        <div>
            <form onSubmit={loginHandle}>
            <h2>Login</h2>
            <input type="text" placeholder='Enter the USer Id' onChange={userHandler}/>{usererr?<span>User not Valid</span>:""}
            <br/><br/>
            <input type="text" placeholder='Enter the User Password' onChange={passwordHandler}/>{passerr?<span>Password not Valid</span>:""}
            <br/><br/>
            <button type="Submit">Login</button>
            </form>

        </div>
    )
}
export default Login;