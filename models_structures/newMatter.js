const { mkdir } = require('fs');

module.exports.newMatter = (nameSubjectMatter) => {
    const structure_matter = ['anotacoes', 'pratica', 'projects'];

    structure_matter.forEach((directory) => {
        mkdir(`${nameSubjectMatter}/${directory}`, { recursive: true }, (err) => {
            if (err) throw err;

            console.log(`Directory successfully created: ${directory}`);
        })
    })
}