import { ReactNode, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

interface SelectorProps<T> {
  title: ReactNode;
  list: T[];
  onSelect: (data: T) => void;
}

const Selector = <T,>({ title, list, onSelect }: SelectorProps<T>) => {
  const [open, setOpen] = useState(false);

  let classes =
    "flex items-center justify-between w-full h-10 gap-1 px-4 border cursor-pointer rounded-t-xl border-gray-05 ";

  if (!open) {
    classes += "rounded-b-xl";
  }

  const handleToggle = () => {
    setOpen((pre) => !pre);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button type="button" onClick={handleToggle} className={classes}>
          <p className="body-med-14 text-gray-01">{title}</p>
          <ArrowDownIcon className="text-gray-01" />
        </button>
        {open && (
          <ul className="absolute w-full border border-t-0 shadow-sm border-gray-05 rounded-b-xl">
            {list.map((data, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    onSelect(data);
                    handleClose();
                  }}
                  className="w-full h-10 px-4 text-left bg-white body-med-14 text-gray-01"
                >
                  {String(data)}
                </button>
                {list.length - 1 !== idx && <hr />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Selector;
