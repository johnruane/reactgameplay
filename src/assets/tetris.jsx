const Tetris = ({ className }) => {
  return (
    <svg
      width='70'
      height='70'
      viewBox='0 0 70 70'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
    >
      <rect width='70' height='70' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_1026_602' transform='scale(0.01)' />
        </pattern>
        <image
          id='image0_1026_602'
          width='100'
          height='100'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO3YgWkAMQxD0dt/aXWClhAM/XL+G0DYFlzgvk+SJEmSlsqlD55Ti3bIDOXUoh0yQzm1aIfMUE4t2iEzlFOLdsgM5dSiHTJDObVoh8xQTi3aITOUU4t2yAzl1KIdMkM5tWiHzFBOLdohM5RTi3bIDOVIkqRL8TFmiYWwxEJYYiEssRCWWAhLLIQlFsISC2GJhbDEQlhiISyxEJZYiKTf+YmA3cdC/mYhMBYCYyEwFgJjITAWAmMhMBYCYyEwFgJjITAWAuO/PknSc48W7fFL6161g2/dq3bwrXvVDr51r9rBt+5VO/jWvWoH37pX7eBb96odfOtetYNv3at28K171Q6+da/awbfuVTv4o3tJklTz+GVpzjHa4FmaYyGXLOSRnGO0wbM0x0IuWcgjOcdog2dpjoVcspBHco7RBs/SHAu5ZCGP5ByjDZ6lOZIkSZL0/ZMfs/LEtCS1vWcAAAAASUVORK5CYII='
        />
      </defs>
    </svg>
  );
};

export default Tetris;
