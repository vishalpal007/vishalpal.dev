import { useGetAllUserQuery } from '@/redux/userApi';
import React from 'react';

const Users = () => {
    const { data } = useGetAllUserQuery();

    return (
        <div className='px-4 py-6 md:px-8 lg:px-16 h-screen'>
            <div className="overflow-x-auto">
                {
                    data && data.length === 0
                        ? <>
                            <h1 className='text-center text-3xl font-bold mt-12'> Nobody has contacted you yet 😉</h1>
                        </>
                        : <>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-gray-50 text-black text-sm text-center">
                                        <th className="py-2">Sr.No</th>
                                        <th className="py-2">Date & Time</th>
                                        <th className="py-2">Name</th>
                                        <th className="py-2">Email</th>
                                        <th className="py-2">Subject</th>
                                        <th className="py-2">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((item, i) => (
                                            <tr key={item._id} className={(i % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
                                                <td className="py-2">{i + 1}</td>
                                                <td className="py-2">{item.createdAt}</td>
                                                <td className="py-2">{item.name}</td>
                                                <td className="py-2">{item.email}</td>
                                                <td className="py-2">{item.subject}</td>
                                                <td className="py-2">{item.message}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </>
                }
            </div>
        </div>
    );
};

export default Users;
