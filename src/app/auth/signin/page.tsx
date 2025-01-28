import { getProviders } from 'next-auth/react';

import Signin from '@/components/Signin/Signin';

type SignPageProps = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SigninUserPage({ searchParams: { callbackUrl } }: SignPageProps) {
  const providers = (await getProviders()) ?? {};
  console.log('providers:,', providers);

  return <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />;
}
