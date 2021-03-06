const { mkdir, writeFile } = require('fs');


module.exports.newFront = (nameProject) => {
    const assets = ['css', 'js', 'img', 'fonts', 'lib'];
    const img_structure = ['icons', 'backgounds', 'banners'];


    assets.forEach((directory) => {
        mkdir(`${nameProject}/assets/${directory}`, { recursive: true }, (err) => {
            if (err) throw err;

            switch (directory) {
                case 'css':
                    writeFile(`${nameProject}/assets/css/style.css`, '', (err) => {
                        if (err) throw err;
                    })
                    break;

                case 'js':
                    writeFile(`${nameProject}/assets/js/index.js`, '', (err) => {
                        if (err) throw err;
                    })
                    break;
                case 'img':
                    img_structure.forEach((directory) => {
                        mkdir(`${nameProject}/assets/img/${directory}`, { recursive: true }, (err) => {
                            if (err) throw err;
                        });
                    })
                    break;
                default:
                    console.log(`There is no file for this directory: ${nameProject}`);
            }
            console.log(`Directory successfully created: ${directory}`);

            writeFile(`${nameProject}/index.html`, '', (err) => {
                if (err) throw err;
            });
        })
    });
};
