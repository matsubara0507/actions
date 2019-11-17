import * as core from "@actions/core";
import * as io from "@actions/io";
import * as utils from "./utils/actionUtils";

async function run(): Promise<void> {
    try {
        const source = utils.resolvePath(
            core.getInput("source_dir", { required: true })
        );
        const files = core
            .getInput("source_files", { required: true })
            .split("\n");
        const target = utils.resolvePath(
            core.getInput("target_dir", { required: true })
        );

        await io.mkdirP(target);
        core.debug(`mkdir -p ${target}`);

        files.forEach(async function(file) {
            const path = source.concat(file);
            await io.mv(path, target);
            core.debug(`mv ${path} to ${target}`);
        });
    } catch (error) {
        core.warning(error.message);
    }
}

run();

export default run;
