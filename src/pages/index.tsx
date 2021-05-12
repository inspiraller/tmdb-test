import Link from 'next/link'

const Home = () => {
  return (
    <Link href="/movies">
      <a>Go to Movies</a>
    </Link>
  );
};

export default Home;
