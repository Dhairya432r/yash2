import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
const Profile = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState({})
    const callProfile = async () => {
        try {
            const res = await fetch('http://localhost:5000/profile', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            const data = res.json();
            console.log(data)
            setuserData(data)

            if(res.status === 200){
                console.log("successful")
               
            }else{
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
         
           
        
        }

    }
    useEffect(() => {
        callProfile();

    }, [])
    return (
        <>
            <section className="pt-16 bg-blueGray-50">
                <form action="" method="GET">
                    <div className="w-full lg:w-4/12 px-4 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">

                                <div>
                                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className='h-52 w-52 rounded-full align-middle lg:ml-28 ml-12' alt="" />
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        yash
                                       
                                    
                                    </h3>

                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        yashm13114@gmail.com
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </form>


            </section>
        </>

    )
}

export default Profile
