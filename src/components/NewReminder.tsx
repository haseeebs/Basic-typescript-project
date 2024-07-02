import { useState } from "react";

interface NewReminderProps {
  addReminder: (value: string) => void;
}

const NewReminder = ({ addReminder }: NewReminderProps) => {
  const [title, setTitle] = useState("");

  const onButtonClick = (title: string) => {
    addReminder(title);
    setTitle("");
  };

  return (
    <div className="h-40 w-full flex items-center justify-center bg-blue-200">
      <label
        htmlFor="title"
        className="md:pt-4 text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2"
      />
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
        placeholder="example@example.com"
      />
      <button className="px-5 py-2 ml-3 border-b-indigo-800 bg-indigo-300 border rounded-xl" onClick={() => onButtonClick(title)}>
        Add reminder
      </button>
    </div>
  );
};

export default NewReminder;
