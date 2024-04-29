"use client";

import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import TeamMembers from "./items/TeamMembers";
import { Members } from "../../../interfaces";

interface TeamProps {
  team_props: {
    title: string;
    comment: string;
    members: Members;
  };
  lang: Locale;
}

const Team = ({ team_props, lang }: TeamProps) => {
  return (
    <Layout backgroundColor="bg-blueGray-50">
      <SectionContainer section_title="Team">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            {team_props.title}
          </h2>
          <p
            className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            {team_props.comment}
          </p>
        </div>
        <TeamMembers team_members_props={team_props.members} />
      </SectionContainer>
    </Layout>
  );
};

export default Team;
