import MemberItem from "./MemberItem";
import profImage from "/public/images/konishiyama.jpg";

interface Member {
  fullname: string;
  title: string;
  description: string;
  img_path: string;
}

interface Members {
  Ko: Member;
  Heebin: Member;
  Woojin: Member;
  Yuho: Member;
}

interface TeamMembersProps {
  team_members_props: Members;
}

const TeamMembers = ({ team_members_props }: TeamMembersProps) => {
  return (
    <ul className="flex flex-wrap">
      {Object.entries(team_members_props).map(([memberId, member_prop]) => (
        <MemberItem key={memberId} member_prop={member_prop} />
      ))}
    </ul>
  );
};

export default TeamMembers;
