import DiagramIcon from "../../icons/DiagramIcon";
import PieChartIcon from "../../icons/PieChartIcon";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="flex mt-10 max-w-80 h-[100px] justify-between mx-auto">
      <OverviewCard title="카테고리별" subTitle="지출 내역" Icon={PieChartIcon} />
      <OverviewCard title="월별" subTitle="지출 내역" Icon={DiagramIcon} />
    </div>
  );
};

export default Overview;
