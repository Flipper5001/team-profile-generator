const fs = require('fs');
const path = require('path');

const cardPath = path.join(__dirname,'template','cards.html');
const templatePath = path.join(__dirname,'template','template.html');

function generateCards(employee){
    const card = fs.readFileSync(cardPath, 'utf-8')
    let replacedCard = card.replace('{{name}}', employee.getName())
        .replace('{{role}}',employee.getRole())
        .replace('{{id}}',employee.getId())
        .replaceAll('{{email}}',employee.getEmail())
    
    if(employee.getRole() === 'Manager'){
        replacedCard = replacedCard.replace('{{key}}', 'Office Number')
        .replace('{{icon}}','<i class="fa fa-user" aria-hidden="true"></i>')
        .replace('{{value}}',employee.getOfficeNumber())
    }
    if(employee.getRole() === 'Engineer'){
        replacedCard = replacedCard.replace('{{key}}', 'GitHub')
        .replace('{{icon}}','<i class="fa fa-wrench" aria-hidden="true"></i>')
        .replace('{{value}}',`<a href = "https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a>`)
    }
    if(employee.getRole() === 'Intern'){
        replacedCard = replacedCard.replace('{{key}}', 'School')
        .replace('{{icon}}','<i class="fa fa-graduation-cap" aria-hidden="true"></i>')
        .replace('{{value}}',employee.getSchool())
    }
    
    return replacedCard;
}

function generateHTML(employees){
    const template = fs.readFileSync(templatePath, 'utf-8');
    const cards = employees.map(generateCards).join('');

    return template.replace('{{cards}}', cards)
}

module.exports = generateHTML;
