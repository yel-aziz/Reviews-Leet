import React, { useState } from 'react';

const ReadMore = ({ text, maxWords }:any) => {
  const words = text.split(' ');
  const [showAll, setShowAll] = useState(false);
  const displayWords = showAll ? words : words.slice(0, maxWords);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <p>{displayWords.join(' ')}</p>
      {words.length > maxWords && (
        <button onClick={handleToggle} className="text-blue-500 hover:underline">
          {showAll ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
