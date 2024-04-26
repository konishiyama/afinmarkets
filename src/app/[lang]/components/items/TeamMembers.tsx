import MemberItem from "./MemberItem";
import profImage from "/public/images/konishiyama.jpg";
import { Members } from "../common/interfaces";

interface TeamMembersProps {
  team_members_props: Members;
}

const TeamMembers = ({ team_members_props }: TeamMembersProps) => {
  return (
    <ul className="flex flex-wrap pb-4">
      {Object.entries(team_members_props).map(([memberId, member_prop]) => (
        <MemberItem key={memberId} member_prop={member_prop} />
      ))}
    </ul>
  );
};

export default TeamMembers;
