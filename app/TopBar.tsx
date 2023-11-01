import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 bg-orange text-white p-2 w-full text-center z-50">
      Phone: (123) 476-7898 | Email: example@example.com
    </div>
  );
};

export default TopBar;
