const { writeFile, mkdir } = require('fs');
const parametersByPassedUser = process.argv[2];
const nameProject = process.argv[3];



function createNewStructFrontEnd(nameProject) {
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
            }

            console.log(`Directory successfully created: ${directory}`)
        })
    });




};

function main(parameter, nameProject) {
    switch (parameter) {

        case 'frontend':
            createNewStructFrontEnd(nameProject);
            break;
        case 'subjectmatter':
            createNewStructSubjectMatter();
            break;
        default:
            console.log(`You cannot create this structure: ${parametersByPassedUser}`);

    };
};

main(parametersByPassedUser, nameProject);