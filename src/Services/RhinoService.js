import Parse from "parse";

// READ operation - get all lessons in Parse class Rhino
export const getAllRhinos = () => {
  const Rhino = Parse.Object.extend("Rhino");
  const query = new Parse.Query(Rhino);
  return query.find().then((results) => {
    // returns array of Rhino objects
    return results;
  });
};

// READ operation - get all rhinos in Parse class Rhino
export const getAllCountries = () => {
  const Country = Parse.Object.extend("Country");
  const query = new Parse.Query(Country);
  return query.find().then((results) => {
    // returns array of Rhino objects
    return results;
  });
};

// READ operation - get rhino by ID
export const getAllRhinosByCountry = (country) => {
  const Rhino = Parse.Object.extend("Rhino");
  const query = new Parse.Query(Rhino);
  query.equalTo("country", country);
  return query.find().then((result) => {
    return result;
  });
};

// READ operation - get rhino by ID
export const getById = (id) => {
  const Rhino = Parse.Object.extend("Rhino");
  const query = new Parse.Query(Rhino);
  return query.get(id).then((result) => {
    // return Rhino object with objectId: id
    return result;
  });
};

// CREATE operation - new Rhino with Name
export const createRhino = (Name, Type, Country) => {
  console.log("Creating: ", Name);
  const Rhino = Parse.Object.extend("Rhino");
  const rhino = new Rhino();
  // using setter to UPDATE the object
  rhino.set("name", Name);
  rhino.set("type", Type);
  rhino.set("country", Country);
  return rhino.save().then((result) => {
    // returns new Rhino object
    return result;
  });
};

// DELETE operation - remove rhino by ID
export const removeRhino = (id) => {
  const Rhino = Parse.Object.extend("Rhino");
  const query = new Parse.Query(Rhino);
  return query.get(id).then((rhino) => {
    rhino.destroy();
  });
};
