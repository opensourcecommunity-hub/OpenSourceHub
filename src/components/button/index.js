import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const Button = (props) => {
  return (
    <Link target="_blank" href={props.url}>
      <buttons className="bg-[#194fbc] gap-2 flex items-center hover:bg-[#143f96] text-white font-bold py-2 px-4 rounded relative">
        <span className="absolute top-0 left-0 right-0 h-1 rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span>
        <span className="whitespace-nowrap ">{props.name}</span>
        {props.name === "Join Discord" && <FaDiscord className="mr-2" />}
        {props.name === "Follow on Twitter" && <FaTwitter className="mr-2" />}
        {props.name === "Join Us" && <HiCheckCircle />}
      </buttons>
    </Link>
  );
};

export default Button;