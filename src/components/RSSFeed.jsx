import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RSSFeed = ({ feedUrls }) => {
  const [posts, setPosts] = useState([]);
  const parser = new Parser();

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const allPosts = [];
        for (const feedUrl of feedUrls) {
          const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`);
          const data = await response.json();
          allPosts.push(...data.items);
        }
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSSFeed();
    const interval = setInterval(fetchRSSFeed, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, [feedUrls]);

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