var fs = require('fs');
var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('base-layout', fs.readFileSync('src/layouts/base.hbs', 'utf8'));

// Compile templates
var index = handlebars.compile(fs.readFileSync('src/index.hbs', 'utf8'));
var pwgen = handlebars.compile(fs.readFileSync('src/pwgen.hbs', 'utf8'));
var errorPage = handlebars.compile(fs.readFileSync('src/error.hbs', 'utf8'));

// Render templates
if (!fs.existsSync('build/')) {
    fs.mkdirSync('build');
}
fs.writeFileSync('build/index.html', index({'pageId': 'index', 'index-active': 'active'}));
fs.writeFileSync('build/pwgen.html', pwgen({'pwgen-active': 'active'}));
fs.writeFileSync('build/error.html', errorPage());
