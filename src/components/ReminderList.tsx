import Reminder from "../models/ReminderModel";

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {

  return (
    <>
      <ul className="mt-60 mb-20">
        {items.map(item => (
          <li
            key={item.id}
            data-tilt
            className="card w-1/2 mx-auto mb-2 p-8 rounded-lg border border-black"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReminderList;
