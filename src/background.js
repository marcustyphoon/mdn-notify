const browser = chrome;

browser.runtime.onMessage.addListener(({ title, message }) => {
  browser.notifications.create({
    type: 'basic',
    iconUrl: browser.runtime.getURL('./icons/exclamation.png'),
    title,
    message,
  });
});
