import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const revealApp = () => {
  document.documentElement.classList.remove('app-loading');
  document.documentElement.classList.add('app-ready');
};

const waitForFirstPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

const waitForFonts = async () => {
  if (!('fonts' in document)) return;

  await Promise.race([
    document.fonts.ready,
    new Promise<void>((resolve) => window.setTimeout(resolve, 1800)),
  ]);
};

bootstrapApplication(App, appConfig)
  .then(async () => {
    await waitForFonts();
    await waitForFirstPaint();
    revealApp();
  })
  .catch((err) => {
    revealApp();
    console.error(err);
  });
