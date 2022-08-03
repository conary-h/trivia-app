import { useEffect } from 'react';
import { getQuestions } from 'services/provider';
import { Grid, Row, Col } from 'styles/globalStyles';

export default function Home() {
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await getQuestions({ type: 'boolean', difficulty: 'hard', amount: 10 });

    console.log(res);
  };
  return (
    <Grid>
      <Row>
        <Col size={12}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magni aut officiis,
            laborum minima a quam amet qui veritatis in, totam, veniam incidunt corrupti rerum
            voluptas magnam? Nihil reprehenderit quae nam sint ullam tempora perferendis amet
            nostrum, excepturi architecto deserunt ad perspiciatis sunt odit, reiciendis est porro
            consequuntur numquam ipsum?
          </p>
        </Col>
        <Col size={5}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magni aut officiis,
            laborum minima a quam amet qui veritatis in, totam, veniam incidunt corrupti rerum
            voluptas magnam? Nihil reprehenderit quae nam sint ullam tempora perferendis amet
            nostrum, excepturi architecto deserunt ad perspiciatis sunt odit, reiciendis est porro
            consequuntur numquam ipsum?
          </p>
        </Col>
      </Row>
    </Grid>
  );
}
