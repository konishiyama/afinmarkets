"use client";

interface ScrollOffsetProps {
  id: string;
}

const ScrollOffset = ({ id }: ScrollOffsetProps) => {
  return (
    <>
      <div className="relative">
        <div id={id} className="-top-48 absolute left-0"></div>
      </div>
    </>
  );
};

export default ScrollOffset;
