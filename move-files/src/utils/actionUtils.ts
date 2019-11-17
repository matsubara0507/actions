import * as os from "os";
import * as path from "path";

export function resolvePath(filePath: string): string {
    if (filePath[0] === "~") {
        const home = os.homedir();
        if (!home) {
            throw new Error("Unable to resolve `~` to HOME");
        }
        return path.join(home, filePath.slice(1));
    }

    return path.resolve(filePath);
}
