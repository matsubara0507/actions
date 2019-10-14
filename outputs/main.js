const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  const path = core.getInput('script_path');
  const shell = core.getInput('shell');
  const options = {};
  options.listeners = {
    stdout: function(data) {
      const result = data.toString();
      core.setOutput("result", result);
    }
  };
  exec.exec(shell, [path], options).catch(err => core.setFailed(err.message));
} catch (err) {
  core.setFailed(err.message);
}
