import Link from "next/link";
import Image from "next/image";
import profImage from "/public/images/konishiyama.jpg";
import { Member, Members } from "../../../../interfaces";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface MemberProps {
  memberId: string;
  member_props: Member;
}

const MemberItem = ({ memberId, member_props }: MemberProps) => {
  console.log(memberId);
  const customClassName =
    memberId === "0" ? "md:pl-0 md:pr-2" : "md:pl-2 md:pr-0";

  return (
    <li
      // className={`w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn xl:h-100`}
      className={`w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn xl:h-100 ${customClassName}`}
      data-wow-delay=".1s"
    >
      <div className="h-full px-6 py-10 bg-white shadow rounded">
        <div className="flex items-center mb-4">
          <div>
            <p className="text-lg font-bold">{member_props.fullname}</p>
            <p className="">{member_props.title}</p>
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
        <p className="leading-loose mb-5 text-sm">{member_props.description}</p>
      </div>
    </li>
  );
};

export default MemberItem;
