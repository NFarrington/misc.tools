import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import handlebars from 'handlebars';
import layouts from 'handlebars-layouts';

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('base-layout', readFileSync('src/layouts/base.hbs', 'utf8'));

// Compile templates
var index = handlebars.compile(readFileSync('src/index.hbs', 'utf8'));
var pwgen = handlebars.compile(readFileSync('src/pwgen.hbs', 'utf8'));
var errorPage = handlebars.compile(readFileSync('src/error.hbs', 'utf8'));

// Render templates
if (!existsSync('build/')) {
    mkdirSync('build');
}
writeFileSync('build/index.html', index({ 'pageId': 'index', 'index-active': 'active' }));
writeFileSync('build/pwgen.html', pwgen({ 'pwgen-active': 'active' }));
writeFileSync('build/error.html', errorPage());
