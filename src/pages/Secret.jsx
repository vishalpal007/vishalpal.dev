import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import Admin from './Admin';

const Secret = () => {
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState();

    const handleCheckPassword = () => {
        if (password === "Vishal@123") {
            setIsAdmin(true);
            setError(false);
        } else {
            setIsAdmin(false);
            setError(true);
        }
    }

    return (
        <>
            {isAdmin ? (
                <Admin />
            ) : (
                <div className='h-screen flex items-center justify-center bg-gray-100'>
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-600">Secret Key</Label>
                        <Input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="********"
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                        <Button onClick={handleCheckPassword} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Check Secret Key 🔑
                        </Button>
                        {error && <p className="mt-4 text-red-500">Access Denied! The password you entered doesn't grant admin access. Please try again.</p>}
                    </div>
                </div>
            )}
        </>
    );
}

export default Secret;
