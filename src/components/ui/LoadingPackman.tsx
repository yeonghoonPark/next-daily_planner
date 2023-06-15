import { PacmanLoader } from "react-spinners";

type Props = {
  bgColor?: string;
};

export default function LoadingPackman({ bgColor }: Props) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${bgColor}`}
    >
      <PacmanLoader size={50} color='#36d7b7' />
    </div>
  );
}
