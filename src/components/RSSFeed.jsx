import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RSSFeed = ({ feedUrl }) => {
  const [posts, setPosts] = useState([]);
  const parser = new Parser();

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const feed = await parser.parseURL(feedUrl);
        setPosts(feed.items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSSFeed();
    const interval = setInterval(fetchRSSFeed, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, [feedUrl]);

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.contentSnippet}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RSSFeed;