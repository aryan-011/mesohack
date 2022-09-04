import React from 'react';
import { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
    import {useNavigate} from 'react-router-dom';
import './loginPage.css';
import ProfilePage from '../userProfile/profile';
import { Route } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    const patientEmail='example@example.com'
    const patientPassword='123456'
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const handleEmail = (event) => {
        const searchWord = event.target.value
        setEmail(searchWord)
        console.log(email)
    }

    const handlePassword = (event) => {
        const searchWord = event.target.value
        setPassword(searchWord)
        console.log(password)
    }


    // const handleSuccessPatientLogin = () => {
    //     return(

    //         // <Table/>
    //     );
    // }

    const handlePatientLogin = () => {
        if(email===patientEmail && password===patientPassword){
            navigate('/')

        }
        else{
            console.log('Login Failed')
        }
    }
    

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>


                    <MDBInput wrloginPageerClass='mb-4' label='Email address' id='form1' type='email' onChange={handleEmail} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handlePassword} />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='button'>

                        <button className="mb-4 w-100" on onClick={handlePatientLogin}>Sign up as Patient</button>
                        <button className="mb-4 w-100">Sign up as Doctor</button>
                    </div>
                    <p onClick={() => handleJustifyClick('tab2')} className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>




                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                    </div>
                    <div className='button'>

                        <button className="mb-4 w-100">Sign up as Patient</button>
                        <button className="mb-4 w-100">Sign up as Doctor</button>
                    </div>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    );
}

export default LoginPage;