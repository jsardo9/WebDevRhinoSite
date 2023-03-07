// UserInput.js
// import UserInputButton
import UserInputButton from "./UserInputButton.js";

// event binding user input function
// this user input allows the user to click a button to alert the user of a fun rhino fact
const UserInput = () => {
  function clickAlert() {
    alert("Rhinos have very poor vision");
  }

  return (
    <UserInputButton
      text="Click for a Fun Rhino Fact!"
      onButtonClick={clickAlert}
    />
  );
};

export default UserInput;
