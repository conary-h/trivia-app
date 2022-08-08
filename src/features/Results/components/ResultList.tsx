import ResultItem from './ResultItem';
import { ListWrapper } from '../Results.styles';

export default function ResultList({ items }) {
  return (
    <ListWrapper>
      {items.map((item) => {
        return <ResultItem key={`q-${item.id}`} item={item} />;
      })}
    </ListWrapper>
  );
}
