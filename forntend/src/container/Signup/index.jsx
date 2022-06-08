import SignupHeader from "../../components/Header/SignupHeader"
import SignupForm from "../../components/Signup"


const SignupContainer = () =>{
    return(
        <>
        <SignupHeader />
        <h3 style={{'text-align':'center', 'margin-top':'1em'}}>Sign up</h3>
        <SignupForm />
        </>
    )

}

export default SignupContainer