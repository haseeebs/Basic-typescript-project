import Reminder from "../models/ReminderModel";

interface ReminderListProps {
  items: Reminder[];
  removeReminder: (id: number) => void;
}

function ReminderList({ items, removeReminder }: ReminderListProps) {

  return (
    <>
      <ul className="mt-4 mb-20 w-full">
        {items.map(item => (
          <li
            key={item.id}
            data-tilt
            className="card w-1/2 mx-auto mb-2 p-8 rounded-lg border border-black"
          >
            {item.title}
            <button onClick={() => removeReminder(item.id)} className="py-2 mt-5 w-full rounded-lg border border-black hover:bg-lime-600 hover:text-white">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReminderList;
