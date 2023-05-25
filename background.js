chrome.alarms.create("breakReminder", { periodInMinutes: 20 });

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "breakReminder") {
    chrome.windows.create({ url: "https://en.wikipedia.org/wiki/Special:Random", focused: true, type: "popup", height: 600, width: 800 });
    setTimeout(() => {
      chrome.windows.remove();
    }, 20000);
  }
});

