import React, { useMemo } from 'react';

const WeeklyEventWidget = () => {
  const events = [
    { name: 'Sunday Service', day: 0, time: '10:00 AM' },
    { name: 'Bible Study', day: 3, time: '6:00 PM' },
    { name: 'Prayer', day: 4, time: '7:30 PM' },
  ];

  const getCurrentWeekDates = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDay();
    
    return events.map(event => {
      const eventDate = new Date(today);
      const daysUntilEvent = (event.day - currentDay + 7) % 7;
      eventDate.setDate(today.getDate() + daysUntilEvent);
      return eventDate;
    });
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

  const getDayName = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Upcoming Events</div>
        <ul className="space-y-4">
          {events.map((event, index) => {
            const eventDate = getCurrentWeekDates[index];
            const { day, month } = formatDate(eventDate);
            return (
              <li key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16">
                  <div className="text-2xl font-bold text-gray-900">{day}</div>
                  <div className="text-gray-500">{month}</div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-medium text-gray-900">{event.name}</p>
                  <p className="text-gray-500">{getDayName(event.day)}, {event.time}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WeeklyEventWidget;