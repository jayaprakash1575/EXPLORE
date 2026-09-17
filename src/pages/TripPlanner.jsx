import React, { useState } from 'react';
import { Compass, Calendar, Clock, DollarSign, MapPin, Utensils, Heart, ArrowRight, ExternalLink } from 'lucide-react';

const TRIP_DESTINATIONS = [
  {
    id: 'plan-coorg',
    name: 'Coorg (Kodagu)',
    state: 'Karnataka',
    distance: '250 km from Bengaluru',
    route: 'Bengaluru → Mandya → Hunsur → Kushalnagar → Madikeri (Via NH 275)',
    transport: 'Scenic self-drive (5 hrs) or KSRTC Club Class Bus',
    suggestedDays: 3,
    budgetTiers: {
      budget: '₹4,000 - ₹7,000',
      comfortable: '₹9,000 - ₹15,000',
      premium: '₹22,000 - ₹40,000'
    },
    itinerary: [
      { day: 'Day 1', title: 'Coffee Blossoms & Golden Temple', desc: 'Drive from Bengaluru early. Stop at Bidadi for hot Thatte Idli. Visit Namdroling Monastery (Golden Temple) in Bylakuppe, then check into a coffee estate cottage.' },
      { day: 'Day 2', title: 'Cascading Waterfalls & Raja’s Seat', desc: 'Morning visit to Abbey Falls. Afternoon spice plantation walk. Watch the valley sunset from Raja’s Seat as the musical fountain plays.' },
      { day: 'Day 3', title: 'Mandalpatti Peak & Homeward Coffee', desc: '4x4 Jeep ride up Mandalpatti for misty cloud views. Buy homemade artisanal coffee and dark chocolates before driving back to Bengaluru.' }
    ],
    foodToTry: ['Authentic Pandi Curry', 'Kadambuttu (Rice balls)', 'Bamboo shoot curry (Baimbale)', 'Coorg filter coffee and homemade passionfruit wine'],
    romanticHighlight: 'Bonfire under pine trees outside your plantation villa while sipping freshly brewed estate coffee.'
  },
  {
    id: 'plan-ooty',
    name: 'Ooty & Nilgiri Mountains',
    state: 'Tamil Nadu',
    distance: '275 km from Bengaluru',
    route: 'Bengaluru → Mysuru → Bandipur National Park → Mudumalai → 36 Hairpin Kalhatty Ghats → Ooty',
    transport: 'Road trip (6 hrs) through tiger reserves or Train to Coimbatore + Mountain road',
    suggestedDays: 3,
    budgetTiers: {
      budget: '₹5,000 - ₹8,000',
      comfortable: '₹10,000 - ₹18,000',
      premium: '₹25,000 - ₹45,000'
    },
    itinerary: [
      { day: 'Day 1', title: 'Bandipur Safari & Ooty Pine Woods', desc: 'Scenic morning drive through Bandipur tiger reserve. Climb the dramatic Kalhatty ghats into the cool Nilgiri air. Evening walk around Ooty Lake.' },
      { day: 'Day 2', title: 'Heritage Toy Train to Coonoor', desc: 'Ride the blue UNESCO Nilgiri Mountain Toy Train to Coonoor. Visit Sim’s Park and dolphin’s nose tea viewpoint.' },
      { day: 'Day 3', title: 'Rose Garden & Homemade Chocolates', desc: 'Stroll through the Rose Garden with over 20,000 varieties. Pick King Star homemade fudges before heading back down the mountain.' }
    ],
    foodToTry: ['Nilgiri South Indian Thali', 'Homemade fudge and chocolate truffles', 'Nilgiri Green Tea', 'Crispy Vada at local tea stalls'],
    romanticHighlight: 'Leaning together against the open window of the wooden toy train as it chugs through misty mountain tunnels.'
  },
  {
    id: 'plan-munnar',
    name: 'Munnar Tea Hills',
    state: 'Kerala',
    distance: '475 km from Bengaluru',
    route: 'Bengaluru → Salem → Dindigul → Theni → Bodimettu Ghats → Munnar',
    transport: 'Overnight sleeper bus or train to Ernakulam / Madurai + 3.5 hr cab',
    suggestedDays: 4,
    budgetTiers: {
      budget: '₹7,000 - ₹11,000',
      comfortable: '₹14,000 - ₹24,000',
      premium: '₹32,000 - ₹55,000'
    },
    itinerary: [
      { day: 'Day 1', title: 'Arrival into the Emerald Clouds', desc: 'Arrive in Munnar, check into a hillside resort overlooking tea terraces. Afternoon walk through fragrant cardamom plantations.' },
      { day: 'Day 2', title: 'Top Station & Kundala Lake', desc: 'Early morning drive to Top Station to see the clouds rolling below your feet. Paddle boating on Kundala Lake amidst cherry blossoms.' },
      { day: 'Day 3', title: 'Eravikulam & Tea Museum', desc: 'Spot the rare Nilgiri Tahr at Eravikulam National Park. Learn tea processing at the Tea Museum with tasting.' },
      { day: 'Day 4', title: 'Ayurvedic Pampering & Departure', desc: 'Indulge in a couple Ayurvedic herbal oil massage before setting out on the return journey.' }
    ],
    foodToTry: ['Appam with vegetable stew', 'Kerala banana chips fried in fresh coconut oil', 'Malabar parotta with chicken roast', 'Cardamom spiced tea'],
    romanticHighlight: 'Drinking hot cardamom tea from your balcony wrapped in a shared woollen blanket while mountain mist rolls right into the room.'
  },
  {
    id: 'plan-goa',
    name: 'South Goa (Quiet Coastal Romance)',
    state: 'Goa',
    distance: '560 km from Bengaluru',
    route: 'Bengaluru → Tumakuru → Chitradurga → Hubballi → Dharwad → Mollem → South Goa',
    transport: 'Direct Flight (1 hr 15 mins) or overnight KSRTC sleeper bus (11 hrs)',
    suggestedDays: 4,
    budgetTiers: {
      budget: '₹8,000 - ₹14,000',
      comfortable: '₹18,000 - ₹30,000',
      premium: '₹40,000 - ₹75,000'
    },
    itinerary: [
      { day: 'Day 1', title: 'Palolem Beach & Sunkissed Sands', desc: 'Arrive and check into a beach cottage. Barefoot sunset walk along Palolem cove with gentle Arabian Sea waves.' },
      { day: 'Day 2', title: 'Fontainhas Heritage Walk', desc: 'Rent a pastel scooter and ride to Panaji to explore the colorful Portuguese Latin quarter of Fontainhas. Evening dinner at an old haveli bistro.' },
      { day: 'Day 3', title: 'Cabo de Rama Fort & Butterfly Beach', desc: 'Visit the cliff fort of Cabo de Rama. Afternoon boat trip to secluded Butterfly Beach to spot dolphins.' },
      { day: 'Day 4', title: 'Lazy Brunch & Souvenirs', desc: 'Lazy Sunday brunch at a quiet garden cafe with warm bebinca and espresso before flying back to Bengaluru.' }
    ],
    foodToTry: ['Goan Fish Curry Thali with red rice', 'Prawn Balchão', 'Warm Bebinca with coconut ice cream', 'Crusty local Poi bread'],
    romanticHighlight: 'Candlelit dinner right on the sand at Palolem, with fairy lights, wave sounds, and acoustic guitar songs.'
  },
  {
    id: 'plan-udaipur',
    name: 'Udaipur (Royal Palace Romance)',
    state: 'Rajasthan',
    distance: '1,720 km from Bengaluru',
    route: 'Direct Flight from Bengaluru (BLR) to Udaipur (UDR) - 2 hrs 15 mins',
    transport: 'Direct non-stop flight from Kempegowda International Airport',
    suggestedDays: 4,
    budgetTiers: {
      budget: '₹12,000 - ₹18,000',
      comfortable: '₹24,000 - ₹40,000',
      premium: '₹55,000 - ₹1,20,000'
    },
    itinerary: [
      { day: 'Day 1', title: 'Lake Pichola & Sunset Boat Cruise', desc: 'Fly in from Bengaluru. Check into a heritage lakeside haveli. Private sunset boat cruise past the floating Lake Palace.' },
      { day: 'Day 2', title: 'City Palace & Courtyards', desc: 'Tour the sprawling City Palace complex with mirror mosaics and royal balconies. Evening dinner at Ambrai overlooking the illuminated palace.' },
      { day: 'Day 3', title: 'Saheliyon Ki Bari & Monsoon Palace', desc: 'Walk through the marble elephant fountains of Saheliyon Ki Bari. Drive up Sajjangarh (Monsoon Palace) for sweeping sunset views.' },
      { day: 'Day 4', title: 'Silver Bazaars & Departure', desc: 'Browse the silver jewellery and miniature painting shops near Jagdish Temple before the return flight.' }
    ],
    foodToTry: ['Dal Baati Churma with pure ghee', 'Laal Maas', 'Ghevar soaked in saffron syrup', 'Kullad Chai by the ghats'],
    romanticHighlight: 'Rooftop candlelit dinner at Ambrai as the City Palace glows like pure gold on the dark waters of Lake Pichola.'
  }
];

export const TripPlanner = () => {
  const [selectedDestId, setSelectedDestId] = useState(TRIP_DESTINATIONS[0].id);
  const [days, setDays] = useState(3);
  const [style, setStyle] = useState('comfortable'); // 'budget' | 'comfortable' | 'premium'

  const activeTrip = TRIP_DESTINATIONS.find((t) => t.id === selectedDestId) || TRIP_DESTINATIONS[0];

  return (
    <div className="planner-page animate-fade-in">
      {/* Header */}
      <section className="planner-hero-header">
        <div className="container">
          <div className="planner-header-content">
            <span className="section-tag">
              <Compass size={14} color="#234d35" />
              Bengaluru Departure Hub
            </span>
            <h1 className="planner-main-title">Trip Planner</h1>
            <p className="planner-subtitle">"From Bengaluru to our next beautiful chapter."</p>
          </div>

          {/* Interactive Planner Controls */}
          <div className="planner-control-card glass-panel">
            <div className="control-group">
              <label className="control-label">
                <MapPin size={14} className="text-green" />
                <span>Starting Point</span>
              </label>
              <div className="control-fixed-val">🌹 Bengaluru, Karnataka</div>
            </div>

            <div className="control-group">
              <label className="control-label">
                <Compass size={14} className="text-rose" />
                <span>Choose Our Destination</span>
              </label>
              <select
                className="planner-select"
                value={selectedDestId}
                onChange={(e) => setSelectedDestId(e.target.value)}
              >
                {TRIP_DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.state})
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label className="control-label">
                <Calendar size={14} className="text-gold" />
                <span>Trip Duration</span>
              </label>
              <div className="days-btn-group">
                {[2, 3, 4, 5].map((d) => (
                  <button
                    key={d}
                    className={`day-btn ${days === d ? 'active' : ''}`}
                    onClick={() => setDays(d)}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">
                <DollarSign size={14} className="text-rose" />
                <span>Travel Style</span>
              </label>
              <div className="style-btn-group">
                <button
                  className={`style-btn ${style === 'budget' ? 'active' : ''}`}
                  onClick={() => setStyle('budget')}
                >
                  Budget
                </button>
                <button
                  className={`style-btn ${style === 'comfortable' ? 'active' : ''}`}
                  onClick={() => setStyle('comfortable')}
                >
                  Comfortable
                </button>
                <button
                  className={`style-btn ${style === 'premium' ? 'active' : ''}`}
                  onClick={() => setStyle('premium')}
                >
                  Romantic Luxury
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generated Itinerary Output */}
      <div className="container section-padding">
        <div className="planner-results-card glass-panel">
          {/* Header Bar */}
          <div className="planner-results-header">
            <div>
              <span className="results-badge">Customized For Us</span>
              <h2 className="results-title">Bengaluru → {activeTrip.name}</h2>
              <p className="results-dist">{activeTrip.distance} • {days} Days Planned</p>
            </div>

            <div className="results-budget-badge">
              <span className="budget-label">Estimated Budget ({style})</span>
              <span className="budget-val">{activeTrip.budgetTiers[style]}</span>
            </div>
          </div>

          {/* Route & Transport info */}
          <div className="route-info-box">
            <div className="route-item">
              <strong>Recommended Route:</strong> {activeTrip.route}
            </div>
            <div className="route-item">
              <strong>Best Mode of Travel:</strong> {activeTrip.transport}
            </div>
          </div>

          {/* Romantic Moment */}
          <div className="romantic-quote-box">
            <div className="romantic-quote-header">
              <Heart size={15} fill="#c86d6d" color="#c86d6d" />
              <span>A Special Romantic Moment for Us</span>
            </div>
            <p className="romantic-quote-text">"{activeTrip.romanticHighlight}"</p>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="itinerary-section">
            <h3 className="itinerary-heading">Suggested Day-by-Day Itinerary</h3>
            <div className="itinerary-timeline">
              {activeTrip.itinerary.slice(0, days).map((step, idx) => (
                <div key={idx} className="itinerary-step">
                  <div className="step-marker">{step.day}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food to Try on this Trip */}
          <div className="trip-food-section">
            <h3 className="trip-food-heading">
              <Utensils size={16} color="#234d35" />
              <span>Signature Foods We Must Taste Together</span>
            </h3>
            <div className="trip-food-tags">
              {activeTrip.foodToTry.map((food, i) => (
                <span key={i} className="trip-food-tag">{food}</span>
              ))}
            </div>
          </div>

          {/* Quick Map Action */}
          <div className="planner-action-bar">
            <a
              href={`https://www.google.com/maps/dir/Bengaluru,+Karnataka/${encodeURIComponent(activeTrip.name + ' ' + activeTrip.state)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} />
              <span>Open Driving Route in Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .planner-hero-header {
          padding: 5rem 0 2.5rem 0;
          background: linear-gradient(180deg, rgba(254, 246, 238, 0.9) 0%, rgba(254, 236, 226, 0.95) 60%, rgba(250, 228, 218, 0.85) 100%);
          border-bottom: 1px solid rgba(200, 109, 109, 0.18);
          text-align: center;
        }
        .planner-header-content {
          max-width: 700px;
          margin: 0 auto 2.5rem auto;
        }
        .planner-main-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          color: var(--color-green-deep);
          margin-bottom: 0.5rem;
        }
        .planner-subtitle {
          font-family: var(--font-quote);
          font-size: 1.5rem;
          color: var(--color-rose-deep);
          font-style: italic;
        }
        .planner-control-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 249, 243, 0.9) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(200, 109, 109, 0.3);
          border-radius: var(--radius-lg);
          padding: 2.2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          box-shadow: 0 16px 45px rgba(78, 52, 46, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
          text-align: left;
        }
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .control-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-green-deep);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .control-fixed-val {
          background: var(--color-cream-subtle);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-brown-deep);
          border: 1px solid var(--color-cream-darker);
        }
        .planner-select {
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-cream-darker);
          font-family: var(--font-body);
          font-size: 0.9rem;
          background: #ffffff;
          color: var(--color-brown-deep);
          outline: none;
        }
        .days-btn-group, .style-btn-group {
          display: flex;
          gap: 0.35rem;
        }
        .day-btn, .style-btn {
          flex: 1;
          padding: 0.6rem 0.4rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-cream-darker);
          background: var(--color-cream-subtle);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-brown-mid);
          transition: all 0.2s ease;
        }
        .day-btn.active, .style-btn.active {
          background: var(--color-green-deep);
          color: #ffffff;
          border-color: var(--color-green-deep);
        }
        .planner-results-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 3rem;
          border: 1px solid var(--color-rose-border);
          box-shadow: var(--shadow-md);
        }
        .planner-results-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--color-cream-darker);
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .results-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-rose-deep);
          letter-spacing: 0.05em;
        }
        .results-title {
          font-size: 2.2rem;
          color: var(--color-green-deep);
        }
        .results-dist {
          font-size: 0.9rem;
          color: var(--color-brown-muted);
        }
        .results-budget-badge {
          text-align: right;
          background: var(--color-gold-light);
          border: 1px solid var(--color-gold-border);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
        }
        .budget-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: #8c6812;
        }
        .budget-val {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-green-deep);
        }
        .route-info-box {
          background: var(--color-cream-subtle);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          font-size: 0.9rem;
          color: var(--color-brown-deep);
        }
        .itinerary-section {
          margin: 2rem 0;
        }
        .itinerary-heading {
          font-size: 1.35rem;
          color: var(--color-green-deep);
          margin-bottom: 1.5rem;
        }
        .itinerary-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .itinerary-step {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .step-marker {
          background: var(--color-green-deep);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-pill);
          flex-shrink: 0;
        }
        .step-title {
          font-size: 1.1rem;
          color: var(--color-green-deep);
          margin-bottom: 0.25rem;
        }
        .step-desc {
          font-size: 0.9rem;
          color: var(--color-brown-mid);
          line-height: 1.6;
        }
        .trip-food-section {
          background: #faf7f2;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }
        .trip-food-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          color: var(--color-green-deep);
          margin-bottom: 1rem;
        }
        .trip-food-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .trip-food-tag {
          background: #ffffff;
          border: 1px solid var(--color-cream-darker);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          color: var(--color-brown-deep);
        }
        .planner-action-bar {
          text-align: center;
          margin-top: 2rem;
        }

        @media (max-width: 900px) {
          .planner-control-card {
            grid-template-columns: 1fr;
          }
          .planner-results-header {
            flex-direction: column;
          }
          .results-budget-badge {
            text-align: left;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .trip-planner-header {
            padding: 3.5rem 0 2rem 0;
          }
          .planner-main-title {
            font-size: 2.2rem;
          }
          .planner-subtitle {
            font-size: 1.25rem;
          }
          .planner-control-card {
            padding: 1.25rem;
            gap: 1.25rem;
          }
          .planner-results-card {
            padding: 1.35rem;
          }
          .results-title {
            font-size: 1.65rem;
          }
          .itinerary-step {
            flex-direction: column;
            gap: 0.5rem;
          }
          .trip-food-section {
            padding: 1.15rem;
          }
        }

        @media (max-width: 480px) {
          .trip-planner-header {
            padding: 2.75rem 0 1.5rem 0;
          }
          .planner-main-title {
            font-size: 1.85rem;
          }
          .planner-control-card {
            padding: 1rem;
          }
          .planner-results-card {
            padding: 1rem;
          }
          .results-title {
            font-size: 1.4rem;
          }
          .days-btn-group, .style-btn-group {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};
