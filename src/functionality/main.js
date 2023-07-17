const browser = chrome;

const one_minute = 60 * 1000;

const path = '/en-US/firefox/addon/xkit-rewritten/';
const outdatedVersion = '0.21.13';

if (location.pathname === path) {
  const versionElement = document.querySelector('.AddonMoreInfo-version');
  const currentVersion = versionElement?.innerText;

  if (currentVersion === outdatedVersion) {
    setTimeout(() => location.reload(), 10 * one_minute);
  } else {
    browser.runtime.sendMessage({
      title: `XKit Rewritten ${currentVersion}`,
      message: `is published on AMO!`,
    });
  }
}
