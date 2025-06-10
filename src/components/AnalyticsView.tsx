import React, { useState } from 'react';

const AnalyticsView = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  const departments = ['Bráðadeild', 'Skurðdeild', 'Barnadeild', 'Hjartadeild'];

  // Mock analytics data
  const mockAnalytics = {
    efficiency: 94,
    satisfaction: 85,
    coverage: 92,
    costs: -5,
    staffUtilization: 88,
    sickLeave: 3.2,
    overtime: 12.5,
    weeklyData: [88, 90, 92, 94, 93, 95, 96],
    monthlyData: [90, 91, 92, 94],
    staffPerShift: {
      morning: 12,
      evening: 8,
      night: 4
    },
    departmentEfficiency: {
      'Bráðadeild': 92,
      'Skurðdeild': 94,
      'Barnadeild': 90,
      'Hjartadeild': 96
    },
    topPerformers: [
      { id: 1, name: 'Anna Jónsdóttir', score: 98, department: 'Bráðadeild' },
      { id: 2, name: 'Jón Gunnarsson', score: 97, department: 'Skurðdeild' },
      { id: 3, name: 'María Guðmundsdóttir', score: 95, department: 'Hjartadeild' }
    ]
  };
  
  const timeRangeOptions = [
    { value: 'week', label: 'Þessi vika' },
    { value: 'month', label: 'Þessi mánuður' },
    { value: 'quarter', label: 'Þetta ársfjórðungur' },
    { value: 'year', label: 'Þetta ár' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Tölfræði</h2>
          <div className="flex space-x-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              {timeRangeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <select 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="all">Allar deildir</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Niðurhala skýrslu
            </button>
          </div>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-blue-800">Skilvirkni</h3>
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold text-blue-900">{mockAnalytics.efficiency}%</div>
              <div className="text-sm text-blue-700 mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +2.5% frá síðasta tímabili
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-green-800">Ánægja</h3>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold text-green-900">{mockAnalytics.satisfaction}%</div>
              <div className="text-sm text-green-700 mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +1.8% frá síðasta tímabili
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-purple-800">Þekja</h3>
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold text-purple-900">{mockAnalytics.coverage}%</div>
              <div className="text-sm text-purple-700 mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +0.5% frá síðasta tímabili
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-orange-800">Kostnaður</h3>
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold text-orange-900">{mockAnalytics.costs}%</div>
              <div className="text-sm text-orange-700 mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                -2.1% frá síðasta tímabili
              </div>
            </div>
          </div>
        </div>
        
        {/* Trend charts */}
        <div className="p-6 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Skilvirkni yfir tíma</h3>
            <div className="h-64 flex items-end space-x-2">
              {mockAnalytics.weeklyData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t transition-all duration-500"
                    style={{ height: `${value}%` }}
                  ></div>
                  <div className="text-xs text-gray-600 mt-2">Vika {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Skilvirkni eftir deildum</h3>
            <div className="space-y-4">
              {Object.entries(mockAnalytics.departmentEfficiency).map(([dept, value]) => (
                <div key={dept} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{dept}</span>
                    <span className="text-sm font-medium text-gray-900">{value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 pt-0">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Starfsmenn á vakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                <span className="text-sm text-gray-700">Morgunvakt:</span>
                <span className="ml-auto font-semibold text-gray-900">{mockAnalytics.staffPerShift.morning}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span className="text-sm text-gray-700">Kvöldvakt:</span>
                <span className="ml-auto font-semibold text-gray-900">{mockAnalytics.staffPerShift.evening}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                <span className="text-sm text-gray-700">Næturvakt:</span>
                <span className="ml-auto font-semibold text-gray-900">{mockAnalytics.staffPerShift.night}</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Nýting starfsfólks</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {mockAnalytics.staffUtilization}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: `${mockAnalytics.staffUtilization}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Veikindi:</span>
                <span className="font-medium text-gray-900">{mockAnalytics.sickLeave}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Yfirvinna:</span>
                <span className="font-medium text-gray-900">{mockAnalytics.overtime}%</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Framúrskarandi starfsmenn</h3>
            <div className="space-y-3">
              {mockAnalytics.topPerformers.map((performer, index) => (
                <div key={performer.id} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                    <p className="text-xs text-gray-600">{performer.department}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm font-semibold text-blue-600">{performer.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
