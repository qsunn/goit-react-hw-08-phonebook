import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => (
  <div className="flex align-center justify-center min-w-full min-h-full">
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#bef264"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  </div>
);
