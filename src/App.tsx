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
  }

  return (
    <div className="App">
      <ReminderList items={reminder} />
    </div>
  );
}

export default App;
