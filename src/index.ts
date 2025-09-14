
import http, { IncomingMessage, ServerResponse } from 'http';
import { episodes, PodcastEpisode } from './data';
import { URL } from 'url';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (!req.url) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid request' }));
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // GET /list
  if (req.method === 'GET' && url.pathname === '/list') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(episodes));
    return;
  }

  // GET /episode?podcastName=...
  if (req.method === 'GET' && url.pathname === '/episode') {
    const podcastName = url.searchParams.get('podcastName');
    if (!podcastName) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing podcastName parameter' }));
      return;
    }
    const filtered = episodes.filter(e => e.podcastName.toLowerCase() === podcastName.toLowerCase());
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filtered));
    return;
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
