import React, { useState } from 'react';

const StaffView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  
  const departments = ['Bráðadeild', 'Skurðdeild', 'Barnadeild', 'Hjartadeild'];
  
  const mockStaff = [
    { 
      id: 1, 
      name: 'Anna Jónsdóttir', 
      role: 'Hjúkrunarfræðingur', 
      department: 'Bráðadeild',
      email: 'anna@hospital.is',
      phone: '+354 555 1234',
      status: 'active',
      image: null
    },
    { 
      id: 2, 
      name: 'Jón Gunnarsson', 
      role: 'Læknir', 
      department: 'Skurðdeild',
      email: 'jon@hospital.is',
      phone: '+354 555 2345',
      status: 'active',
      image: null
    },
    { 
      id: 3, 
      name: 'Sara Ólafsdóttir', 
      role: 'Hjúkrunarfræðingur', 
      department: 'Barnadeild',
      email: 'sara@hospital.is',
      phone: '+354 555 3456',
      status: 'sick',
      image: null
    },
    { 
      id: 4, 
      name: 'Gunnar Jóhannsson', 
      role: 'Sjúkraliði', 
      department: 'Bráðadeild',
      email: 'gunnar@hospital.is',
      phone: '+354 555 4567',
      status: 'active',
      image: null
    },
    { 
      id: 5, 
      name: 'María Guðmundsdóttir', 
      role: 'Læknir', 
      department: 'Hjartadeild',
      email: 'maria@hospital.is',
      phone: '+354 555 5678',
      status: 'vacation',
      image: null
    }
  ];
  
  const filteredStaff = mockStaff.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          staff.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || staff.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'sick': return 'bg-red-100 text-red-800';
      case 'vacation': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Virkur';
      case 'sick': return 'Veikur';
      case 'vacation': return 'Í fríi';
      default: return 'Óþekkt';
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">Starfsmenn</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Leita að starfsmanni..."
              className="border rounded-lg px-4 py-2 pl-10 w-64"
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
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
          <div className="flex border rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Bæta við starfsmanni
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStaff.map(staff => (
              <div key={staff.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                      <p className="text-gray-600">{staff.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {staff.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {staff.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {staff.phone}
                    </div>
                  </div>
                </div>
                <div className="flex border-t">
                  <div className="flex-1 py-2 text-center border-r">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(staff.status)}`}>
                      {getStatusText(staff.status)}
                    </span>
                  </div>
                  <button className="flex-1 py-2 text-center text-blue-600 hover:bg-blue-50 transition-colors">
                    Nánar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Nafn</th>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Hlutverk</th>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Deild</th>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Staða</th>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Netfang</th>
                  <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700">Sími</th>
                  <th className="px-4 py-3 border bg-gray-50 text-center text-sm font-medium text-gray-700">Aðgerðir</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map(staff => (
                  <tr key={staff.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 mr-3">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        {staff.name}
                      </div>
                    </td>
                    <td className="px-4 py-3 border">{staff.role}</td>
                    <td className="px-4 py-3 border">{staff.department}</td>
                    <td className="px-4 py-3 border">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(staff.status)}`}>
                        {getStatusText(staff.status)}
                      </span>
                    </td>
                    <td className="px-4 py-3 border">{staff.email}</td>
                    <td className="px-4 py-3 border">{staff.phone}</td>
                    <td className="px-4 py-3 border text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffView;
