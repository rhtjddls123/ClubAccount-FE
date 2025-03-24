import { ReceiptType } from "../../types/types";
import { formatAmount } from "../../utils/util";

interface TimelineContentCardProps {
  receipt: ReceiptType;
}

const TimelineContentCard = ({ receipt }: TimelineContentCardProps) => {
  return (
    <li className="flex w-full gap-4 p-4 border h-1/3 rounded-2xl border-gray-05">
      <div className="flex flex-col gap-4 justify-between w-[calc(75%-1rem)]">
        <div>
          <p className="body-bold-14 text-gray-01">{receipt.date.toString()}</p>
          <p className="caption-med-12 text-gray-03">{receipt.category}</p>
        </div>

        <div className="body-bold-16 text-gray-01">
          <p>{receipt.store_name}</p>
          <p>{formatAmount(receipt.amount)}</p>
        </div>

        <div>
          <p className="truncate caption-med-12 text-gray-02">{receipt.etc}</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-1/4 h-full">
        {receipt.receipt_image_url && (
          <img
            className="object-cover w-full h-full"
            src={receipt.receipt_image_url}
            alt="영수증 이미지"
          />
        )}
      </div>
    </li>
  );
};

export default TimelineContentCard;
