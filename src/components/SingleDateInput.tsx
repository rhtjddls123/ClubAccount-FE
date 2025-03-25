import { InputHTMLAttributes, useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { formatDate } from "../utils/util";

const SingleDateInput = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null
  });

  return (
    <>
      <Datepicker
        inputClassName="w-full h-10 gap-1 px-4 border body-med-14 text-gray-01 rounded-xl border-gray-05"
        popoverDirection="down"
        i18n={"ko"}
        placeholder="날짜"
        useRange={false}
        asSingle={true}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      <input
        type="date"
        readOnly
        value={formatDate(value?.startDate || null)}
        className="hidden"
        {...props}
      />
    </>
  );
};

export default SingleDateInput;
