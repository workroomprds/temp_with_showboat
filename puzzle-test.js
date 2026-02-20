const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://blackboxpuzzles.workroomprds.com/puzzle34/');

  // Wait for puzzle to load
  await page.waitForSelector('#lamp1', { timeout: 10000 });

  console.log('Page loaded. Taking initial screenshot...');
  await page.screenshot({ path: 'puzzle34-initial.png' });

  // Get initial lamp states
  const getLampStates = async () => {
    const lamps = [];
    for (let i = 1; i <= 4; i++) {
      const lamp = await page.$(`#lamp${i}`);
      const isOn = await page.evaluate(el => el.classList.contains('lit'), lamp);
      lamps.push(isOn);
    }
    return lamps;
  };

  const initial = await getLampStates();
  console.log('Initial lamp states:', initial);

  // Click each button and observe results
  const buttons = ['buttonA1', 'buttonA2', 'buttonB1', 'buttonB2'];

  for (const btn of buttons) {
    console.log(`\nClicking ${btn}...`);
    await page.click(`#${btn}`);
    await page.waitForTimeout(200);
    const states = await getLampStates();
    console.log(`Lamps after ${btn}:`, states);
    await page.screenshot({ path: `puzzle34-after-${btn}.png` });
  }

  // Try all combinations
  console.log('\n=== Testing all button combinations ===');

  // Reset - refresh page
  await page.goto('https://blackboxpuzzles.workroomprds.com/puzzle34/');
  await page.waitForSelector('#lamp1', { timeout: 10000 });

  // Test a few interesting combinations
  const combinations = [
    [],
    ['buttonA1'],
    ['buttonA2'],
    ['buttonB1'],
    ['buttonB2'],
    ['buttonA1', 'buttonA2'],
    ['buttonB1', 'buttonB2'],
    ['buttonA1', 'buttonB1'],
    ['buttonA2', 'buttonB2'],
    ['buttonA1', 'buttonA2', 'buttonB1', 'buttonB2'],
  ];

  for (const combo of combinations) {
    // Reset
    await page.goto('https://blackboxpuzzles.workroomprds.com/puzzle34/');
    await page.waitForSelector('#lamp1', { timeout: 10000 });

    // Click buttons in combo
    for (const btn of combo) {
      await page.click(`#${btn}`);
      await page.waitForTimeout(150);
    }

    const states = await getLampStates();
    const comboStr = combo.length ? combo.join('+') : 'none';
    console.log(`${comboStr}: lamps = ${states.map((s,i) => `L${i+1}=${s?1:0}`).join(', ')}`);
  }

  await browser.close();
  console.log('\nDone! Screenshots saved.');
})();
