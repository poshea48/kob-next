import React from 'react';
import { useRouter } from 'next/router';

const LeaguePage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>League {id}</h1>;
};

export default LeaguePage;
