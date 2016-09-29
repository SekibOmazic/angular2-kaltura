export default {
    entry: './release/index.js',
    dest: './release/bundles/Kaltura.umd.js',
    format: 'umd',
    moduleName: 'Kaltura',
    globals: {
        '@angular/core': 'ng.core'
    }
}