module.exports = {
    modules: {
        autoRequire: {
            '<%= name %>.js': ['<%= name %>.js']
        }
    },
    files: {
        javascripts: {
            joinTo: '<%= name %>.js'
        }
    },
    plugins: {
        babel: {presets: ['es2015']},
        text: {pattern: /\.hbs$/}
    },
    npm: {
        globals: {
            PIXI: 'phaser/build/custom/pixi',
            p2: 'phaser/build/custom/p2'
        }
    }
};
