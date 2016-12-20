/**
 * Created by Wishm on 12/19/2016.
 */
'use strict';
let yeoman = require('yeoman-generator');
let chalk = require('chalk');
let yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.moduleName = "helloWorld";

        let prompts = [{
            type: 'input',
            name: 'moduleName',
            message: 'Enter name of your module, camelCased without numbers or special symbols, only letters',
            default: this.moduleName
        }];

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.moduleName = props.moduleName;
            this.templateReplace =
                {
                    name:this.moduleName,
                    nameMin:this.moduleName.toLowerCase()
                };
        }.bind(this));
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('project/app/assets'),
            this.destinationPath('app/assets'),
            this.templateReplace
        );
        this.fs.copyTpl(
            this.templatePath('project/app/lib'),
            this.destinationPath('app/lib'),
            this.templateReplace
        );
        this.fs.copyTpl(
            this.templatePath('project/brunch-config.js'),
            this.destinationPath('brunch-config.js'),
            this.templateReplace
        );
        this.fs.copyTpl(
            this.templatePath('project/inhabitcfg.json'),
            this.destinationPath('inhabitcfg.json'),
            this.templateReplace
        );
        this.fs.copyTpl(
            this.templatePath('project/package.json'),
            this.destinationPath('package.json'),
            this.templateReplace
        );
        this.fs.copyTpl(
            this.templatePath('project/preview.jpg'),
            this.destinationPath('preview.jpg'),
            this.templateReplace
        );

        this.fs.copyTpl(
            this.templatePath('project/app/my-module.js'),
            this.destinationPath('app/' + this.moduleName + '.js'),
            this.templateReplace
        );
    },

    install: function () {
        this.npmInstall();
    }
});
