import { NextApiRequest, NextApiResponse } from 'next';
import { Client, GatewayIntentBits } from 'discord.js';

let bot: Client | null = null;

const startBot = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            if (!bot) {
                bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
                bot.once('ready', () => {
                    console.log('Bot is online!');
                });
                bot.on('messageCreate', (message) => {
                    if (message.content === '!ping') {
                        message.reply('Pong!');
                    }
                });
                await bot.login(process.env.DISCORD_TOKEN);
                res.status(200).json({ message: 'Bot started' });
            } else {
                res.status(400).json({ message: 'Bot is already running' });
            }
        } catch (error: any) {
            console.error('Error starting bot:', error);
            res.status(500).json({ message: 'Failed to start bot', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default startBot;