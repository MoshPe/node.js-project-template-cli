import * as nodemon from 'nodemon';
import * as path from 'path';

nodemon({
  script: path.resolve('./dist/SERVICE_NAMEService.js'),
  watch: [
  ],
  verbose: false,
});

/**
 * Events
 *
 *     start - child process has started
 *     crash - child process has crashed (nodemon will not emit exit)
 *     exit - child process has cleanly exited (ie. no crash)
 *     restart([ array of files triggering the restart ]) - child process has restarted
 *     config:update - nodemon's config has changed
 */
nodemon.on('restart', function (files) {
  console.log('App restarted due to: ', files);
});