import React ,{useState} from 'react';

function LoginForm({Login,error}) {
    const [details,setDetails]=useState({no:"",password:""});

    const submitHandler =e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Giriş Yap</h2>
                {(error!="" ? (<div className='error'> {error} </div> ) :"")}
                {/* <div className='form-group'>
                    <label html="name"> İsim:</label>
                    <input type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                </div> */}

                <div className='form-group'>
                <label htmlFor='number'> Numara </label>
                <input type="number" name='number' id='number' onChange={e=>setDetails({...details,no:e.target.value})} value={details.no}></input>
                </div>
                <div className='form-group'>
                <label htmlFor='password'> Şifre</label>
                <input type="password" name='password' id='password' onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"></input>

            </div>
        </form>
    )
}

export default LoginForm;

//rfce