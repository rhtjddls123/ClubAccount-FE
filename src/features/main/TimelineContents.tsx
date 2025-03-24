import { ReceiptType } from "../../types/types";
import TimelineContentCard from "./TimelineContentCard";

interface TimelineContentsProps {
  receipts: ReceiptType[];
}

const TimelineContents = ({ receipts }: TimelineContentsProps) => {
  return (
    <ul className="flex flex-col items-center justify-center flex-1 gap-4 p-6">
      {receipts.length === 0 && <p>지출 내역을 추가해주세요!</p>}
      {receipts.length > 0 &&
        receipts.map((receipt) => <TimelineContentCard key={receipt.id} receipt={receipt} />)}
    </ul>
  );
};

export default TimelineContents;
