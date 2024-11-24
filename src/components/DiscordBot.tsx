"use client"

import React from 'react';

const DiscordBot: React.FC = () => {
    const startBot = async () => {
        try {
            const response = await fetch('/api/startBot', { method: 'POST' });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Failed to start bot:', errorText);
                return;
            }
            const data = await response.json();
            console.log('Bot started successfully:', data.message);
        } catch (error) {
            console.error('Error starting bot:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <button onClick={startBot} className="bg-blue-500 p-4 rounded">
                Start Discord Bot
            </button>
        </div>
    );
};

export default DiscordBot;