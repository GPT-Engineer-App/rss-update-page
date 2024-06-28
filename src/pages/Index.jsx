import RSSFeed from '../components/RSSFeed';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-3xl text-center mb-4">RSS Feed</h1>
        <RSSFeed feedUrl="https://example.com/rss" />
      </div>
    </div>
  );
};

export default Index;