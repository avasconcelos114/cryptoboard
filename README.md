### Cryptoboard

#### Main Skills displayed: 
  * React front-end development
  * Chart-based data visualization
  * Responsive design
  * Asynchronous API requests w/ reactive UI updates
  * CSS and JS-based animations

#### Detailed list of technologies used:
* Core
  * React
  * Redux
  * Typescript
  * Virtualized Lists (On news feed only)
* Styling
  * CSS-in-JS (with styled-components)
  * Responsive layouts (breakpoints)
  * Dynamic themes
  * Animations (with zdog and gsap libraries)
  * Server-side Rendering (TODO)
* Dev Env
  * Docker
  * ESLint
* Testing
  * Jest (Unit tests)
  * Cypress (E2E tests)

#### Running in dev mode
```
npm install
npm start
```
#### Running with Docker
0. Build app
```
npm install
npm run build
```
1. Build image
```
docker build -t cryptoboard .
```

2. Run container (bind volume with `--volume=$PWD/build:/var/www`)
```
docker run -d -p 80:80 --name cryptoboard cryptoboard
```

#### TODOs:
* Add Server-side rendering
* Refactor loading screen to cover each individual card or feed section
* Try to fix issue with components re-mounting when theme changes
Credits
<div>
  Icons made by 
  <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>
   from 
  <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  is licensed by 
  <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>