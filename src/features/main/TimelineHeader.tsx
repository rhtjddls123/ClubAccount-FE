import AddIcon from "../../icons/AddIcon";
import ArrowDownIcon from "../../icons/ArrowDownIcon";

const TimelineHeader = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center w-full h-8 bg-primary">
        <p className="text-gray-01 title-semi-18">Timeline</p>
      </div>

      <div className="flex justify-between px-6">
        <div className="flex items-center justify-center gap-2">
          <p>2024년 2월</p>
          <ArrowDownIcon />
        </div>
        <div className="flex items-center justify-center gap-1">
          <AddIcon />
          <p>추가하기</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;
