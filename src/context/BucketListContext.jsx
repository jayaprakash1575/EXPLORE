import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BucketListContext = createContext();

const STORAGE_KEY = 'our_little_journey_bucketlist_v2';
const NOTES_KEY = 'our_little_journey_notes_v2';

// Default pre-populated sample couple dreams to make the app feel alive and personal immediately!
const DEFAULT_BUCKET_ITEMS = {
  'blr-palace': { id: 'blr-palace', title: 'Bengaluru Palace', type: 'place', status: 'visited', state: 'Karnataka', isTemple: false },
  'blr-cubbon-park': { id: 'blr-cubbon-park', title: 'Cubbon Park', type: 'place', status: 'visited', state: 'Karnataka', isTemple: false },
  'blr-temple-iskcon': { id: 'blr-temple-iskcon', title: 'ISKCON Temple', type: 'temple', status: 'visited', state: 'Karnataka', isTemple: true },
  'trip-nandi-hills': { id: 'trip-nandi-hills', title: 'Nandi Hills Sunrise', type: 'trip', status: 'must_visit', state: 'Karnataka', isTemple: false },
  'romantic-udaipur': { id: 'romantic-udaipur', title: 'Udaipur Lake Pichola', type: 'romantic', status: 'must_visit', state: 'Rajasthan', isTemple: false },
  'romantic-munnar': { id: 'romantic-munnar', title: 'Munnar Tea Hills', type: 'romantic', status: 'want_to_visit', state: 'Kerala', isTemple: false },
  'jyotirlinga-kedarnath': { id: 'jyotirlinga-kedarnath', title: 'Kedarnath Temple', type: 'temple', status: 'must_visit', state: 'Uttarakhand', isTemple: true },
  'romantic-kashmir': { id: 'romantic-kashmir', title: 'Kashmir Shikara Ride', type: 'romantic', status: 'want_to_visit', state: 'Jammu & Kashmir', isTemple: false }
};

const DEFAULT_NOTES = {
  'blr-cubbon-park': 'Our first coffee walk under the mahogany trees ❤️',
  'blr-palace': 'Remember taking royal pictures in the palace courtyard!',
  'trip-nandi-hills': 'Must wake up at 4 AM to catch the cloud bed together.'
};

export const BucketListProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_BUCKET_ITEMS;
    } catch (e) {
      console.error('Failed to load bucket list from localStorage', e);
      return DEFAULT_BUCKET_ITEMS;
    }
  });

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(NOTES_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_NOTES;
    } catch (e) {
      return DEFAULT_NOTES;
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bucketList));
    } catch (e) {
      console.error('Failed to save bucket list', e);
    }
  }, [bucketList]);

  useEffect(() => {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to save notes', e);
    }
  }, [notes]);

  const showToast = (message, type = 'heart') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage((current) => (current?.id === current?.id ? null : current));
    }, 3500);
  };

  const setItemStatus = (item, status) => {
    if (!status) {
      // Remove item
      setBucketList((prev) => {
        const next = { ...prev };
        delete next[item.id];
        return next;
      });
      showToast(`Removed "${item.name || item.title}" from our journey.`);
      return;
    }

    const title = item.name || item.title;
    const isTemple = item.category?.toLowerCase().includes('temple') || item.deity || item.id.includes('temple') || item.id.includes('jyotirlinga');
    const state = item.state || 'Karnataka';

    const updatedItem = {
      id: item.id,
      title,
      type: item.type || (isTemple ? 'temple' : 'place'),
      status, // 'want_to_visit' | 'must_visit' | 'visited'
      state,
      isTemple: !!isTemple,
      image: item.image || '',
      location: item.location || item.city || ''
    };

    setBucketList((prev) => ({
      ...prev,
      [item.id]: updatedItem
    }));

    if (status === 'visited') {
      // Trigger festive romantic confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c86d6d', '#dfb15b', '#1e392a', '#e8a598', '#ffffff']
        });
      } catch (err) {
        // ignore if not supported
      }
      showToast(`Celebration! Marked "${title}" as Visited together! 🎉`, 'star');
    } else if (status === 'must_visit') {
      showToast(`Added "${title}" as a ⭐ Must Visit place for us!`, 'star');
    } else {
      showToast(`Added "${title}" to our ❤️ Want to Visit list!`, 'heart');
    }
  };

  const getItemStatus = (id) => {
    return bucketList[id]?.status || null;
  };

  const setItemNote = (id, noteText) => {
    setNotes((prev) => ({
      ...prev,
      [id]: noteText
    }));
    showToast('Saved our personal note! 💌', 'note');
  };

  const getItemNote = (id) => {
    return notes[id] || '';
  };

  // Live Statistics
  const itemsArray = Object.values(bucketList);
  const placesPlanned = itemsArray.filter((item) => item.status === 'want_to_visit' || item.status === 'must_visit').length;
  const placesVisited = itemsArray.filter((item) => item.status === 'visited').length;
  
  // Unique states explored
  const exploredStatesSet = new Set(
    itemsArray.filter((item) => item.status === 'visited' && item.state).map((item) => item.state)
  );
  // Always count at least Karnataka if visited any blr spot
  const statesExplored = Math.max(exploredStatesSet.size, placesVisited > 0 ? 1 : 0);

  const templesVisited = itemsArray.filter((item) => item.status === 'visited' && item.isTemple).length;

  return (
    <BucketListContext.Provider
      value={{
        bucketList,
        setItemStatus,
        getItemStatus,
        setItemNote,
        getItemNote,
        toastMessage,
        setToastMessage,
        stats: {
          placesPlanned,
          placesVisited,
          statesExplored,
          templesVisited,
          totalSaved: itemsArray.length
        }
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export const useBucketList = () => {
  const context = useContext(BucketListContext);
  if (!context) {
    throw new Error('useBucketList must be used within a BucketListProvider');
  }
  return context;
};
