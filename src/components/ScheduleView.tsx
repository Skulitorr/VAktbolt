import React, { useState } from 'react';

const ScheduleView = () => {
  const [viewMode, setViewMode] = useState('week');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  const weekDays = ['Mánudagur', 'Þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur', 'Sunnudagur'];
  
  const departments = ['Bráðadeild', 'Skurðdeild', 'Barnadeild', 'Hjartadeild'];
  
  const mockStaff = [
    { id: 1, name: 'Anna Jónsdóttir', role: 'Hjúkrunarfræðingur', department: 'Bráðadeild' },
    { id: 2, name: 'Jón Gunnarsson', role: 'Læknir', department: 'Skurðdeild' },
    { id: 3, name: 'Sara Ólafsdóttir', role: 'Hjúkrunarfræðingur', department: 'Barnadeild' },
    { id: 4, name: 'Gunnar Jóhannsson', role: 'Sjúkraliði', department: 'Bráðadeild' },
    { id: 5, name: 'María Guðmundsdóttir', role: 'Læknir', department: 'Hjartadeild' }
  ];
  
  const mockShifts = [
    { id: 1, staffId: 1, day: 'Mánudagur', type: 'morning', department: 'Bráðadeild' },
    { id: 2, staffId: 2, day: 'Mánudagur', type: 'evening', department: 'Skurðdeild' },
    { id: 3, staffId: 3, day: 'Þriðjudagur', type: 'morning', department: 'Barnadeild' },
    { id: 4, staffId: 4, day: 'Miðvikudagur', type: 'night', department: 'Bráðadeild' },
    { id: 5, staffId: 5, day: 'Fimmtudagur', type: 'morning', department: 'Hjartadeild' }
  ];

  const shiftTypes = [
    { id: 'morning', label: 'Morgunvakt', time: '08:00-16:00', color: 'bg-yellow-200 text-yellow-900 border-yellow-300' },
    { id: 'evening', label: 'Kvöldvakt', time: '16:00-00:00', color: 'bg-blue-200 text-blue-900 border-blue-300' },
    { id: 'night', label: 'Næturvakt', time: '00:00-08:00', color: 'bg-purple-200 text-purple-900 border-purple-300' }
  ];

  const getShiftsForDay = (day, staffMember) => {
    return mockShifts.filter(shift => 
      shift.day === day && 
      shift.staffId === staffMember.id &&
      (selectedDepartment === 'all' || shift.department === selectedDepartment)
    );
  };

  const getShiftColor = (type) => {
    const shift = shiftTypes.find(s => s.id === type);
    return shift ? shift.color : 'bg-gray-200 text-gray-900 border-gray-300';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">Vaktaplan</h2>
        <div className="flex space-x-3">
          <div className="flex border rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 ${viewMode === 'day' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Dagur
            </button>
            <button 
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 ${viewMode === 'week' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Vika
            </button>
            <button 
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 ${viewMode === 'month' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Mánuður
            </button>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Bæta við vakt
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 border bg-gray-50 text-left text-sm font-medium text-gray-700 w-48">Starfsmaður</th>
                {weekDays.map(day => (
                  <th key={day} className="px-4 py-3 border bg-gray-50 text-center text-sm font-medium text-gray-700 w-36">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockStaff.map(staffMember => (
                <tr key={staffMember.id}>
                  <td className="px-4 py-3 border">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{staffMember.name}</span>
                      <span className="text-sm text-gray-600">{staffMember.role}</span>
                    </div>
                  </td>
                  {weekDays.map(day => {
                    const dayShifts = getShiftsForDay(day, staffMember);
                    return (
                      <td key={day} className="px-2 py-2 border align-top">
                        {dayShifts.length === 0 ? (
                          <div className="h-12 flex items-center justify-center text-gray-400 text-sm">
                            + Bæta við
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {dayShifts.map(shift => {
                              const shiftType = shiftTypes.find(t => t.id === shift.type);
                              return (
                                <div 
                                  key={shift.id} 
                                  className={`${getShiftColor(shift.type)} p-2 rounded border text-sm`}
                                >
                                  <div className="font-medium">{shiftType?.label}</div>
                                  <div className="text-xs">{shiftType?.time}</div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
