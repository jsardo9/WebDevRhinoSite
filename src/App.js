import Components from "./Components/Components";
import Parse from "parse";

// Initializing Parse
const APPLICATION_ID = "7dwlAf72JpFw79Dc8sGP9bomeIWIbShh1XrU0bnz";
const JAVASCRIPT_KEY = "0rVAdoN3E9zxXGN1VX7iMJRChH7yJcS6TrR8J0YT";
const SERVER_URL = "https://parseapi.back4app.com/";

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

// call the child of app which is main
export default function App() {
  return <Components />;
}
