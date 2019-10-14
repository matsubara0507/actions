const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  const script = core.getInput('script');
  const options = {};
  options.listeners = {
    stdout: function(data) {
      const result = data.toString();
      core.setOutput("result", result);
    }
  };
  await exec.exec(script, options);
} catch (error) {
  core.setFailed(error.message);
}
