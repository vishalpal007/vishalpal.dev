import MyProject from '@/component/MyProject'
import Users from '@/component/Users'
import React, { useState } from 'react'

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState('MyProject')

    const handleButtonClick = (component) => {
        setActiveComponent(component)
    }

    return (
        <div>
            <div className='flex gap-3 py-10 px-5'>
                <button
                    className={`bg-sky-200 font-bold ${activeComponent === 'MyProject' ? 'focus:bg-warning' : ''} w-1/2 p-4`}
                    onClick={() => handleButtonClick('MyProject')}
                >
                    My Projects
                </button>
                <button
                    className={`bg-sky-200 font-bold ${activeComponent === 'Users' ? 'focus:bg-warning' : ''} w-1/2 p-4`}
                    onClick={() => handleButtonClick('Users')}
                >
                    Contact List
                </button>
            </div>

            {activeComponent === 'MyProject' && <MyProject />}
            {activeComponent === 'Users' && <Users />}
        </div>
    )
}

export default Admin
