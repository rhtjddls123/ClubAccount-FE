interface ArchiveUpIconProps {
  className?: string;
}

const ArchiveUpIcon = ({ className }: ArchiveUpIconProps) => {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18C3 10.929 3 7.3935 5.196 5.196C7.395 3 10.929 3 18 3C25.071 3 28.6065 3 30.8025 5.196C33 7.395 33 10.929 33 18"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M3 21C3 16.8 3 14.7 3.8175 13.095C4.53654 11.6838 5.68385 10.5365 7.095 9.8175C8.7 9 10.8 9 15 9H21C25.2 9 27.3 9 28.905 9.8175C30.3162 10.5365 31.4635 11.6838 32.1825 13.095C33 14.7 33 16.8 33 21C33 25.2 33 27.3 32.1825 28.905C31.4635 30.3162 30.3162 31.4635 28.905 32.1825C27.3 33 25.2 33 21 33H15C10.8 33 8.7 33 7.095 32.1825C5.68385 31.4635 4.53654 30.3162 3.8175 28.905C3 27.3 3 25.2 3 21Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 25.5V16.5M18 16.5L21.75 20.25M18 16.5L14.25 20.25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArchiveUpIcon;
