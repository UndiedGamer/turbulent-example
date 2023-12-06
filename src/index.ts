import { Client, container } from '@spectera/framework';
import { UserCommand } from './commands/test.js';

void container.stores.loadPiece({
	name: 'test',
	piece: UserCommand,
	store: 'commands'
});

export default {
	async fetch(request: Request, env: any) {
		const client = new Client({
			discordPublicKey: env.DISCORD_PUBLIC_KEY,
			baseUserDirectory: null
		}) as Client;

		await client.load();
		client.listen();

		return client.router.handle(request, env);
	}
};
