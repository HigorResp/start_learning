const { newFront } = require('./models_structures/newFrontend');
const { newMatter } = require('./models_structures/newMatter')



const Parameters = {
    structure: process.argv[2],
    nameStructure: process.argv[3]
};

const { structure, nameStructure } = Parameters;


function init(structure, nameStructure) {
    switch (structure) {

        case 'frontend':
            newFront(nameStructure);
            break;
        case 'matter':
            newMatter(nameStructure);
            break;
        default:
            console.log(`You cannot create this structure: ${structure}`);

    };
};

init(structure, nameStructure);