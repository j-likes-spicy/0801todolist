import { useState } from "react";

function App() {
  const [item, setNewItem] = useState("");
  const [updateList, setUpdateList] = useState([]);
  const [completed, isCompleted] = useState(false);

  const updateChange = (event) => {
    setNewItem(event.target.value);
  };

  const addListItem = (event) => {
    event.preventDefault();
    setUpdateList((prevVal) => [...prevVal, item]);
    setNewItem("");
  };

  const markDone = (item) => {
    if (!completed) {
      item.target.classList.add("completed");
      isCompleted(true);
    } else {
      isCompleted(false);
      item.target.classList.remove("completed");
    }
  };

  const displayItems = updateList.map((item) => (
    <li key={item} onClick={markDone}>
      {item}
    </li>
  ));

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__heading">To-do List</h1>
      </header>
      <main className="main__content">
        <h2 className="main__content--heading">Add an item:</h2>
        <section className="listitems">
          <div className="listitems__form">
            <form>
              <label
                htmlFor="addItem"
                name="addItemLabel"
                className="listitems__form--label"
              >
                I need to:
              </label>
              <input
                type="text"
                name="item"
                value={item}
                onChange={updateChange}
                className="listitems__form--input"
              ></input>
              <button onClick={addListItem} className="listitems__form--button">
                Add to list
              </button>
            </form>
          </div>
          <div className="workingitems">
            <h2 className="workingitems__heading">Things to do:</h2>
            <ul className="listitems__group">{displayItems}</ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
