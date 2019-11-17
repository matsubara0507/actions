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
            .split(/\r?\n/)
            .filter(pat => pat)
            .map(pat => pat.trim());
        const target = utils.resolvePath(
            core.getInput("target_dir", { required: true })
        );

        await io.mkdirP(source);
        core.debug(`mkdir -p ${source}`);

        files.forEach(async function(file) {
            try {
                const path = target.concat("/", file);
                await io.mv(path, source);
                core.debug(`mv ${path} to ${source}`);
            } catch (error) {
                core.warning(error.message);
            }
        });
    } catch (error) {
        core.warning(error.message);
    }
}

run();

export default run;
