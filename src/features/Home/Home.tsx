import { useEffect } from 'react';
import { getQuestions } from 'services/provider';

export default function Home() {
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await getQuestions({ type: 'boolean', difficulty: 'hard', amount: 10 });

    console.log(res);
  };
  return <div>Home</div>;
}
