import Reminder from "../models/ReminderModel";

interface ReminderListProps {
    items: Reminder[];
}

function ReminderList({items}: ReminderListProps) {
  return (
    <ul>
        {items.map( item => 
            <li key={item.id}>{item.title}</li>
        )}
    </ul>
  )
}

export default ReminderList