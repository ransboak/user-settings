import React, { useState } from 'react'
import {RxAvatar} from 'react-icons/rx'
import Avatar from '../assets/avatar.jpg'
import { BiPencil } from 'react-icons/bi'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'

const EditProfile = () => {
    const [avatar, setAvatar] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleFileInputChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2){
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  return (
    <div className='edit__profile'>
        <h2>Edit Profile</h2>
        <div className="avatar__upload">
            {
                avatar ?
                <img src={avatar} alt="" />
                :<RxAvatar className='avatar__icon' />
            }
            
            <span>
                <input type="file"
                id='image' 
                className='hidden'
                onChange={handleFileInputChange}
                />
                <label htmlFor="image" className='upload__icon'>
                <BiPencil  />
                </label>
            </span>
        </div>
        <form action="">
            <div className="form__row">
                <div className="form__control">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name='firstname' />
                </div>
                <div className="form__control">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name='lastname' />
                </div>
            </div>
            <div className="form__control">
                <label htmlFor="email"> Email</label>
                <input type="email" name='email'  />
            </div>
            <div className="form__control">
                <label htmlFor="contact">Contact Number</label>
                <input type="text" name='contact'  />
            </div>
            <div className="form__control">
                <label htmlFor="address"> Address</label>
                <input type="text" name='address'  />
            </div>

            <div className="form__row">
                    <div className="form__control">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' />
                    </div>
                    <div className="form__control">
                        <label htmlFor="state">State</label>
                        <input type="text" name='state' />
                    </div>
            </div>
            <div className="form__row">
                    <div className="form__control">
                        <label htmlFor="zipcode">Zip code</label>
                        <input type="text" name='zipcode' />
                    </div>
                    <div className="form__control">
                        <label htmlFor="country">Country</label>
                        <input type="text" name='country' />
                    </div>
            </div>

            <div className="form__control">
                        <label htmlFor="password">Password</label>
                        <input type={visible ? "text" : "password"} name='password' />
                        <span className='visibility' onClick={() => setVisible(prev => !prev)}>
                        {
                            visible ? <AiFillEyeInvisible /> : <AiFillEye />
                        }
                        </span>  
            </div>
            <button type="submit" className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default EditProfile