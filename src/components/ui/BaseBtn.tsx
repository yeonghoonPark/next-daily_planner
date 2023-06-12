type Props = {
  text: string;
  children?: React.ReactNode;
  size?: "small" | "medium";
  onClick?: () => void;
};

export default function BaseBtn({
  onClick,
  text,
  size = "small",
  children,
}: Props) {
  return (
    <button
      className={`
      flex
      items-center
      gap-2
      rounded-md 
      border-2 
      border-slate-300 
      bg-white 
      hover:bg-black 
      hover:text-white
      ${size === "small" ? "p-2 text-base" : "p-4 text-xl"}
      `}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
}
