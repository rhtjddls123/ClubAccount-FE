import ProfileOverview from "../features/main/ProfileOverview";
import TimelineContents from "../features/main/TimelineContents";
import TimelineHeader from "../features/main/TimelineHeader";
import { Await, useLoaderData } from "react-router-dom";
import { ReceiptType } from "../types/types";
import { Suspense } from "react";
import SpinnerIcon from "../icons/SpinnerIcon";

const MainPage = () => {
  const { data } = useLoaderData<{ data: Promise<ReceiptType[]> }>();

  return (
    <div className="flex flex-col h-full">
      <ProfileOverview />
      <TimelineHeader />
      <Suspense fallback={<SpinnerIcon />}>
        <Await resolve={data}>{(receipts) => <TimelineContents receipts={receipts} />}</Await>
      </Suspense>
    </div>
  );
};

export default MainPage;
