import { useGetDashboardStatsQuery } from '@/redux/apis/statsApi';
import React from 'react';
import { FiFolder, FiUsers, FiBarChart2 } from 'react-icons/fi';

const Dashboard = () => {
    const { data, isLoading, isError } = useGetDashboardStatsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading dashboard data</p>;

    const stats = [
        { name: 'Total Projects', value: data?.totalProjects || 0, icon: FiFolder, change: '+2', changeType: 'positive' },
        { name: 'New Contacts', value: data?.newContacts || 0, icon: FiUsers, change: '+3', changeType: 'positive' },
        { name: 'Performance', value: data?.performance || '0%', icon: FiBarChart2, change: '+1.2%', changeType: 'positive' },
    ];

    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <stat.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <span className={`font-medium ${stat.changeType === 'positive' ? 'text-green-700' : 'text-red-700'}`}>
                                    {stat.change}
                                </span>{' '}
                                <span className="text-gray-500">since last week</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Latest actions in your admin panel</p>
                </div>
                <div className="border-t border-gray-200">
                    <ul className="divide-y divide-gray-200">
                        {data?.recentActivity?.length > 0 ? (
                            data.recentActivity.map((activity, index) => (
                                <li key={index} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-indigo-600 truncate">{activity.action}</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {new Date(activity.time).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                Type: {activity.type}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-4 sm:px-6 text-sm text-gray-500">
                                No recent activity found
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
