import path from 'path';
import { fileURLToPath } from 'url';

//helper function to get the root directory of the project. This is useful for constructing file paths in a way that is independent of the current working directory.
export default path.dirname(path.dirname(fileURLToPath(import.meta.url)));
