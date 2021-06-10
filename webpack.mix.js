// note : laravel-mix mempunya 36 vulnerable dari package mereka sendiri
// npx audit fix tidak terlalu effect

// definisikan compiler
let mix = require('laravel-mix');
mix
    .sass('src/myScss/app.scss', 'assets/css/') //membuat file app.css pada assets/css/app.css
    .sass('src/myScss/custom.scss', 'assets/css/') //membuat file custom.css pada assets/css/custom.css
    .setPublicPath('public') //public file penyimpanan scripts
