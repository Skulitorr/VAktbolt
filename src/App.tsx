import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import ScheduleView from './components/ScheduleView';
import StaffView from './components/StaffView';
import ToursView from './components/ToursView';
import AnalyticsView from './components/AnalyticsView';
import AIView from './components/AIView';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('schedule');
  
  const renderView = () => {
    switch (currentView) {
      case 'schedule':
        return <ScheduleView />;
      case 'staff':
        return <StaffView />;
      case 'tours':
        return <ToursView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'ai':
        return <AIView />;
      default:
        return <ScheduleView />;
    }
  };
  
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          
          <div className="container mx-auto px-4 py-6 flex-grow">
            {/* Navigation Tabs */}
            <div className="bg-white shadow-md rounded-xl mb-6 p-1 flex">
              <button 
                onClick={() => setCurrentView('schedule')}
                className={`flex-grow py-3 px-4 rounded-lg transition-all ${currentView === 'schedule' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Vaktaplan
              </button>
              <button 
                onClick={() => setCurrentView('staff')}
                className={`flex-grow py-3 px-4 rounded-lg transition-all ${currentView === 'staff' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Starfsmenn
              </button>
              <button 
                onClick={() => setCurrentView('tours')}
                className={`flex-grow py-3 px-4 rounded-lg transition-all ${currentView === 'tours' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Túrar
              </button>
              <button 
                onClick={() => setCurrentView('analytics')}
                className={`flex-grow py-3 px-4 rounded-lg transition-all ${currentView === 'analytics' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Tölfræði
              </button>
              <button 
                onClick={() => setCurrentView('ai')}
                className={`flex-grow py-3 px-4 rounded-lg transition-all ${currentView === 'ai' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                AI Aðstoð
              </button>
            </div>
            
            {/* Main Content */}
            <div className="animate-fadeIn">
              {renderView()}
            </div>
          </div>
          
          {/* Footer */}
          <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-10 pb-6">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3">BOLTVakt</h3>
                  <p className="text-sm text-blue-200">
                    Þróað með ❤️ af íslenskum hugbúnaðarsérfræðingum
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Flýtileiðir</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li><a href="#" className="hover:text-white transition-colors">Hjálp</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Leiðbeiningar</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">API skjölun</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Stuðningur</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      +354 555 0000
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      support@boltvakt.is
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Lagalegur fyrirvari</h4>
                  <p className="text-sm text-blue-200">
                    © 2025 BOLTVakt. Öll réttindi áskilin. 
                    Persónuverndarstefna og skilmálar gilda.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
          {/* Global Styles */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          
          /* Tailwind color fixes for dynamic classes */
          .from-blue-50 { --tw-gradient-from: #eff6ff; }
          .from-green-50 { --tw-gradient-from: #f0fdf4; }
          .from-red-50 { --tw-gradient-from: #fef2f2; }
          .from-yellow-50 { --tw-gradient-from: #fefce8; }
          .from-purple-50 { --tw-gradient-from: #faf5ff; }
          .from-orange-50 { --tw-gradient-from: #fff7ed; }
          .from-cyan-50 { --tw-gradient-from: #ecfeff; }
          .from-pink-50 { --tw-gradient-from: #fdf2f8; }
          .from-emerald-50 { --tw-gradient-from: #ecfdf5; }
          .from-indigo-50 { --tw-gradient-from: #eef2ff; }
          
          .to-blue-100 { --tw-gradient-to: #dbeafe; }
          .to-green-100 { --tw-gradient-to: #dcfce7; }
          .to-red-100 { --tw-gradient-to: #fee2e2; }
          .to-yellow-100 { --tw-gradient-to: #fef3c7; }
          .to-purple-100 { --tw-gradient-to: #f3e8ff; }
          .to-orange-100 { --tw-gradient-to: #fed7aa; }
          .to-cyan-100 { --tw-gradient-to: #cffafe; }
          .to-pink-100 { --tw-gradient-to: #fce7f3; }
          .to-emerald-100 { --tw-gradient-to: #d1fae5; }
          .to-indigo-100 { --tw-gradient-to: #e0e7ff; }
          
          .text-blue-700 { color: #1d4ed8; }
          .text-green-700 { color: #15803d; }
          .text-red-700 { color: #b91c1c; }
          .text-yellow-700 { color: #a16207; }
          .text-purple-700 { color: #6b21a8; }
          .text-orange-700 { color: #c2410c; }
          .text-cyan-700 { color: #0e7490; }
          .text-pink-700 { color: #be185d; }
          .text-emerald-700 { color: #047857; }
          .text-indigo-700 { color: #4338ca; }
          
          .bg-yellow-200 { background-color: #fef08a; }
          .bg-blue-200 { background-color: #bfdbfe; }
          .bg-purple-200 { background-color: #e9d5ff; }
          
          .text-yellow-900 { color: #713f12; }
          .text-blue-900 { color: #1e3a8a; }
          .text-purple-900 { color: #581c87; }
          
          .border-yellow-300 { border-color: #fde047; }
          .border-blue-300 { border-color: #93c5fd; }
          .border-purple-300 { border-color: #d8b4fe; }
        `}</style>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
