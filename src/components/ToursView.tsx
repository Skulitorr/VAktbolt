import React, { useState } from 'react';

const ToursView = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tourCategories = ['Dagsferðir', 'Norðurljós', 'Jöklaferðir', 'Hvalaskoðun', 'Hestaferðir'];
  
  const mockTours = [
    { 
      id: 1, 
      name: 'Gullni hringurinn', 
      type: 'day', 
      category: 'Dagsferðir',
      time: '09:00-17:00',
      requiredStaff: 2,
      capacity: 20,
      price: 12900,
      duration: 8,
      location: 'Suðurland',
      description: 'Hefðbundin dagsferð um Gullna hringinn, Þingvellir, Geysir og Gullfoss.',
      image: null
    },
    { 
      id: 2, 
      name: 'Norðurljósaferð', 
      type: 'northern_lights', 
      category: 'Norðurljós',
      time: '20:00-00:00',
      requiredStaff: 1,
      capacity: 15,
      price: 9900,
      duration: 4,
      location: 'Reykjavík nágrenni',
      description: 'Leit að norðurljósum með reyndum leiðsögumanni.',
      image: null
    },
    { 
      id: 3, 
      name: 'Sólheimajökull', 
      type: 'glacier', 
      category: 'Jöklaferðir',
      time: '10:00-16:00',
      requiredStaff: 3,
      capacity: 12,
      price: 15900,
      duration: 6,
      location: 'Suðurland',
      description: 'Jöklarganga á Sólheimajökli með öllum nauðsynlegum búnaði.',
      image: null
    },
    { 
      id: 4, 
      name: 'Hvalaskoðun', 
      type: 'whale', 
      category: 'Hvalaskoðun',
      time: '13:00-16:00',
      requiredStaff: 2,
      capacity: 30,
      price: 11900,
      duration: 3,
      location: 'Reykjavík',
      description: 'Hvalaskoðun frá Reykjavíkurhöfn með mörgum tegundum hvala.',
      image: null
    },
    { 
      id: 5, 
      name: 'Hestaferð', 
      type: 'horse', 
      category: 'Hestaferðir',
      time: '10:00-13:00',
      requiredStaff: 2,
      capacity: 10,
      price: 8900,
      duration: 3,
      location: 'Reykjavík nágrenni',
      description: 'Reiðtúr á íslenskum hestum um fallegt landslag.',
      image: null
    }
  ];
  
  const filteredTours = mockTours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const getTourTypeIcon = (type) => {
    switch (type) {
      case 'day': return '🌞';
      case 'northern_lights': return '🌌';
      case 'glacier': return '🏔️';
      case 'whale': return '🐋';
      case 'horse': return '🐴';
      default: return '🚌';
    }
  };
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('is-IS', { style: 'currency', currency: 'ISK' }).format(price);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">Ferðir</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Leita að ferð..."
              className="border rounded-lg px-4 py-2 pl-10 w-64"
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="all">Allar tegundir</option>
            {tourCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Bæta við ferð
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map(tour => (
            <div key={tour.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-4xl">
                {getTourTypeIcon(tour.type)}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{tour.name}</h3>
                  <div className="text-lg font-bold text-blue-600">{formatPrice(tour.price)}</div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {tour.location}
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tour.time} ({tour.duration} klst)
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{tour.description}</p>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {tour.requiredStaff} starfsmenn / {tour.capacity} farþegar
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {tour.category}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 flex justify-between">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Nánar
                </button>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Skipuleggja
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursView;
