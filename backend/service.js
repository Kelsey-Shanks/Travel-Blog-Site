const DATA_FILE = 'data.json'

// HELPER --> create object
function create_trip_obj (
    t_name,
    start_d,
    end_d,
    hotels, 
    foods, 
    places, 
    photos,
    c_thoughts,
    k_thoughts) { 
    // Create trip_entry object:
    const trip_entry = {
        name: t_name,
        t_start: start_d,
        t_end: end_d,
        hotels: hotels,
        foods: foods, 
        places: places,
        photos: photos,
        c_thoughts: c_thoughts,
        k_thoughts: k_thoughts
    };
    return trip_entry;
};
// -----------------------------------------------

// HELPER --> writing to file function ----------
function write_to_file (trip_entry) {
    // Writes object to file to save

    // Convert object to string (the '2' adds indentation for pretty-printing):
    const trip_j_str = JSON.stringify(trip_entry, null, 2);

    // Write JSON string to file:
    fs.writeFile(DATA_FILE, trip_j_str, 'utf8', (err) => {
    if (err) {
        console.error("An error occurred while writing JSON Object to File.", err);
        return;
    }
    console.log("JSON file has been saved.");
    });
};
// -----------------------------------------------

// CREATE - 1 entry -----------------------------
function create_entry(
    name, 
    start_d, 
    end_d, 
    hotels, 
    foods, 
    places, 
    photos) {
    const trip_obj = create_trip_obj(
        name,
        start_d,
        end_d,
        hotels,
        foods,
        places,
        photos,
        c_thoughts,
        k_thoughts
    );
    write_to_file(trip_obj);
    return
};
// -----------------------------------------------

// READ - all entries ----------------------------
export function get_all_from_file () {
    // Reads data from file and parses it into JSON object
    const fs = require('fs');
    const raw_data = fs.readFile(DATA_FILE, 'utf8');
    const parsed_data_arr = JSON.parse(raw_data);
    return parsed_data_arr;
};
// -----------------------------------------------

// READ - find 1 entry ---------------------------
export function get_trip_match (trip_name, t_start, t_end) {
    // Pulls trip data for specific trip
    const all_trips = get_all_from_file();
    const trip_data = all_trips.filter(
        trip_entry => trip_entry.name === trip_name &&
        trip_entry.start_d === t_start &&
        trip_entry.end_d === t_end);
    
    return trip_data;
};
// -----------------------------------------------