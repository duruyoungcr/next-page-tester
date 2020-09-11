import { useRouter } from 'next/router';

export default function WithRouter({ routerMock }) {
  const router = routerMock || useRouter();
  const { query, pathname, asPath, route } = router;
  return `Router: ${JSON.stringify({ asPath, pathname, query, route })}`;
}
