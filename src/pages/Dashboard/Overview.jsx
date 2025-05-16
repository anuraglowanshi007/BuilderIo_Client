import React from 'react';

const Overview = () => {
  // Stats data - can be replaced with dynamic data from API
  const stats = [
    { title: 'Total Sites', value: 5, trend: 'up', change: '2' },
    { title: 'Active Pages', value: 12, trend: 'up', change: '3' },
    { title: 'Used Media', value: 30, trend: 'down', change: '5' },
    { title: 'Storage Used', value: '4.2GB', trend: 'up', change: '0.8GB' },
    { title: 'Bandwidth', value: '12TB', trend: 'stable', change: '0' },
    { title: 'Active Users', value: 124, trend: 'up', change: '12' }
  ];

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      );
      case 'down': return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      );
      default: return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-800">{stat.value}</span>
              {stat.change !== '0' && (
                <span className={`ml-2 flex items-center text-sm ${getTrendColor(stat.trend)}`}>
                  {getTrendIcon(stat.trend)}
                  <span className="ml-1">{stat.change}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start pb-3 border-b border-gray-100 last:border-0">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Site {item} updated</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;