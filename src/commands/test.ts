import { Command, RegisterCommand } from '@spectera/framework';
import { InteractionResponseType } from 'discord-api-types/v10';

@RegisterCommand((builder) => {
	return builder //
		.setName('test')
		.setDescription('Test command');
})
export class UserCommand extends Command {
	public chatInputRun(_interaction: any) {
		console.log('i am running...');
		return new Response(
			JSON.stringify({
				type: InteractionResponseType.ChannelMessageWithSource,
				data: {
					content: 'Test command'
				}
			}),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
