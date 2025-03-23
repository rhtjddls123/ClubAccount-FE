interface ChevronRightIconProps {
  className?: string;
}
const ChevronRightIcon = ({ className }: ChevronRightIconProps) => {
  return (
    <svg
      className={className}
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75L5.25 6L0.75 11.25"
        stroke="#323232"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
