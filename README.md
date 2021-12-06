# TypeScript Starter

This is my personal starter template for TypeScript projects.

## Installation

- For normal applications – `npx degit baileyherbert/ts-starter`
- For npm packages – `npx degit baileyherbert/ts-starter#npm`

## Scripts

### Development

Run the `dev` command to compile and start the application. The source code will be watched for changes and the application will restart automatically.

```
npm run dev
```

For applications that shouldn't restart so frequently, you can use the `watch` command to start the TypeScript compiler in watch mode. Then call the `start` command from another terminal when you're ready to test.

```
npm run watch
npm start
```

### Testing

The `test` command will recursively run all tests within the tests directory.

```
npm test
```

### Building

Build the application for production with the `build` command. You can then call the `start` command to run the build.

```
npm run build
npm start
```
