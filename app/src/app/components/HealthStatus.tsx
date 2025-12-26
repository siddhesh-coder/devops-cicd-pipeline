'use client';

import { useEffect, useState } from 'react';

export default function HealthStatus() {
  const [status, setStatus] = useState<'ok' | 'error'>('error');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.ok ? setStatus('ok') : setStatus('error'))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      {status === 'ok' ? (
        <h2 style={{ color: 'green' }}>Service is Healthy</h2>
      ) : (
        <h2 style={{ color: 'red' }}>Service is Down</h2>
      )}
    </div>
  );
}
