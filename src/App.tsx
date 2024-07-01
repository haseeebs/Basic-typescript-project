import ReminderList from "./components/ReminderList";

const items = [
  {id: 1, title: 'Title...'},
]

function App() {
  return (
    <div className="App">
      <ReminderList items={items} />
    </div>
  );
}

export default App;
