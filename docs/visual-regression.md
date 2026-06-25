# Visual Regression Testing

Uses `cypress-image-diff-js` to compare screenshots and catch UI regressions.

## Setup
```bash
npm install cypress-image-diff-js
```

Add to `cypress/support/commands.ts`:
```ts
import 'cypress-image-diff-js/dist/command';
```

## Run
```bash
npx cypress run --spec 'cypress/e2e/visual.cy.ts'
```

Baseline images are stored in `cypress/snapshots/baseline/`.
Diffs are saved to `cypress/snapshots/diff/` when tests fail.
