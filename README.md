# Troll Weather Station

Web application displaying weather data from Troll Research Station, Antarctica.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## What is shown

- Current temperature, wind speed, humidity and air pressure
- Temperature trend chart over the last 4 days

Data is fetched from the Norsk Polarinstitutt OpenSearch API on page load.

## Libraries

**Recharts** — used for the temperature chart. Chosen because it is built 
natively for React, has a straightforward API and good documentation. 

## Accessibility

- Semantic HTML elements (main, section, ul/li)
- aria-labels on all measurements with full readable text
- Responsive layout using flexbox — works on mobile and desktop
- Keyboard navigable

## Known limitations and notes

- Data is sampled to reduce chart density — not every measurement is shown
- No caching — data is refetched on every page load and does not auto update without a page load.
- The chart is not fully accessible to screen readers