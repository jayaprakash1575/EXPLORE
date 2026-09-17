import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BucketListProvider } from './context/BucketListContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { DetailModal } from './components/DetailModal';
import { RomanticParticles } from './components/RomanticParticles';
import { ScrollToTop } from './components/ScrollToTop';
import { Toast } from './components/Toast';

import { Home } from './pages/Home';
import { Bengaluru } from './pages/Bengaluru';
import { India } from './pages/India';
import { Temples } from './pages/Temples';
import { Food } from './pages/Food';
import { BucketList } from './pages/BucketList';
import { TripPlanner } from './pages/TripPlanner';
import { Gallery } from './pages/Gallery';
import { ForYou } from './pages/ForYou';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);

  const handleOpenDetails = (item) => {
    setSelectedDetailItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedDetailItem(null);
  };

  const handleSearchResult = (item, action) => {
    if (action === 'open_search') {
      setIsSearchOpen(true);
      return;
    }
    if (item) {
      setSelectedDetailItem(item);
    }
  };

  return (
    <BucketListProvider>
      <Router>
        <ScrollToTop />
        <RomanticParticles enabled={particlesEnabled} />

        <div className="app-layout">
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            particlesEnabled={particlesEnabled}
            onToggleParticles={() => setParticlesEnabled(!particlesEnabled)}
          />

          <main className="app-main-content">
            <Routes>
              <Route path="/" element={<Home onOpenDetails={handleOpenDetails} />} />
              <Route path="/bengaluru" element={<Bengaluru onOpenDetails={handleOpenDetails} />} />
              <Route path="/india" element={<India />} />
              <Route path="/temples" element={<Temples onOpenDetails={handleOpenDetails} />} />
              <Route path="/food" element={<Food onOpenDetails={handleOpenDetails} />} />
              <Route path="/bucket-list" element={<BucketList onOpenDetails={handleOpenDetails} />} />
              <Route path="/trip-planner" element={<TripPlanner />} />
              <Route path="/gallery" element={<Gallery onOpenDetails={handleOpenDetails} />} />
              <Route path="/for-you" element={<ForYou />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Search Modal */}
          <GlobalSearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectResult={handleSearchResult}
          />

          {/* Detailed Item Modal */}
          {selectedDetailItem && (
            <DetailModal
              item={selectedDetailItem}
              onClose={handleCloseDetails}
            />
          )}

          {/* Toast Notification Container */}
          <Toast />
        </div>
      </Router>

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .app-main-content {
          flex-grow: 1;
        }
      `}</style>
    </BucketListProvider>
  );
}

export default App;
