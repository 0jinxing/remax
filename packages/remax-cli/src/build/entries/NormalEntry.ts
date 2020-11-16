import * as path from 'path';
import Builder from '../Builder';
import { replaceExtension } from '../utils/paths';
import readManifest from '../../readManifest';

export default class NormalEntry {
  builder: Builder;
  name: string;
  filename: string;

  constructor(builder: Builder, name: string, filename: string) {
    this.builder = builder;
    this.name = name;
    this.filename = path.resolve(filename);
  }

  getManifest() {
    const configFile = this.builder.projectPath.searchJSFile(replaceExtension(this.filename, '.config'));
    return configFile ? readManifest(configFile, this.builder.target) : {};
  }
}
