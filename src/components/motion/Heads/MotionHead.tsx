import { ComponentType } from 'react';

import { MotionProps } from 'motion/react';

const MotionHead = ({
  MotionIcon,
}: {
  MotionIcon: ComponentType<MotionProps & { className?: string }>;
}) => {
  return (
    <>
      <MotionIcon
        className="fluid-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 10,
          duration: 0.6,
        }}
      />
    </>
  );
};

export default MotionHead;
