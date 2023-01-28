<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://geposit.se/i/UserFiles/hemsideikoner/valid-with-text-large.png?x=png">
  </a>
</p>

<h1 align="center">VALID™ UI</h1>

<div align="center">

Component library that will allow you to integrate VALID™ with your React application with ease in couple minutes and benefit some of its features.

</div>


## Installation

Valid UI is available as an [npm package](https://www.npmjs.com/package/@geposit/valid-ui).

**npm:**

```sh
npm install @geposit/valid-ui
```

**yarn:**

```sh
yarn add @geposit/valid-ui
```

## What is VALID™
> Valid™ is a service for Nordic address control that is always updated with the latest address data. 

The service checks the validity of addresses, and also helps the user to fill in the address using autocomplete suggestions for addresses. 
This way, the user-friendliness and thus also the probability of conversion to a purchase increases.

<b>You never have to worry about incorrect addresses again!</b>

If you need more information about valid see our [Valid Documentation](https://developer.geposit.se/docs/valid-20)

## VALID™ UI
It's an extension package that exposes multiple components built on top of VALID™ API.
These components allow you to integrate VALID™ Autocomplete functionality in couple minutes, where you just import a component and start using it.

As simple as that:
```tsx
import { ValidSuggestion, Search } from '@geposit/valid-search';

<Search country="se" onSelect={(option: ValidSuggestion) => console.log(option)} validKey={YOUR_VALID_KEY} />
```

Library also contains multiple components and utils that will help you to integrate.
You can find an interactive component documentation with examples in our [Storybook](https://valid-ui-storybook.geposit.se/)

## Issues
If you find any issues with this package please report it in our [Github issues page](https://github.com/KatalysatorAB/valid-ui/issues)

## Development
Package is using [yarn](https://yarnpkg.com/) 1.x so make sure you have it installed before starting to work with it.
After you check out the repository run `yarn` of `yarn install` to get the required dependencies.

### Developing package
To start developing and testing features you will need to start them in storybook or [link](https://docs.npmjs.com/cli/v9/commands/npm-link) package to your project.

To run Storybook in development mode
```sh
yarn storybook
```

### Building package
To build a package you will simply run
```sh
yarn build
```

This will create a `dist` folder with package prepared to be used in any project.

### Building storybook
To build storybook you will need to run
```sh
yarn build-storybook
```

This will generate `storybook-static` folder with storybook's static files that are ready to be hosted on any web hosting.

## What will be added next?
In the near feature we will be preparing a styling functionality, where you can overwrite our default styling with ease.
Someday we will expose more components and utils that will increase possibilities of integration with VALID™.