// Regions and Destinations across India for the Regional Explorer

export const REGIONS_DATA = {
  'south-india': {
    name: 'South India',
    tagline: 'Ancient Dravidian Temples, Serene Backwaters & Lush Western Ghats',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Complex_of_Virupaksha_Temple%2C_Hampi_%2804%29.jpg/1280px-Complex_of_Virupaksha_Temple%2C_Hampi_%2804%29.jpg',
    states: [
      {
        stateName: 'Karnataka',
        cities: [
          { name: 'Hampi', highlight: 'UNESCO World Heritage boulder-strewn ruins of the Vijayanagara Empire on the banks of Tungabhadra river.' },
          { name: 'Mysuru', highlight: 'The City of Palaces, famous for the illuminated Mysore Palace, Chamundi Hill, and Mysore Pak.' },
          { name: 'Coorg (Madikeri)', highlight: 'The Scotland of India with fragrant coffee plantations, Abbey Falls, and mist-kissed mornings.' },
          { name: 'Gokarna', highlight: 'Pristine coastal haven with Om Beach, Kudle Beach cliffs, and ancient Mahabaleshwar Temple.' },
          { name: 'Udupi & Murudeshwar', highlight: 'Coastal temple towns with Krishna Matha, Malpe Beach, and the colossal sea-facing Shiva statue.' },
          { name: 'Chikmagalur', highlight: 'Mullayanagiri peak (highest in Karnataka), lush estates, and tranquil mountain homestays.' },
          { name: 'Belur & Halebidu', highlight: 'Intricately carved 12th-century Hoysala soapstone temples.' },
          { name: 'Badami, Pattadakal & Aihole', highlight: 'Cradle of temple architecture with 6th-century rock-cut cave temples.' },
          { name: 'Dharmasthala & Kukke Subramanya', highlight: 'Deeply revered spiritual pilgrimage shrines in the Western Ghats.' }
        ]
      },
      {
        stateName: 'Tamil Nadu',
        cities: [
          { name: 'Chennai', highlight: 'Marina Beach, classical music sabhas, and historic Fort St. George.' },
          { name: 'Madurai', highlight: 'Meenakshi Amman temple, vibrant flower markets, and night street food.' },
          { name: 'Rameshwaram', highlight: 'Pamban Sea Bridge, sacred Jyotirlinga, and the ghost town of Dhanushkodi.' },
          { name: 'Thanjavur', highlight: 'The Great Living Chola Brihadisvara Temple with its monolithic granite vimana.' },
          { name: 'Kanchipuram & Mahabalipuram', highlight: 'City of Thousand Temples, Kanjeevaram silk weavers, and UNESCO shore rock reliefs.' },
          { name: 'Ooty & Kodaikanal', highlight: 'Colonial hill stations with Nilgiri Toy Train, botanical gardens, and boating lakes.' },
          { name: 'Kanyakumari', highlight: 'The southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean merge.' }
        ]
      },
      {
        stateName: 'Kerala',
        cities: [
          { name: 'Munnar', highlight: 'Rolling emerald tea carpets, Anamudi peak, and cool mountain air.' },
          { name: 'Alleppey (Alappuzha)', highlight: 'Venice of the East with private houseboat cruises through coconut palm canals.' },
          { name: 'Wayanad', highlight: 'Edakkal prehistoric caves, Chembra heart-shaped lake, and rain forest treehouses.' },
          { name: 'Kochi (Cochin)', highlight: 'Fort Kochi colonial streets, Chinese fishing nets, spice markets, and art cafes.' },
          { name: 'Varkala & Kovalam', highlight: 'Red cliff beaches overlooking the Arabian Sea with seaside sunset restaurants.' },
          { name: 'Thekkady', highlight: 'Periyar Tiger Reserve boat safari and fragrant cardamom spice walks.' },
          { name: 'Guruvayur', highlight: 'Revered Krishna temple with centuries-old devotional traditions.' }
        ]
      },
      {
        stateName: 'Andhra Pradesh',
        cities: [
          { name: 'Tirupati', highlight: 'Tirumala Venkateswara temple perched on the sacred seven hills.' },
          { name: 'Visakhapatnam (Vizag)', highlight: 'City of Destiny with RK Beach, Kailasagiri hill ropeway, and Submarine Museum.' },
          { name: 'Araku Valley', highlight: 'Tribal coffee plantations, waterfalls, and scenic hill train tunnels.' },
          { name: 'Vijayawada', highlight: 'Kanaka Durga temple on Indrakeeladri hill overlooking Krishna river.' },
          { name: 'Srisailam', highlight: 'Mallikarjuna Jyotirlinga and massive river dam in Nallamala forests.' }
        ]
      },
      {
        stateName: 'Telangana',
        cities: [
          { name: 'Hyderabad', highlight: 'Charminar, Golconda Fort sound & light show, Chowmahalla Palace, and world-class Biryani.' },
          { name: 'Warangal', highlight: 'Thousand Pillar Temple, Kakatiya stone gates, and Ramappa Temple.' }
        ]
      }
    ]
  },
  'north-india': {
    name: 'North India',
    tagline: 'Snow-Capped Himalayan Summits, Royal Fortresses & Spiritual Holy Rivers',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg',
    states: [
      {
        stateName: 'Uttar Pradesh',
        cities: [
          { name: 'Agra', highlight: 'Taj Mahal, Agra Fort, and Mehtab Bagh sunset viewpoints.' },
          { name: 'Varanasi', highlight: 'Kashi Vishwanath Jyotirlinga, morning Ganga boat rides, and evening Dashashwamedh Aarti.' },
          { name: 'Ayodhya', highlight: 'Ram Janmabhoomi Mandir, Kanak Bhavan, and peaceful Sarayu river ghats.' },
          { name: 'Mathura & Vrindavan', highlight: 'Lord Krishna\'s birthplace, Banke Bihari temple, and marble Prem Mandir.' },
          { name: 'Lucknow', highlight: 'Bara Imambara, delicate Chikan embroidery, and Nawabi Awadhi dining.' },
          { name: 'Prayagraj', highlight: 'Triveni Sangam confluence of Ganga, Yamuna, and mythical Saraswati.' },
          { name: 'Sarnath', highlight: 'Where Gautama Buddha gave his first sermon and Ashoka Pillar.' }
        ]
      },
      {
        stateName: 'Rajasthan',
        cities: [
          { name: 'Jaipur', highlight: 'Hawa Mahal, Amber Fort elephant path, City Palace, and Nahargarh sunset.' },
          { name: 'Udaipur', highlight: 'Lake Pichola royal boat cruises, City Palace, and romantic lakeside dining.' },
          { name: 'Jodhpur', highlight: 'Towering Mehrangarh Fort and indigo blue houses of the old town.' },
          { name: 'Jaisalmer', highlight: 'The Golden Fort of yellow sandstone, Sam sand dunes camel safari, and stargazing.' },
          { name: 'Pushkar & Ajmer', highlight: 'Sacred Pushkar lake, Brahma temple, and Ajmer Sharif Dargah.' },
          { name: 'Chittorgarh', highlight: 'India\'s largest fort complex, Tower of Victory (Vijay Stambha), and Padmini Palace.' },
          { name: 'Mount Abu', highlight: 'Rajasthan\'s only hill station with Nakki Lake and exquisite marble Dilwara Jain temples.' }
        ]
      },
      {
        stateName: 'Delhi',
        cities: [
          { name: 'Central & Old Delhi', highlight: 'India Gate, Red Fort, Qutub Minar, Humayun’s Tomb, Lotus Temple, and Jama Masjid.' }
        ]
      },
      {
        stateName: 'Uttarakhand',
        cities: [
          { name: 'Kedarnath & Badrinath', highlight: 'Sacred Himalayan shrines surrounded by snow peaks and glaciers.' },
          { name: 'Haridwar & Rishikesh', highlight: 'Ganga Aarti, yoga ashrams, river rafting, and suspension bridges.' },
          { name: 'Nainital & Mussoorie', highlight: 'Sparkling crescent lake in Nainital and Queen of the Hills viewpoints in Mussoorie.' },
          { name: 'Auli', highlight: 'India’s premier ski destination with sweeping vistas of Nanda Devi peak.' }
        ]
      },
      {
        stateName: 'Himachal Pradesh',
        cities: [
          { name: 'Shimla', highlight: 'The Ridge, Mall Road, Christ Church, and Kalka-Shimla Toy Train.' },
          { name: 'Manali', highlight: 'Solang Valley, Rohtang Pass, Old Manali wooden cafes, and apple orchards.' },
          { name: 'Dharamshala & McLeodganj', highlight: 'Abode of the Dalai Lama, Tibetan monasteries, and Triund trek.' },
          { name: 'Spiti Valley', highlight: 'Cold mountain desert, Key Monastery, Chandratal lake, and high passes.' },
          { name: 'Kasol & Dalhousie', highlight: 'Parvati river pine trails in Kasol, and colonial pine forests in Dalhousie.' }
        ]
      },
      {
        stateName: 'Jammu & Kashmir',
        cities: [
          { name: 'Srinagar', highlight: 'Dal Lake shikara rides, floating vegetable markets, and Mughal gardens.' },
          { name: 'Gulmarg', highlight: 'Gulmarg Gondola (world’s highest cable car) and powdery snow slopes.' },
          { name: 'Pahalgam & Sonamarg', highlight: 'Betaab Valley, Lidder river pine walks, and Thajiwas Glacier.' },
          { name: 'Vaishno Devi & Amarnath', highlight: 'Revered mountain cave pilgrimages of deep faith.' }
        ]
      }
    ]
  },
  'west-india': {
    name: 'West India',
    tagline: 'Sunkissed Coastlines, Ancient Rock-Cut Marvels & Arabian Sea Sunsets',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg',
    states: [
      {
        stateName: 'Maharashtra',
        cities: [
          { name: 'Mumbai', highlight: 'Marine Drive Queen’s Necklace, Gateway of India, Colaba cafes, and ferry to Elephanta.' },
          { name: 'Pune & Lonavala-Khandala', highlight: 'Cultural capital, monsoon waterfalls, Tiger\'s Leap, and Bhushi Dam.' },
          { name: 'Mahabaleshwar & Panchgani', highlight: 'Strawberry farms, Arthur\'s Seat viewpoint, and Venna Lake boating.' },
          { name: 'Nashik & Shirdi', highlight: 'Trimbakeshwar Jyotirlinga, Sula Vineyards, and Sai Baba Samadhi temple.' },
          { name: 'Ajanta & Ellora', highlight: 'UNESCO rock-cut caves with 2,000-year-old Buddhist murals and Kailasa temple.' },
          { name: 'Alibaug', highlight: 'Sandy coastal getaway with Kolaba sea fort and coconut groves.' }
        ]
      },
      {
        stateName: 'Gujarat',
        cities: [
          { name: 'Rann of Kutch', highlight: 'The White Desert Rann Utsav, moonlit salt plains, and vibrant Kutchi handicrafts.' },
          { name: 'Statue of Unity', highlight: 'The world\'s tallest statue (182m) with scenic Narmada valley and riverfront gardens.' },
          { name: 'Somnath & Dwarka', highlight: 'Sacred coastal Jyotirlinga and Char Dham temple along the Arabian Sea.' },
          { name: 'Gir National Park', highlight: 'The sole wilderness home of the majestic Asiatic Lion.' },
          { name: 'Diu Island', highlight: 'Portuguese sea fort, Naida caves, and quiet palm beaches.' }
        ]
      },
      {
        stateName: 'Goa',
        cities: [
          { name: 'Panaji & Old Goa', highlight: 'Fontainhas colorful Latin quarter and Basilica of Bom Jesus.' },
          { name: 'North Goa (Baga, Calangute, Anjuna, Vagator)', highlight: 'Beach shacks, water sports, Chapora Fort, and sunset music.' },
          { name: 'South Goa (Palolem, Agonda, Colva)', highlight: 'Tranquil white crescent beaches, dolphin cruises, and quiet romantic serenity.' },
          { name: 'Dudhsagar Waterfalls & Fort Aguada', highlight: 'Four-tiered milky waterfall cascading through Western Ghats railway track.' }
        ]
      }
    ]
  },
  'east-india': {
    name: 'East India',
    tagline: 'Timeless Spiritual Sanctuaries, Colonial Heritage & Untouched Waterways',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1280px-Victoria_Memorial_situated_in_Kolkata.jpg',
    states: [
      {
        stateName: 'Odisha',
        cities: [
          { name: 'Puri', highlight: 'Jagannath Temple, Golden Beach sunset, and sacred Mahaprasad.' },
          { name: 'Konark', highlight: 'The 13th-century Sun Temple designed as a cosmic chariot with 24 carved stone wheels.' },
          { name: 'Bhubaneswar', highlight: 'Temple City of India with Lingaraj, Mukteshwar, and Khandagiri caves.' },
          { name: 'Chilika Lake', highlight: 'Asia’s largest lagoon with playful Irrawaddy dolphins and bird islands.' }
        ]
      },
      {
        stateName: 'West Bengal',
        cities: [
          { name: 'Kolkata', highlight: 'Victoria Memorial marble gardens, iconic Howrah Bridge, Tram rides, and Park Street.' },
          { name: 'Darjeeling', highlight: 'Himalayan Toy Train, rolling tea gardens, and Kanchenjunga sunrise from Tiger Hill.' },
          { name: 'Sundarbans', highlight: 'The world\'s largest mangrove delta forest, home to the Royal Bengal Tiger.' }
        ]
      },
      {
        stateName: 'Bihar',
        cities: [
          { name: 'Bodh Gaya', highlight: 'The sacred Mahabodhi Temple and Bodhi Tree where Buddha attained enlightenment.' },
          { name: 'Nalanda & Rajgir', highlight: 'Ruins of ancient world university, Vulture Peak, and hot water springs.' },
          { name: 'Patna', highlight: 'Historical Pataliputra, Takht Sri Patna Sahib, and Ganges riverfront.' }
        ]
      },
      {
        stateName: 'Jharkhand',
        cities: [
          { name: 'Deoghar', highlight: 'Baba Baidyanath Jyotirlinga and sacred Shravan Mela.' },
          { name: 'Netarhat', highlight: 'Queen of Chotanagpur, pine forests, and sunrise at Magnolia Point.' },
          { name: 'Ranchi Waterfalls', highlight: 'Hundru, Dassam, and Jonha falls cascading over rocky cliffs.' }
        ]
      }
    ]
  },
  'northeast-india': {
    name: 'Northeast India',
    tagline: 'Living Root Bridges, Cloud Kingdoms & Untamed Himalayan Valleys',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg/1280px-Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg',
    states: [
      {
        stateName: 'Meghalaya',
        cities: [
          { name: 'Shillong', highlight: 'Scotland of the East, Ward’s Lake, cafe music scene, and Elephant Falls.' },
          { name: 'Cherrapunji (Sohra)', highlight: 'Nohkalikai Falls, Seven Sisters Falls, and Mawsmai limestone caves.' },
          { name: 'Dawki & Umngot River', highlight: 'Crystal clear glass-like river where boats float on transparent water.' },
          { name: 'Nongriat', highlight: 'The incredible Double Decker Living Root Bridge grown over 200 years.' }
        ]
      },
      {
        stateName: 'Sikkim',
        cities: [
          { name: 'Gangtok', highlight: 'MG Marg pedestrian promenade, ropeway views, and Rumtek Monastery.' },
          { name: 'Pelling', highlight: 'Glass skywalk overlooking Kanchenjunga, and Rabdentse royal palace ruins.' },
          { name: 'Tsomgo Lake & Nathula Pass', highlight: 'Sacred glacial lake at 12,310 ft and historic Indo-China border pass.' }
        ]
      },
      {
        stateName: 'Assam',
        cities: [
          { name: 'Guwahati & Kamakhya', highlight: 'Nilachal Hill Shakti shrine and Brahmaputra sunset cruises.' },
          { name: 'Kaziranga National Park', highlight: 'Elephant & jeep safaris to spot the majestic one-horned rhinos.' },
          { name: 'Majuli', highlight: 'World’s largest river island with ancient Vaishnavite Satra monasteries and pottery.' }
        ]
      },
      {
        stateName: 'Arunachal Pradesh',
        cities: [
          { name: 'Tawang', highlight: 'India\'s largest Buddhist monastery, Sela Pass at 13,700 ft, and Madhuri Lake.' },
          { name: 'Ziro & Dirang', highlight: 'Picturesque pine-clad valleys, Apatani rice paddies, and apple orchards.' }
        ]
      },
      {
        stateName: 'Nagaland, Manipur, Mizoram & Tripura',
        cities: [
          { name: 'Nagaland (Kohima & Dzukou)', highlight: 'Dzukou Valley floral trek and vibrant Hornbill Festival.' },
          { name: 'Manipur (Loktak Lake)', highlight: 'The world\'s only floating national park on circular Phumdis.' },
          { name: 'Mizoram (Aizawl & Vantawng)', highlight: 'Misty green hills and scenic high waterfalls.' },
          { name: 'Tripura (Ujjayanta & Neermahal)', highlight: 'White royal water palace floating in the middle of Rudrasagar Lake.' }
        ]
      }
    ]
  }
};
