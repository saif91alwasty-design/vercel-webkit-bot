export default function handler(req, res) {
  return res.status(200).json({
    status: 'online',
    browser: 'WebKit Playwright',
    timestamp: new Date().toISOString()
  });
}
