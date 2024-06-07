import { useState } from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'

const SignInForm = () => {

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [isChecked, setIsChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [email] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async (event) => {
    event.preventDefault()

  const signInData = {
    username: username,
    email: email,
    password: password,
  };

  const signInDataString = JSON.stringify(signInData)

//Saves the data in the local memory and console
    localStorage.setItem('signInData', signInDataString);

    console.log('User Data:', signInData);
//Sends a prompt to the user if the formData is properly saved
    alert("Success")

}

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
  <div className='bg-gray-100 px-12 py-20 rounded-3xl border-2 border-x-custom-blue lg:border-none lg:bg-transparent'>
    <h1 className='text-3xl justify-center flex text-blue-900 my-4'> Sign In</h1>
    <p className='justify-center flex text-lg my-6 text-blue-900'>Welcome back to 'insert name'! Please enter your details</p>
            <form onSubmit={handleSignIn}>            

            <div className='mt-10 mb-16 lg:text-lg'>
              <SignInputBox 
              type="text"
              placeholder="Username or Email"
              width="w-full"
              setValue={setUsername}
              />
            </div>
            <div className='my-16 lg:text-lg'>
              <SignInputBox 
              type="password"
              placeholder="Password"
              width="w-full"
              validationRegex={PWD_REGEX}
              errorMessage="Password is incorrect"
              setValue={setPassword}
              />
            </div>

            <div className='text-sm lg:text-lg my-8 text-custom-blue flex'>
            <p> Do not have an account? <Link to='/'>Sign Up</Link></p>
            <p className='ml-12 lg:ml-32'> 
              <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mr-2'
              /> 
              Remember Me</p>
            </div>

            
            <Link to='/Dashboard'>
              <button className='text-white text-xl bg-custom-blue rounded-full px-10 py-4' type='submit'>
                Sign Up
              </button>
            </Link>

          </form>
          
          
        </div>
     
    </>
  )

}

export default SignInForm