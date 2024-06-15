import { TrashSimple } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';



interface TrashIconProps {
    onClick: () => void;
  }

const TrashIcon = ({ onClick }: TrashIconProps ) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-1 transition-transform duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}

    >
      <TrashSimple size={30} color="#a0c0aa" weight={isHovered ? "fill" : "regular"} />
    </div>
  );
};

export default TrashIcon;
