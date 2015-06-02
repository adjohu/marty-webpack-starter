import Marty from 'marty';

function requireFromContext(context, callback) {
  // Iterate through all js files in context folder
  context.keys().forEach(key => {
    if (!/\.js/.test(key)) {
      callback(key);
    }
  });
}


class Application extends Marty.Application {
  registerDependencies() {
    let context = require.context('./', true, /(actions|queries|sources|stores)/);

    requireFromContext(context, key => {
      // NOTE: id could potentially clash if files are named the same.
      let id = key.substr(key.lastIndexOf('/') + 1);
      console.log('registering ', id);
      this.register(id, context(key));
    });
  }

  registerHooks() {
    let context = require.context('./', true, /hooks/);

    requireFromContext(context, key => {
      console.log('registering hook', key);
      context(key); // Run
    });
  }

  constructor(options) {
    super(options);
    console.group('setup');

    this.registerDependencies();
    this.registerHooks();
    this.router = require('./router');
    this.loginActionCreators.attemptReAuth();
    console.groupEnd();
  }
}

export default Application;
