import { InputHTMLAttributes, ReactNode, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

interface SelectorProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  selectTitle: ReactNode;
  selectList: T[];
}

const Selector = <T,>({ selectTitle, selectList, ...props }: SelectorProps<T>) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<T>();

  let classes =
    "flex items-center justify-between w-full h-10 gap-1 px-4 border cursor-pointer rounded-t-xl border-gray-05 focus:outline-0 ";

  if (!open) {
    classes += "rounded-b-xl";
  }

  const handleToggle = () => {
    setOpen((pre) => !pre);
  };

  const handleSelect = (select: T) => {
    setData(select);
    setOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button type="button" onClick={handleToggle} className={classes}>
          <p className="body-med-14 text-gray-01">{data ? String(data) : selectTitle}</p>
          <ArrowDownIcon className="text-gray-01" />
        </button>
        {open && (
          <ul className="absolute z-10 w-full border border-t-0 shadow-sm border-gray-05 rounded-b-xl">
            {selectList.map((data, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleSelect(data)}
                  className="w-full h-10 px-4 text-left bg-white body-med-14 text-gray-01"
                >
                  {String(data)}
                </button>
                {selectList.length - 1 !== idx && <hr />}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input className="hidden" value={data ? String(data) : ""} readOnly {...props} />
    </>
  );
};

export default Selector;
