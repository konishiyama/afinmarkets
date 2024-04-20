import Link from "next/link";
import Image from "next/image";
import profImage from "/public/images/konishiyama.jpg";

interface Member {
  fullname: string;
  title: string;
  description: string;
  img_path: string;
}

interface MemberProps {
  member_prop: Member;
}

const MemberItem = ({ member_prop }: MemberProps) => {
  const image = require(`/public/images/${member_prop.img_path}`).default;
  return (
    <li
      className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
      data-wow-delay=".1s"
    >
      <div className="px-6 py-10 bg-white shadow rounded">
        <div className="flex items-center mb-4">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={image}
            alt="Monst"
          />
          <div className="pl-4">
            <p className="text-lg font-bold">{member_prop.fullname}</p>
            <p className="text-blue-600">{member_prop.title}</p>
          </div>
        </div>
        <p className="leading-loose text-blueGray-400 mb-5 text-sm">
          {member_prop.description}
        </p>
      </div>
    </li>
  );
};

export default MemberItem;
