let mix = require('laravel-mix');

 mix.js('src/index.js', 'mix')
 	.css('src/index.css', 'style.css')
	.setPublicPath('mix')
	.browserSync('webpack.test')
	;
