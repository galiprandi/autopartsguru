export default async function UserProfile({ params }: PageProps) {
  const email = decodeURIComponent(params.email);

  return <h1>User: {email}</h1>;
}

type PageProps = {
  params: { email: string };
};
