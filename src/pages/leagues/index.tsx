/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import Link from 'next/link';

const LeaguesPage = () => {
  const leagueId = 45;
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Leagues Home</h1>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <div sx={{ width: '100%', p: 2 }}>
          <Link href="/leagues/[id]" as={`/leagues/${leagueId}`}>
            <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              <div sx={{ variant: 'containers.card' }}>
                Click here for league {leagueId}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaguesPage;
