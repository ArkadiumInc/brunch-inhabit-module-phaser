import Promise               from 'pinkie';
import { InhabitModuleBase } from 'inhabit-module-base';

import { App }               from './lib/app';

export class <%= name %> extends InhabitModuleBase {
  constructor(conf, deps) {
    super(conf, deps);
  }

  getTitle() {
    return '<%= name %>';
  }

  getThumbnail() {
    return '';
  }

  hasContent() {
    return true;
  }

  getContent() {
    return this.textClassificationService
      .getKeywords('alchemy')
      .then(keywords => keywords.map(word => word.values.pop()))
      .then(words => this.keywords = words)
      .then(words => this);
  }

  display(container) {
    this.app = new App(this.resourcesRoot, container[0]);
  }
}

<%= name %>.moduleName = '<%= nameMin %>';

InhabitModuleBase.publish(<%= name %>);

