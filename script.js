// MASTER PERFORMANCE ARCHIVE (100 BASKETBALL SHOE DATABASE ARRAY)
const shoeDatabase = [
    // --- NIKE KOBE LINE (1-15) ---
    { id: 1, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "REVERSE GRINCH", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + CUSHLON FOAM + MICRO-HERRINGBONE", date: "2023-12-15" },
    { id: 2, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "HALO", price: 180, type: "SIGNATURE", tech: "REACT DROP-IN MIDSOLE + ENGINEERED MESH UPPER", date: "2023-08-23" },
    { id: 3, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "GIRL DAD", price: 190, type: "SIGNATURE", tech: "HEEL ZOOM AIR + PHYLON DECK + PREMIUM SUEDE SHELL", date: "2024-06-07" },
    { id: 4, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "BRUCE LEE", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + REINFORCED COUNTER", date: "2020-11-24" },
    { id: 5, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "GRINCH", price: 180, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + POLYURETHANE ISLAND SCALES", date: "2020-12-24" },
    { id: 6, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "MAMBACITA", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + SNAKESKIN TEXTURED UPPER", date: "2022-05-01" },
    { id: 7, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "COURT PURPLE", price: 180, type: "SIGNATURE", tech: "REACT drop-in core + full engineered mesh chassis", date: "2024-02-08" },
    { id: 8, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "PHILLY", price: 190, type: "SIGNATURE", tech: "FLYWIRE CABLES + HEEL ZOOM AIR + PHYLON MIDSOLE", date: "2024-04-13" },
    { id: 9, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "EYBL", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + COMPSIT MATRIX LABS + DEEP GRIP", date: "2020-08-29" },
    { id: 10, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "VENICE BEACH", price: 180, type: "SIGNATURE", tech: "DROP IN FULL REACT CORE + TRACTION GRID FLANGES", date: "2024-04-13" },
    { id: 11, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "MAMBACITA", price: 180, type: "SIGNATURE", tech: "HEEL ZOOM AIR + GINGHAM TRIBUTE TEXTILES + PHYLON", date: "2023-05-01" },
    { id: 12, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "ALL-STAR", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + MICRO-HERRINGBONE HARDWOOD SPLIT", date: "2021-03-08" },
    { id: 13, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "CHAOS", price: 180, type: "SIGNATURE", tech: "UPGRADED ZOOM STROBEL DECK + CHASSIS TORSION CONTROLLER", date: "2020-01-03" },
    { id: 14, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "UNDEFEATED", price: 180, type: "SIGNATURE", tech: "PATENT LEATHER CAPS + HEEL COMPRESSION ZOOM ASSEMBLY", date: "2019-08-24" },
    { id: 15, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "DEL SOL", price: 180, type: "SIGNATURE", tech: "POLYURETHANE SCALES + SPEED MATRIX DOCKING FLAPS", date: "2021-06-03" },

    // --- NIKE LEBRON LINE (16-28) ---
    { id: 16, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "AKOYA", price: 200, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + 13MM HEEL ZOOM AIR + CUSHLON 2.0", date: "2023-09-28" },
    { id: 17, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 22", colorway: "CROWN JEWEL", price: 200, type: "SIGNATURE", tech: "MIDSOLE CUSHLON CELL + SPEED COMPRESSION UNITS", date: "2025-11-20" },
    { id: 18, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "QUEEN CONCH", price: 200, type: "SIGNATURE", tech: "PERFORATED ZONAL QUILTED UPPER + FULL-LENGTH CUSHLON CORE", date: "2024-02-08" },
    { id: 19, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "TRINITY", price: 200, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + HEEL MAX AIR 180 CHASSIS PACK", date: "2022-10-24" },
    { id: 20, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "CONCHIOLIN", price: 200, type: "SIGNATURE", tech: "CUSHLON 2.0 ENGINE + TOUGH MATRIX INTERNAL STRAP CABLE", date: "2023-12-19" },
    { id: 21, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "ASW", price: 200, type: "SIGNATURE", tech: "SPHERE LINER APPARATUS + CARBON FIBER SHANK ELEMENT", date: "2023-02-16" },
    { id: 22, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "DRAGON PEARL", price: 200, type: "SIGNATURE", tech: "360 DEGREES WIRE FRAME ZONAL PACKING + ZOOM STROBEL DECK", date: "2024-05-01" },
    { id: 23, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN", colorway: "AMPLIFIED", price: 160, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + OPEN MESH ARMED EXOSKELETON", date: "2023-03-05" },
    { id: 24, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "DEBUT", price: 200, type: "SIGNATURE", tech: "AIR STROBEL LINING + REINFORCED HEEL STABILITY FLAPS", date: "2022-12-12" },
    { id: 25, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "BLUE DIVER", price: 200, type: "SIGNATURE", tech: "HYDRO-TACTILE LEATHER PACKING + FOREFOOT ZOOM TURBO STRUTS", date: "2024-03-15" },
    { id: 26, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 18", colorway: "REFLECTIONS", price: 200, type: "SIGNATURE", tech: "FULL LENGTH MAX AIR COUPLING + INTERTWINED ZOOM POD ENGINE", date: "2020-09-21" },
    { id: 27, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN", colorway: "GLITCH", price: 160, type: "SIGNATURE", tech: "PHYLON SUPPORT FRAMEWAYS + CHASSIS DIRECTIONAL TREAD", date: "2023-06-18" },
    { id: 28, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 19", colorway: "SPACE JAM", price: 200, type: "SIGNATURE", tech: "360 DEGREE DUAL MAX AIR SEED CHASSIS + TPU SHIELD", date: "2021-12-18" },

    // --- NIKE KD LINE (29-38) ---
    { id: 29, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "SUNRISE", price: 150, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR STROBEL + TPU SUPPORT ENVELOPE CAGE", date: "2024-05-17" },
    { id: 30, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "AUNT PEARL", price: 160, type: "SIGNATURE", tech: "HEEL AIR SOLE + FOREFOOT ZOOM AIR + AIR STROBEL LAYER", date: "2023-10-27" },
    { id: 31, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "BREGMAN PROMO", price: 160, type: "SIGNATURE", tech: "UPGRADED TPU LATERAL FLANGES + FOREFOOT AIR STROBEL WRAP", date: "2024-07-12" },
    { id: 32, brand: "NIKE", line: "KD SERIES", name: "KD 15", colorway: "PRODUCER SERIES", price: 150, type: "SIGNATURE", tech: "FULL ZOOM STROBEL DECK + CUSHLON CORES + SIDE COUNTERS", date: "2022-07-22" },
    { id: 33, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "BARKA", price: 160, type: "SIGNATURE", tech: "AIR STROBEL INNER MATRIX + SIDE THERMOPLASTIC RADIAL GEAR", date: "2023-11-15" },
    { id: 34, brand: "NIKE", line: "KD SERIES", name: "KD 14", colorway: "KYACHU", price: 150, type: "SIGNATURE", tech: "MIDFOOT GRIP COWL OVERLAY STRAP + ZOOM STROBEL INTERIOR", date: "2021-04-14" },
    { id: 35, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "METALLIC GOLD", price: 150, type: "SIGNATURE", tech: "CUSHLON MATRIX COMPONENT VENTS + REINFORCED STROBEL PACK", date: "2024-08-01" },
    { id: 36, brand: "NIKE", line: "KD SERIES", name: "KD 15", colorway: "AUNT PEARL", price: 150, type: "SIGNATURE", tech: "FULL LENGTH ZOOM DECK STRUTS + MESH VENTILATOR ENGINES", date: "2022-11-18" },
    { id: 37, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "EASY MONEY", price: 160, type: "SIGNATURE", tech: "ZOOM FORWARD DRIVE UNITS + MIDFOOT SHANK PLATES TORSION", date: "2023-09-08" },
    { id: 38, brand: "NIKE", line: "KD SERIES", name: "KD 14", colorway: "SURREALISM", price: 150, type: "SIGNATURE", tech: "CROSS PANEL RETENTION STRAP SYSTEM + PHYLON DECK ASSEMBLIES", date: "2021-07-10" },

    // --- NIKE JA & SABRINA & BOOK LINES (39-50) ---
    { id: 39, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "HUNGER", price: 110, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR + PHYLON ENGINE + SIDEWALL STABILIZERS", date: "2023-05-25" },
    { id: 40, brand: "NIKE", line: "JA SERIES", name: "JA 2", colorway: "NIGHTMARE", price: 120, type: "SIGNATURE", tech: "RE-ENGINEERED COMPRESSION ZOOM + DYNAMIC LOCK PANEL", date: "2024-10-25" },
    { id: 41, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "SCRAPBOOK", price: 110, type: "SIGNATURE", tech: "PHYLON CUSHION BED + DEEP HERRINGBONE HARDWOOD OUTSOLE", date: "2023-11-03" },
    { id: 42, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "CHINESE NEW YEAR", price: 120, type: "SIGNATURE", tech: "ZOOM COMPRESSION RADIAL + EMBOSSED SIDE WALL COUNTER FRAMES", date: "2024-01-22" },
    { id: 43, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1", colorway: "IONIC", price: 130, type: "SIGNATURE", tech: "TOP-LOADED FOREFOOT ZOOM AIR + FULL REACT FOAM MIDSOLE", date: "2023-09-01" },
    { id: 44, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2", colorway: "COURT VISION", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 COMPOUND + HIGH-VELOCITY FOREFOOT ZOOM UNIT", date: "2024-06-28" },
    { id: 45, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1", colorway: "SPARK", price: 130, type: "SIGNATURE", tech: "REACT CORE FOAM + EMBEDDED FOREFOOT ZOOM TRACK PLUGS", date: "2023-11-12" },
    { id: 46, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2", colorway: "CONDUIT", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 SYSTEM + ULTRALIGHT ZONAL VENT CORES", date: "2024-09-05" },
    { id: 47, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "MIRAGE", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM AIR CHASSIS + CUSHLON FLUID COMPONENT LAYER", date: "2024-02-17" },
    { id: 48, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "HIKE", price: 150, type: "SIGNATURE", tech: "SNAKESKIN TEXTURED REINFORCEMENT + RESPONSIVE HEEL SEED", date: "2024-04-06" },
    { id: 49, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "HAVEN", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM UNIT + CANVAS WEAVE SHIELDS + PHYLON DECKS", date: "2024-04-06" },
    { id: 50, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "RATTLESNAKE", price: 140, type: "SIGNATURE", tech: "CUSHLON CHASSIS SEEDS + SIDEWALL TPU ANTI TORQUE TABS", date: "2024-05-11" },

    // --- JORDAN BRAND SIGNATURES (51-65) ---
    { id: 51, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2", colorway: "VORTEX", price: 125, type: "SIGNATURE", tech: "FULL-LENGTH AIR STROBEL + STRUCTURAL EXOSKELETON CORE", date: "2024-04-04" },
    { id: 52, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 3", colorway: "ZERO DEGREE", price: 125, type: "SIGNATURE", tech: "FLIGHT FRAME STRUCTURAL SHELL + ENHANCED COMFORT FOAM APPARATUS", date: "2024-10-10" },
    { id: 53, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 1", colorway: "ZOO", price: 120, type: "SIGNATURE", tech: "LIGHTWEIGHT FOAM GROUND FRAMEWAY + EMBEDDED FOREFOOT ZOOM POD", date: "2023-04-07" },
    { id: 54, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2", colorway: "LEGACY", price: 125, type: "SIGNATURE", tech: "POD-BASED TPU OUTSOLE CASING + DOCKING STROBEL SHIELDS", date: "2024-03-05" },
    { id: 55, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2", colorway: "NEBULA", price: 130, type: "SIGNATURE", tech: "FORMULA 23 FOAM + CUSHIONED EVA CRADLE + ISO-PLATE WALLS", date: "2023-07-11" },
    { id: 56, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 3", colorway: "MATADOR", price: 130, type: "SIGNATURE", tech: "ISO-PLATE SEGMENT COUPLING + COMPLETE FORMULA 23 CORE", date: "2025-09-15" },
    { id: 57, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 1", colorway: "BREED", price: 110, type: "SIGNATURE", tech: "FORMULA 23 CUSHION MATRIX + FLIGHTWIRE LATERAL ANCHORS", date: "2022-09-03" },
    { id: 58, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2", colorway: "LAKE BLED", price: 130, type: "SIGNATURE", tech: "ISO PLATE TPU WRAPS + REINFORCED STYLISH UPPER MATS", date: "2023-09-14" },
    { id: 59, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3", colorway: "MUD, SWEAT, TEARS", price: 140, type: "SIGNATURE", tech: "FORMULA 23 DROP-IN + FOREFOOT ZOOM AIR CHASSIS ASSEMBLY", date: "2023-12-01" },
    { id: 60, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 2", colorway: "VODOO", price: 120, type: "SIGNATURE", tech: "HEEL STROBEL STRUT CARRIERS + FOREFOOT ZOOM AIR ENGINE UNITS", date: "2022-06-22" },
    { id: 61, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3", colorway: "SADIE", price: 140, type: "SIGNATURE", tech: "DROP IN COMPRESSION BASE FRAMEWAY + GRIP MULTI DIRECTION", date: "2024-02-20" },
    { id: 62, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 38", colorway: "FIBA", price: 200, type: "SIGNATURE", tech: "X-PLATE TORSION FRAMEWORK + FULL PACK ZOOM AIR STROBEL", date: "2023-09-07" },
    { id: 63, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 39", colorway: "SOL", price: 200, type: "SIGNATURE", tech: "FULL LENGTH ZOOM STROBEL + CORE COMPLETE INJECTED ZOOM FOAM", date: "2024-07-23" },
    { id: 64, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 37", colorway: "SATRE", price: 185, type: "SIGNATURE", tech: "FORMULA 23 HEEL FOAMS + DUAL STRATIFIED FOREFOOT ZOOM PODS", date: "2022-09-15" },
    { id: 65, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 36", colorway: "PSYCHIC", price: 185, type: "SIGNATURE", tech: "JAQUARD WEAVE EXOSKELETONS + STRATIFIED ZOOM STROBEL PAD", date: "2021-09-16" },

    // --- ADIDAS SIGNATURES (66-78) ---
    { id: 66, brand: "ADIDAS", line: "AE SERIES", name: "AE 1", colorway: "VELOCITY BLUE", price: 120, type: "SIGNATURE", tech: "JET BOOST RUNTIME CELLS + STABILIZING TPU PARABOLIC HULL", date: "2024-03-15" },
    { id: 67, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW", colorway: "MURAL", price: 110, type: "SIGNATURE", tech: "LOW-TOP LIGHTSTRIKE + INTEGRATED TPU AIR VENTILATION FLAPS", date: "2024-08-15" },
    { id: 68, brand: "ADIDAS", line: "AE SERIES", name: "AE 1", colorway: "BEST OF ADI", price: 120, type: "SIGNATURE", tech: "BOOST MATRIX + HERRINGBONE TREAD FOR OVERSIZED LATERAL CUTS", date: "2024-01-25" },
    { id: 69, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW", colorway: "ASCENT", price: 110, type: "SIGNATURE", tech: "JETBOOST INTERIOR BED + VENTILATED LATERAL CELL MESHES", date: "2024-07-20" },
    { id: 70, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8", colorway: "PIONEER", price: 160, type: "SIGNATURE", tech: "FULL INTERNAL BOOTIE STRUTS + HIGH-DENSITY SIDE WALLS", date: "2024-02-23" },
    { id: 71, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8", colorway: "FLAMINGO", price: 160, type: "SIGNATURE", tech: "JETBOOST FOAM + HIGH-WALL EVA STABILIZATION WINGS", date: "2024-04-15" },
    { id: 72, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 7", colorway: "CREW ORANGE", price: 160, type: "SIGNATURE", tech: "LIGHTSTRIKE FOAM + JETBOOST HEEL SYSTEM INTEGRATED UNIT", date: "2023-03-02" },
    { id: 73, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 6", colorway: "CAMP FIRE", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE PRO ENERGY CONVERSION + INTERNAL HEEL ANCHOR HARNESS", date: "2024-07-05" },
    { id: 74, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 5", colorway: "BLUE SPHINX", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE ENGINES + TORSION PERIMETER STABILIZATION BARS", date: "2023-10-15" },
    { id: 75, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 8 EXTPLY", colorway: "OAC", price: 130, type: "SIGNATURE", tech: "BOUNCE PRO CHASSIS ASSEMBLIES + WRAPPED HARDWOOD TIRES", date: "2023-09-01" },
    { id: 76, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 9", colorway: "PURPLE GLOW", price: 120, type: "SIGNATURE", tech: "COMPLETE LIGHTSTRIKE PRO LINING STRUTS + COMFORT SHIELDS", date: "2024-10-01" },
    { id: 77, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE YOUNG 3", colorway: "ASW", price: 140, type: "SIGNATURE", tech: "COMPOSITE PARAMETRIC OUTSOLES + COMPRESSED SEED LAYERS", date: "2023-11-01" },
    { id: 78, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE 2", colorway: "CORE BLACK", price: 130, type: "SIGNATURE", tech: "SCAGULATED SOCK PACK SEAMLESS + HEEL BOOST ACCELERATORS", date: "2022-10-01" },

    // --- PUMA SIGNATURE LINES (79-85) ---
    { id: 79, brand: "PUMA", line: "MB SERIES", name: "MB.03", colorway: "LAFRANCE", price: 125, type: "SIGNATURE", tech: "NITRO INFUSED FOAM RUNTIME + SLIME-WRAP HIGH TRACTION RADIAL", date: "2023-11-17" },
    { id: 80, brand: "PUMA", line: "STEWIE SERIES", name: "STEWIE 3", colorway: "DAWN", price: 120, type: "SIGNATURE", tech: "DUAL-DENSITY NITRO NITROGEN FLUID LAYER + REINFORCED TPU COWL", date: "2024-05-14" },
    { id: 81, brand: "PUMA", line: "MB SERIES", name: "MB.01", colorway: "RED BLAST", price: 125, type: "SIGNATURE", tech: "NITRO FOAM POD PLUGS + HIGH STRATIFIED FABRIC COLLARS", date: "2021-12-16" },
    { id: 82, brand: "PUMA", line: "MB SERIES", name: "MB.02", colorway: "SUPERNOVA", price: 130, type: "SIGNATURE", tech: "INJECTED NITROGEN COMPOSITIONS + COMPOSITE GRIP WHEELS", date: "2022-10-21" },
    { id: 83, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0", colorway: "GEORGIA PEACH", price: 100, type: "SIGNATURE", tech: "PROFOAM LITE FOAM CORES + HIGH ABRASION STABILIZATION RIM", date: "2023-12-15" },
    { id: 84, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0", colorway: "OREO", price: 100, type: "SIGNATURE", tech: "PROFOAM REBOUND DRIVES + EXTENDED REAR REINFORCERS", date: "2024-04-02" },
    { id: 85, brand: "PUMA", line: "RISE CORE", name: "ALL-PRO NITRO", colorway: "LIME", price: 130, type: "SIGNATURE", tech: "FULL LENGTH NITROGEN BED DECK + TRADITIONAL RADIAL CARVERS", date: "2023-08-01" },

    // --- NICHE INTERNATIONAL BOUTIQUE BRANDS (86-93) ---
    { id: 86, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 10", colorway: "MINT", price: 225, type: "NICHE INTERNATIONAL", tech: "BOOM GAS INFUSED NITROGEN INTERIOR + CARBON PLATE DECK", date: "2022-07-15" },
    { id: 87, brand: "ANTA", line: "KAI SERIES", name: "KAI 1", colorway: "ARTIST ON COURT", price: 125, type: "NICHE INTERNATIONAL", tech: "NITROEDGE RESPONSIVE FOAM SEED FILL + MIDFOOT SHANK TORSION", date: "2024-03-06" },
    { id: 88, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 11", colorway: "GOLD", price: 230, type: "NICHE INTERNATIONAL", tech: "UPGRADED PEBA BOOM FLUID DOCKS + WRAPPED TORSION ARCHWAYS", date: "2024-09-20" },
    { id: 89, brand: "LI-NING", line: "WAY OF WADE", name: "WADE ALL CITY 12", colorway: "SUNSHINE", price: 140, type: "NICHE INTERNATIONAL", tech: "FOREFOOT BOOM CORE PAD + WRAPPED SIDEWALL POLYURETHANE CAPS", date: "2024-01-15" },
    { id: 90, brand: "361 DEGREES", line: "DVD SERIES", name: "DVD 2", colorway: "SPACETIME", price: 100, type: "NICHE INTERNATIONAL", tech: "ENERGIZED SYSTEM CORES + MULTI ZONE TRADITIONAL TRACK SHIELD", date: "2023-11-05" },
    { id: 91, brand: "RIGORER", line: "AR SERIES", name: "AR 1", colorway: "ICE CREAM", price: 110, type: "NICHE INTERNATIONAL", tech: "PEBA NITROGEN FOAM PADS + ANTI-ROLL VERTICAL TPU BOUNDARIES", date: "2023-08-11" },
    { id: 92, brand: "ANTA", line: "KT SERIES", name: "KT 9", colorway: "GOLDEN EMPIRE", price: 150, type: "NICHE INTERNATIONAL", tech: "SMART ABSORPTION TRANSFER LAYER + FULL LENTH CARBON SPINE", date: "2023-10-12" },
    { id: 93, brand: "361 DEGREES", line: "BIG 3 CORE", name: "BIG 3 5.0 QUICK", colorway: "MINT", price: 110, type: "NICHE INTERNATIONAL", tech: "QU!KFOAM STABILIZED COMPRESSION SYSTEM + RADIAL EDGE CUTS", date: "2024-05-18" },

    // --- BUDGET & TEAM PLAYS (94-96) ---
    { id: 94, brand: "NIKE", line: "GT SERIES", name: "GT CUT ACADEMY", colorway: "WHITE ICE", price: 95, type: "BUDGET / TEAM", tech: "FOREFOOT COMPRESSION ZOOM CELL + DUAL RENEW FOAM ELEMENTS", date: "2024-01-05" },
    { id: 95, brand: "NIKE", line: "GIANNIS LINE", name: "GIANNIS IMMORTALITY 3", colorway: "NIGERIA", price: 85, type: "BUDGET / TEAM", tech: "CURVED DECK SEED BASES + MIDFOOT INTEGRATED TENSION HARNESS", date: "2023-07-20" },
    { id: 96, brand: "ADIDAS", line: "TEAM PROFILE", name: "DAME EXTPLY 2.0", colorway: "GREEN", price: 90, type: "BUDGET / TEAM", tech: "BOUNCE SHOCK ABSORB MATRIX + FULL COMFORT STRATIFIED KNITS", date: "2022-06-01" },

    // --- FUTURE CALENDAR TIMELINES (97-100) ---
    { id: 97, brand: "ADIDAS", line: "AE SERIES", name: "ADIDAS AE 2", colorway: "FANGED RED", price: 130, type: "SIGNATURE", tech: "METATARSAL BOUNCE INLAYS + MONO-MESH EXOSKELETAL FRAME", date: "2026-06-12" },
    { id: 98, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 9 ELITE LOW PROTRO", colorway: "WNBA GOLD", price: 210, type: "SIGNATURE", tech: "CARBON BOUND TORSIONAL FRAMEWAY + FLEXIBLE PLUSH FLYKNIT", date: "2026-07-08" },
    { id: 99, brand: "NIKE", line: "A'JA SIGNATURE", name: "NIKE A'TWO", colorway: "PREMIERE INAUGURAL", price: 140, type: "SIGNATURE", tech: "FULL RUNTIME REACT PLUGS + LATERAL ANTI-ROLL FRAME GRIP", date: "2026-08-15" },
    { id: 100, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "JORDAN LUKA 4", colorway: "VICTORY", price: 140, type: "SIGNATURE", tech: "QUAD-DENSITY CORE ASSEMBLED CHASSIS + MULTI-STAGE ISO-PLATE", date: "2026-09-01" }
];

// CHROMATIC THEME CONFIGURATION MATRIX
const colorwayColors = {
    "REVERSE GRINCH": "#e60000",
    "HALO": "#f4f4f4",
    "GIRL DAD": "#4a7c59",
    "BRUCE LEE": "#ffcc00",
    "GRINCH": "#99ff33",
    "MAMBACITA": "#222222",
    "COURT PURPLE": "#5d3fd3",
    "PHILLY": "#0047ab",
    "EYBL": "#c0c0c0",
    "VENICE BEACH": "#40e0d0",
    "ALL-STAR": "#ff4500",
    "CHAOS": "#a3c1ad",
    "UNDEFEATED": "#556b2f",
    "DEL SOL": "#ffcc00",
    "AKOYA": "#fdf5e6",
    "CROWN JEWEL": "#800020",
    "QUEEN CONCH": "#ffb6c1",
    "TRINITY": "#6f00ff",
    "CONCHIOLIN": "#e0feff",
    "ASW": "#e67e22",
    "DRAGON PEARL": "#ff69b4",
    "AMPLIFIED": "#9b59b6",
    "DEBUT": "#bdc3c7",
    "BLUE DIVER": "#1f77b4",
    "REFLECTIONS": "#7f8c8d",
    "GLITCH": "#34495e",
    "SPACE JAM": "#1a252f",
    "SUNRISE": "#ff7f50",
    "AUNT PEARL": "#ffc0cb",
    "BREGMAN PROMO": "#ff8c00",
    "PRODUCER SERIES": "#2ecc71",
    "BARKA": "#b22222",
    "KYACHU": "#f1c40f",
    "METALLIC GOLD": "#ffd700",
    "EASY MONEY": "#008080",
    "SURREALISM": "#8e44ad",
    "HUNGER": "#e74c3c",
    "NIGHTMARE": "#111111",
    "SCRAPBOOK": "#d35400",
    "CHINESE NEW YEAR": "#d4af37",
    "IONIC": "#afeeee",
    "COURT VISION": "#4169e1",
    "SPARK": "#ff4500",
    "CONDUIT": "#7fffd4",
    "MIRAGE": "#f5f5dc",
    "HIKE": "#8b4513",
    "HAVEN": "#2f4f4f",
    "RATTLESNAKE": "#fa8072",
    "VORTEX": "#4682b4",
    "ZERO DEGREE": "#e0ffff",
    "ZOO": "#bc8f8f",
    "LEGACY": "#4682b4",
    "NEBULA": "#da70d6",
    "MATADOR": "#cd5c5c",
    "BREED": "#8b0000",
    "LAKE BLED": "#008b8b",
    "MUD, SWEAT, TEARS": "#556b2f",
    "VODOO": "#8b4513",
    "SADIE": "#da70d6",
    "FIBA": "#b22222",
    "SOL": "#fffacc",
    "SATRE": "#483d8b",
    "PSYCHIC": "#ba55d3",
    "VELOCITY BLUE": "#0000ff",
    "MURAL": "#ffb6c1",
    "BEST OF ADI": "#ffffff",
    "ASCENT": "#708090",
    "PIONEER": "#b22222",
    "FLAMINGO": "#ff69b4",
    "CREW ORANGE": "#ff4500",
    "CAMP FIRE": "#d35400",
    "BLUE SPHINX": "#4169e1",
    "OAC": "#006400",
    "PURPLE GLOW": "#8a2be2",
    "CORE BLACK": "#1a1a1a",
    "LAFRANCE": "#ffd700",
    "DAWN": "#f0e68c",
    "RED BLAST": "#ff0000",
    "SUPERNOVA": "#ff00ff",
    "GEORGIA PEACH": "#ffdab9",
    "OREO": "#f5f5f5",
    "LIME": "#00ff00",
    "MINT": "#98ff98",
    "ARTIST ON COURT": "#4b0082",
    "GOLD": "#ffd700",
    "SUNSHINE": "#ffff00",
    "SPACETIME": "#4b0082",
    "ICE CREAM": "#ffb6c1",
    "GOLDEN EMPIRE": "#8b0000",
    "WHITE ICE": "#f0f8ff",
    "NIGERIA": "#008751",
    "GREEN": "#008000",
    "FANGED RED": "#ff2400",
    "WNBA GOLD": "#d4af37",
    "PREMIERE INAUGURAL": "#dda0dd",
    "VICTORY": "#000080"
};

// BRAND ICON DICTIONARY MAPPING
const brandLogos = {
    "NIKE": " Swoosh ",
    "JORDAN BRAND": " Jumpman ",
    "ADIDAS": " Three Stripes ",
    "PUMA": " Leaping Cat ",
    "LI-NING": " LN-Shield ",
    "ANTA": " Anta-Wing ",
    "361 DEGREES": " 361° ",
    "RIGORER": " R-Gear "
};

// ATHLETE SIGNATURE MAPPING TRACKER
const athleteSignatures = {
    "KOBE SERIES": "KOBE BRYANT",
    "LEBRON SERIES": "LEBRON JAMES",
    "KD SERIES": "KEVIN DURANT",
    "JA SERIES": "JA MORANT",
    "SABRINA SERIES": "SABRINA IONESCU",
    "BOOK SERIES": "DEVIN BOOKER",
    "TATUM SERIES": "JAYSON TATUM",
    "LUKA SERIES": "LUKA DONCIC",
    "ZION SERIES": "ZION WILLIAMSON",
    "AIR JORDAN SE": "JORDAN FRANCHISE",
    "AE SERIES": "ANTHONY EDWARDS",
    "HARDEN SERIES": "JAMES HARDEN",
    "DON ISSUE SERIES": "DONOVAN MITCHELL",
    "DAME SERIES": "DAMIAN LILLARD",
    "TRAE YOUNG LINE": "TRAE YOUNG",
    "MB SERIES": "LAMELO BALL",
    "STEWIE SERIES": "BREANNA STEWART",
    "SCOOT SERIES": "SCOOT HENDERSON",
    "WAY OF WADE": "DWYANE WADE",
    "WADE ALL CITY 12": "DWYANE WADE",
    "KAI SERIES": "KYRIE IRVING",
    "DVD SERIES": "SPENCER DINWIDDIE",
    "AR SERIES": "AUSTIN REAVES",
    "KT SERIES": "KLAY THOMPSON",
    "BIG 3 CORE": "TEAM 361°",
    "GT SERIES": "NIKE CO-LAB",
    "GIANNIS LINE": "GIANNIS ANTETOKOUNMPO",
    "TEAM PROFILE": "DAMIAN LILLARD",
    "A'JA SIGNATURE": "A'JA WILSON"
};

// APPLICATION INTERFACE STATE ENGINE
let locker = JSON.parse(localStorage.getItem('ghLocker')) || [];
let compareList = [];
let currentFilter = "ALL";
let visibleItemsCount = 8; 

function runSystemClock() {
    setInterval(() => {
        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const clockEl = document.getElementById('system-clock');
        if(clockEl) clockEl.innerText = timeStr;
    }, 1000);
}

function getSystemDateString() {
    return new Date().toISOString().split('T')[0];
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0,0);
    
    if(pageId === 'collection') { resetAndRenderArchive(); }
    if(pageId === 'calendar') renderCalendar();
    if(pageId === 'locker') renderLocker();
}

// GENERATES DYNAMIC CHROMATIC BRAND BADGE WITH SPECIFIC ATHLETE SIGNATURE
function generateBrandBadgeMarkup(shoe) {
    const bgColor = colorwayColors[shoe.colorway] || "#222222";
    const logoSymbol = brandLogos[shoe.brand] || "•••";
    const athleteName = athleteSignatures[shoe.line] || "TEAM REPOSITORY";
    
    // Check luminance to flip text color contrast dynamically if white background
    const isWhiteHex = bgColor === "#ffffff" || bgColor === "#f4f4f4" || bgColor === "#f0f8ff" || bgColor === "#fffacc" || bgColor === "#fdf5e6";
    const textColor = isWhiteHex ? "#000000" : "#ffffff";

    return `
        <div class="brand-badge-container" style="background-color: ${bgColor}; color: ${textColor};">
            <div class="badge-logo-text" style="border-bottom: 2px solid ${textColor}; padding-bottom: 5px; width: 80%;">${logoSymbol}</div>
            <div class="badge-signature-text
