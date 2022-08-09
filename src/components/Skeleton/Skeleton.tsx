import { CardSkeleton, PictureSkeleton } from './Skeleton.styles';

type SkeletonProps = {
  variant: string;
};

export default function Skeleton({ variant }: SkeletonProps) {
  return (
    <>
      {variant === 'card' && (
        <CardSkeleton>
          <PictureSkeleton />
        </CardSkeleton>
      )}
    </>
  );
}
