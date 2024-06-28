import React, { useState } from 'react';
import RSSFeed from '../components/RSSFeed';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [feedUrls, setFeedUrls] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addFeedUrl = () => {
    if (inputValue && !feedUrls.includes(inputValue)) {
      setFeedUrls([...feedUrls, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-3xl text-center mb-4">RSS Feed</h1>
        <div className="flex mb-4">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter RSS feed URL"
            className="mr-2"
          />
          <Button onClick={addFeedUrl}>Add Feed</Button>
        </div>
        <RSSFeed feedUrls={feedUrls} />
      </div>
    </div>
  );
};

export default Index;