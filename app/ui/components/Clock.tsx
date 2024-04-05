'use client';
import { useState, useEffect } from 'react';

function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			// Get current time
			const currentTime = new Date();

			//Get current Offset
			var currentOffset = currentTime.getTimezoneOffset();

			// Convert to IST
			const ISTOffset = 330; // IST is UTC +5:30
			const ISTTime = new Date(
				currentTime.getTime() + (ISTOffset + currentOffset) * 60000
			);

			// Update state with IST time
			setTime(ISTTime);
		}, 1000);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, []);

	// Format time as hh:mm:ss
	const formattedTime = time.toLocaleTimeString('en-US', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
		timeZone: 'Asia/Kolkata', // Set timezone to IST
	});

	return <span suppressHydrationWarning>{formattedTime}</span>;
}

export default Clock;
