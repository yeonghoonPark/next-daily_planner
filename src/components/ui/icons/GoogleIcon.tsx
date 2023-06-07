import { FcGoogle } from "react-icons/fc";

type Props = {
  classname: string;
};

export default function GoogleIcon({ classname }: Props) {
  return <FcGoogle className={classname} />;
}
