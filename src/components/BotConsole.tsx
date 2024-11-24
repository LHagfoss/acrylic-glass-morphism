import React, { useEffect, useState } from 'react';

const BotConsole: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    const fetchLogs = async () => {
        try {
            const response = await fetch('/api/startBot', {
                method: 'POST',
            });
            if (!response.ok) {
                const errorText = await response.text();
                setLogs((prevLogs) => [...prevLogs, `Error: ${errorText}`]);
                return;
            }
            const data = await response.json();
            if (data.logs) {
                setLogs(data.logs);
            }
        } catch (error: any) {
            setLogs((prevLogs) => [...prevLogs, `Fetch error: ${error.message}`]);
        }
    };

    useEffect(() => {
        fetchLogs();
        const interval = setInterval(fetchLogs, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-800 text-purple-50 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Console</h2>
            <div className="overflow-y-auto h-[50vh]">
                {logs.map((log, index) => (
                    <div key={index} className="border-b border-zinc-700 py-1">
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BotConsole;