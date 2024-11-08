import MemberItem from "./MemberItem";
import profImage from "/public/images/konishiyama.jpg";
import { Members } from "../../../../interfaces";

interface TeamMembersProps {
  team_members_props: Members;
}

const TeamMembers = ({ team_members_props }: TeamMembersProps) => {
  return (
    <ul className="flex flex-wrap pb-4">
      {Object.entries(team_members_props).map(([memberId, member_props]) => (
        <MemberItem
          key={memberId}
          member_props={member_props}
          memberId={memberId}
        />
      ))}
    </ul>
  );
};

export default TeamMembers;
