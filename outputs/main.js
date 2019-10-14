const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  const script = core.getInput('script');
  await exec.exec(script, stdout: (data: Buffer) => {
    const result = data.toString();
    core.setOutput("result", result);
  });
} catch (error) {
  core.setFailed(error.message);
}
