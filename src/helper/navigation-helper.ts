const debug = true;

export const clickUpDown = (dir: string, stats: any, apdx: string) => {
  // find index of current page
  var idx = stats.navItems.findIndex((item: string) => {
    return item === stats.page;
  });

  // trigger nextItem with requested page
  if (idx === 0 && dir === 'down') {
    nextItem(stats.navItems[idx + 1], stats, apdx);
  } else if (idx === 0 && dir === 'up') {
    stats.animated = 0;
    return 0;
  } else if (idx === stats.navItems.length - 1 && dir === 'up') {
    stats.animated = 1;
    nextItem(stats.navItems[idx - 1], stats, apdx);
  } else if (idx === stats.navItems.length - 1 && dir === 'down') {
    stats.animated = 0;
    return 0;
  } else if (dir === 'up') {
    stats.animated = 1;
    nextItem(stats.navItems[idx - 1], stats, apdx);
  } else if (dir === 'down') {
    stats.animated = 1;
    nextItem(stats.navItems[idx + 1], stats, apdx);
  }
};

export const nextItem = (button: string, stats: any, apdx: string) => {
  if (debug) console.log('navigation-helper/nextItem', button, stats, apdx);
  // identify the page to be shown
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('slide-in-bottom')!;
  document.querySelector(`.${stats.page}Btn${apdx}`)!.classList.remove('active');
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.add('slide-out-top');

  stats.page = button;

  try {
    document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('d-none');
  } catch (e) {}

  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('slide-out-top');
  document.querySelector(`.${stats.page}Btn${apdx}`)!.classList.add('active');
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.add('slide-in-bottom');

  // check if end of list start or end -> in case reset arrow from active
  var idx = stats.navItems.findIndex((item: any) => {
    return item === stats.page;
  });

  if (idx === 0) {
    document.querySelector(`.upArrow` + apdx)!.classList.remove('active');
    document.querySelector(`.downArrow` + apdx)!.classList.add('active');
  } else if (idx === stats.navItems.length - 1) {
    document.querySelector(`.upArrow` + apdx)!.classList.add('active');
    document.querySelector(`.downArrow` + apdx)!.classList.remove('active');
  } else {
    document.querySelector(`.upArrow` + apdx)!.classList.add('active');
    document.querySelector(`.downArrow` + apdx)!.classList.add('active');
  }
};

export const clickLeftRight = (dir: string, stats: any) => {
  // find index of current page
  var idx = stats.allSubPages.findIndex((item: any) => {
    return item === stats.subPage;
  });
  if (debug) console.log('ModalKarate/clickLeftRight', dir, idx);

  // trigger nextItem with requested page
  if (idx === 0 && dir === 'left') {
    nextSubItem(stats.allSubPages[stats.navItems.length - 1], stats);
  } else if (idx === stats.allSubPages.length - 1 && dir === 'right') {
    nextSubItem(stats.allSubPages[0], stats);
  } else if (dir === 'left') {
    nextSubItem(stats.allSubPages[idx - 1], stats);
  } else if (dir === 'right') {
    nextSubItem(stats.allSubPages[idx + 1], stats);
  }
};

const nextSubItem = (button: any, stats: any) => {
  if (debug) console.log('navigation-helper/nextSubItem', button);

  // identify the page to be shown
  document.querySelector(`.${stats.subPage}`)!.classList.remove('slide-in-right');
  document.querySelector(`.${stats.subPage}`)!.classList.add('slide-out-left');

  stats.subPage = button;

  document.querySelector(`.${stats.subPage}`)!.classList.remove('d-out');
  document.querySelector(`.${stats.subPage}`)!.classList.remove('slide-out-left');
  document.querySelector(`.${stats.subPage}`)!.classList.add('slide-in-right');
};
