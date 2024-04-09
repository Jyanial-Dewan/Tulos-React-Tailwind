import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userImage from '../images/customer.png';

export const userData = [
    {
        firstName:'Alessandro',
        middleName: 'Del',
        lastName: 'Piero',
        email: 'delpiero@gmail.com',
        organization: 'Quantanie',
        designation: 'Senior Executive'
    },

    {
        firstName:'Virgil',
        middleName: 'Van',
        lastName: 'Dijk',
        email: 'vandigk@gmail.com',
        organization: 'IEB',
        designation: 'Senior Engineer'
    },

    {
        firstName:'Robert',
        middleName: 'De',
        lastName: 'Niro',
        email: 'deniro@gmail.com',
        organization: 'Brac Bank',
        designation: 'Senior Officer'
    },
];

export default function UserForm() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const submitForm = (e)=> {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            organization: organization,
            designation: designation
        }

        userData.push(newUser);

        return navigate('/user-list')
    }
  return (
    <section className='bg-gray-300 pt-[6rem]'>
        <div className='flex flex-col justify-center items-center w-86% mx-auto py-8 md:flex-row'>
            <img src={userImage} className='w-12 h-12 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]' />
            <div className='bg-white/40 border p-5 mt-2 rounded-2xl md:ml-12'>
                <form onSubmit={submitForm}>
                    
                    <div>
                        <label htmlFor="firstName" className='block font-bold mb-1'>First Name</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                        <label htmlFor="middleName" className='block font-bold mb-1'>Middle Name</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>

                        <label htmlFor="lastName" className='block font-bold mb-1'>Last Name</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                        <label htmlFor="email" className='block font-bold mb-1'>E-mail</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <label htmlFor="organization" className='block font-bold mb-1'>Organization</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={organization} onChange={(e)=>setOrganization(e.target.value)}/>

                        <label htmlFor="designation" className='block font-bold mb-1'>Designation</label>
                        <input type="text" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>

                        <label htmlFor="password" className='block font-bold mb-1'>Password</label>
                        <input type="password" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <label htmlFor="confirmPassword" className='block font-bold mb-1'>Confirm Password</label>
                        <input type="password" className='border rounded-lg w-[300px] py-1 px-2 mb-1 focus:outline-none md:w-[370px]' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

                        <button className='block bg-black text-white rounded-lg my-2 px-6 py-1 w-full hover:bg-slate-800'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
