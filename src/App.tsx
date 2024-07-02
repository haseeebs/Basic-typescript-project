import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import ReminderModel from "./models/ReminderModel";
import reminderService from "./services/ReminderService";

function App() {

  const [reminder, setReminder] = useState<ReminderModel[]>([]);

  useEffect(() => {
    loadReminders();
  }, [])
  
  const loadReminders = async () => {
    const reminders = await reminderService.getTodos();
    setReminder(reminders);
  };

  const removeReminder = async (id: number) => {
    // await reminderService.removeReminder(id);
    setReminder(previousValue => previousValue.filter(value => value.id !== id));
  }

  return (
    <div className="App">
      <ReminderList items={reminder} removeReminder={removeReminder}/>
    </div>
  );
}

export default App;
