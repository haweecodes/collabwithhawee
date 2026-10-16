export interface Result {
  value: string;
  label: string;
  detail: string;
}

export const results: Result[] = [
  {
    value: '40%',
    label: 'faster local builds',
    detail: 'Led the Webpack to Vite migration at MonetizeNow.',
  },
  {
    value: '30%',
    label: 'fewer regression defects',
    detail: 'Grew Jest and Playwright coverage by 60%.',
  },
  {
    value: '75%',
    label: 'fewer network requests',
    detail: 'Reworked component and API patterns at ShopUp.',
  },
  {
    value: '35%',
    label: 'less cash leakage',
    detail: 'Validation-heavy fintech flows that caught errors early.',
  },
];
