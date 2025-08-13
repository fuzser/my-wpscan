import { spawn } from 'child_process';

export default function wpscanHandler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed, use POST' });
    return;
  }

  // Extract parameters from request body
  const { 'url-input': url, 'token-input': token } = req.body || {};

  // Validate required parameters
  if (!url || !token) {
    res.status(400).json({ error: 'Missing URL or API key' });
    return;
  }

  // Validate URL format
  try {
    new URL(url);
  } catch {
    res.status(400).json({ error: 'Invalid URL format' });
    return;
  }

  // Prepare wpscan command arguments
  const args = ['--url', url, '--no-update', '--format', 'json'];

  // Pass API key as environment variable to wpscan process
  const env = { ...process.env, WPSCAN_API_TOKEN: token };

  // Spawn child process to run wpscan command asynchronously
  const wpscan = spawn('wpscan', args, { env });

  let stdout = '';
  let stderr = '';

  // Collect stdout data stream
  wpscan.stdout.on('data', (data) => {
    stdout += data.toString();
  });

  // Collect stderr data stream
  wpscan.stderr.on('data', (data) => {
    stderr += data.toString();
  });

  // Handle process exit event
  wpscan.on('close', (code) => {
    if (code !== 0) {
      res.status(500).json({ error: 'WPScan failed', details: stderr });
      return;
    }
    // Parse JSON output and send response
    try {
      const jsonResult = JSON.parse(stdout);
      res.status(200).json({ success: true, data: jsonResult });
    } catch {
      res.status(500).json({ error: 'Failed to parse WPScan output', details: stdout });
    }
  });
}
