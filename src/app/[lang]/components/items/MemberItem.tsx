import Link from "next/link";
import Image from "next/image";
import profImage from "/public/images/konishiyama.jpg";
import { Member, Members } from "../../../../interfaces";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface MemberProps {
  member_props: Member;
}

const MemberItem = ({ member_props }: MemberProps) => {
  // Member image dynamic path: https://velog.io/@cobocho/Next.js-Image-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%8F%99%EC%A0%81-%EB%A1%9C%EC%BB%AC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%95%B4%EA%B2%B0%EA%B8%B0
  console.log(member_props);
  const image = require(`/public/images/${member_props.img_path}`).default;
  return (
    <li
      className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn xl:h-100"
      data-wow-delay=".1s"
    >
      <div className="h-full px-6 py-10 bg-white shadow rounded">
        <div className="flex items-center mb-4">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={image}
            alt="Monst"
          />
          <div className="pl-4">
            <p className="text-lg font-bold">{member_props.fullname}</p>
            <p className="text-black">{member_props.title}</p>
          </div>
          <div className="ml-auto flex">
            {member_props.facebook_path && (
              <Link
                href={member_props.facebook_path}
                className="ml-3"
                target="_blank"
              >
                <FaFacebook
                  style={{
                    color: "#873eff",
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </Link>
            )}
            {member_props.linkedin_path && (
              <Link
                href={member_props.linkedin_path}
                className="ml-3"
                target="_blank"
              >
                <FaLinkedin
                  style={{
                    color: "#873eff",
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </Link>
            )}
          </div>
        </div>
        <p className="leading-loose text-blueGray-400 mb-5 text-sm">
          {member_props.description}
        </p>
      </div>
    </li>
  );
};

export default MemberItem;
