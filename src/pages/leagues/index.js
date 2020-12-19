import React from 'react';
import Link from 'next/link';

const LeaguesPage = () => {
  const leagueId = 45;
  return (
    <div>
      <h1>Leagues Home</h1>
      <Link href="/leagues/[id]" as={`/leagues/${leagueId}`}>
        <a>Click here for league {leagueId}</a>
      </Link>
    </div>
  );
};

export default LeaguesPage;
