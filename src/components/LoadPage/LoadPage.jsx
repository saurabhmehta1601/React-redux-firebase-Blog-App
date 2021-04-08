import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import React from "react";

const LoadPage = () => {
  return (
  
    <SkeletonTheme color="#dedef5" highlightColor=" #c2c2c2 ">
    <section className="loading container">
      <Skeleton count={7} height={35} />
    </section>
  </SkeletonTheme>
  );
};
export default LoadPage;
