import { build } from './server';

(async () => {
    const server = await build();
    server.listen({ port: 4000 }, () => {
      console.log('Server is running on port 4000');
    });
})