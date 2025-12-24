import Hello from '../components/hello';

const Home = async () => {
  const response = await fetch('http://localhost:3000/api/books');

  const books = await response.json();
  return (
    <main>
      <div className="text-5xl underline">Welcome to Next.js!</div>;
      <Hello />
      <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  );
};

export default Home;
