import { TranslateResponse } from "./TranslateResponse.js";


// Dummy Data for testing no supabase
const MOCK_DORMS = [
  {
	Dorm: "BARH",
	"Building Type": "Suite",
	Occupants: 315,
	Staff: 11,
	Floors: 4,
	"GI Housing": true,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: false,
	Ethernet: true,
	"Nearest Dining": "BARH",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": null,
	Kitchen: true,
  },
  {
	Dorm: "Barton Hall",
	"Building Type": "Suite/Traditional",
	Occupants: 291,
	Staff: 9,
	Floors: 4,
	"GI Housing": true,
	Restrooms: "RF",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": true,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": null,
	"Double cost": null,
	"Triple cost": 10090,
	Kitchen: false,
  },
  {
	Dorm: "Blitman",
	"Building Type": "Suite",
	Occupants: 284,
	Staff: 7,
	Floors: 4,
	"GI Housing": true,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": true,
	Carpet: false,
	Ethernet: true,
	"Nearest Dining": "Blitman Dining",
	years: "S",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": null,
	Kitchen: true,
  },
  {
	Dorm: "Bray Hall",
	"Building Type": "Traditional",
	Occupants: 142,
	Staff: 5,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": null,
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": 8520,
	Kitchen: true,
  },
  {
	Dorm: "Cary Hall",
	"Building Type": "Traditional",
	Occupants: 142,
	Staff: 5,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": 8520,
	Kitchen: true,
  },
  {
	Dorm: "Crockett Hall",
	"Building Type": "Traditional",
	Occupants: 147,
	Staff: 5,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": 8520,
	Kitchen: true,
  },
  {
	Dorm: "Davison/Nugent Hall",
	"Building Type": "Suite",
	Occupants: 102,
	Staff: 5,
	Floors: 4,
	"GI Housing": true,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": true,
	Carpet: false,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": null,
	Kitchen: true,
  },
  {
	Dorm: "E-Complex",
	"Building Type": "Traditional",
	Occupants: 107,
	Staff: 4,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": true,
	Carpet: false,
	Ethernet: true,
	"Nearest Dining": "RSDH",
	years: "S",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": null,
	Kitchen: false,
  },
  {
	Dorm: "Hall Hall",
	"Building Type": "Traditional",
	Occupants: 140,
	Staff: 5,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": 8520,
	Kitchen: true,
  },
  {
	Dorm: "Nason Hall",
	"Building Type": "Traditional",
	Occupants: 142,
	Staff: 5,
	Floors: 4,
	"GI Housing": false,
	Restrooms: "F",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": 8520,
	Kitchen: true,
  },
  {
	Dorm: "RAHP A",
	"Building Type": "Apartment",
	Occupants: 236,
	Staff: 5,
	Floors: 2,
	"GI Housing": true,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: false,
	"Nearest Dining": "BARH Dining",
	years: "S",
	"Single cost": 8800,
	"Double cost": null,
	"Triple cost": null,
	Kitchen: true,
  },
  {
	Dorm: "Sharp Hall",
	"Building Type": "Suite",
	Occupants: 94,
	Staff: 4,
	Floors: 3,
	"GI Housing": true,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": true,
	Carpet: false,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": null,
	"Triple cost": null,
	Kitchen: false,
  },
  {
	Dorm: "Warren Hall",
	"Building Type": "Suite",
	Occupants: 110,
	Staff: 5,
	Floors: 3,
	"GI Housing": false,
	Restrooms: "R",
	"Mattress size": 'Extra Long Twin - 36" x 80" x 6"',
	"A/C": false,
	Carpet: true,
	Ethernet: true,
	"Nearest Dining": "Commons",
	years: "F",
	"Single cost": 11040,
	"Double cost": 9750,
	"Triple cost": null,
	Kitchen: false,
  },
];

// List of filters
const FILTER_COLUMN_MAP = {
	years: "years",
	nearest_dining_hall: "Nearest Dining",
	building_styles: "Building Type",
	num_floors: "Floors",
	num_student_staff: "Staff",
	num_residents: "Occupants",
	gender_inclusive: "GI Housing",
	mattress_size: "Mattress size",
	air_conditioning: "A/C",
	carpet: "Carpet",
	ethernet: "Ethernet",
	kitchen: "Kitchen",
	restrooms: "Restrooms",
};

const YEAR_CODE_MAP = {
	Freshman: "F",
	Sophomore: "S",
	"Junior, Senior, Co-term": "J",
};

const EXACT_MATCH_FILTERS = new Set([
	"air_conditioning",
	"carpet",
	"ethernet",
	"kitchen",
	"gender_inclusive",
	"num_floors",
	"num_student_staff",
	"num_residents",
	"mattress_size",
	"nearest_dining_hall",
	"building_styles",
	"restrooms",
]);



export class QueryDatabase {
	constructor() {
		this.translator = new TranslateResponse();
	}

	async query_database(filter_values = {}) {
		let results = [...MOCK_DORMS];
		// Connect to db

		// Apply filters [filter, value]
		for (const [filterKey, filterValue] of Object.entries(filter_values)) {

			// Check for empty filter value
			if (filterValue === null || filterValue === undefined || filterValue === "") {
				continue;
			}

			// Map filter key to database column
			const column = FILTER_COLUMN_MAP[filterKey];
			if (!column) {
				console.warn(`Unknown filter key: "${filterKey}" — skipping.`);
				continue;
			}

			// Current filters testing years and building styles
			// TO DO: Scale for adding more filters with drop down menu
			// No hard code filter keys
			if (filterKey === "years") {
				const code = YEAR_CODE_MAP[filterValue] ?? filterValue;
				results = results.filter((row) => row[column] === code);
				continue;
			}

			if (filterKey === "building_styles") {
				const value = Array.isArray(filterValue) ? filterValue[0] : filterValue;
				results = results.filter((row) => row[column] === value);
				continue;
			}

			// Exact match filters
			if (EXACT_MATCH_FILTERS.has(filterKey)) {
				results = results.filter((row) => row[column] === filterValue);
				continue;
			}

			// Range filter: { min, max } for pricing dorms
			if (
				typeof filterValue === "object" &&
				!Array.isArray(filterValue) &&
				("min" in filterValue || "max" in filterValue)
			) {
				if (filterValue.min !== undefined && filterValue.min !== "") {
				results = results.filter((row) => row[column] >= filterValue.min);
				}
				if (filterValue.max !== undefined && filterValue.max !== "") {
				results = results.filter((row) => row[column] <= filterValue.max);
				}
				continue;
			}

			results = results.filter((row) => row[column] === filterValue);
		}

		const db_response = { data: results, statusText: "OK" };
		return this.translator.translate_response(db_response);
	}
}