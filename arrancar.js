import { iniciar } from './src/adapters/http/servidor.js';

iniciar().catch((error) => {
  console.error('[turnero] no se pudo iniciar:', error);
  process.exit(1);
});