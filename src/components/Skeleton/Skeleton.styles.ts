import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const CardSkeleton = styled.div`
  width: 100%;
  height: 33.6rem;
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
`;

export const ProductSkeleton = styled.div`
  width: 80%;
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: ${({ theme }) => theme.colors.brightGray};
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: '0';
`;

export const PictureSkeleton = styled(ProductSkeleton)`
  width: 100%;
  height: 30rem;
  max-height: 30rem;
  margin-top: 2rem;
`;
