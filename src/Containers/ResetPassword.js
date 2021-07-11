import React, {useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../Utils/notification/Notification'
import {isLength, isMatch} from '../Utils/validation/Validation'
// import {BASE_URL} from "../Utils/config";

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {access_token} = useParams()
    // console.log(access_token)

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post(`/api/reset`, {password}, {
                headers: {Authorization: access_token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

<div style={{ display: 'flex', justifyContent: 'center'}}>
            { success && showSuccessMsg(success) ? <div><Link to="/login" >Login Now</Link> </div> : <div></div> }
</div>

            <div className="row">
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         

                <button className="btn btn-primary w-100" onClick={handleResetPass}>Reset Password</button>
            </div>
        </div>
    )
}

export default ResetPassword