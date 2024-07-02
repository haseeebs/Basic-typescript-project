import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import ReminderModel from "./models/ReminderModel";
import reminderService from "./services/ReminderService";
import NewReminder from "./components/NewReminder";

function App() {

  const [reminders, setReminder] = useState<ReminderModel[]>([]);

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
  };

  const addReminder = async (value: string) => {
    if(!value) return;
    const newReminder = await reminderService.addReminder(value);
    setReminder([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      <NewReminder addReminder={addReminder}/>
      <ReminderList items={reminders} removeReminder={removeReminder}/>
    </div>
  );
}

export default App;
