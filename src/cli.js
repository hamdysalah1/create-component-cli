import inquirer from 'inquirer'
import fs from 'fs';
import { comComponent } from './files/comComponent';
import { stylesByStyledComponent } from './files/stylesByStyledComponent';

async function promptOptions(){
    const options = [];
    options.push(
        {
            type: 'list',
            name: 'template',
            message: 'choose which template to use',
            choices: ['JavaScript']
        },
        {
            type: 'list',
            name: 'component_type',
            message: 'choose component type',
            choices: ['Component Object Model']
        },
        {
            type: 'list',
            name: 'propType',
            message: 'propType?',
            choices: ['yes', 'no']
        },
        {
            type: 'list',
            name: 'styled_component',
            message: 'styled component?',
            choices: ['yes', 'no']
        }
    );
    const answers = await inquirer.prompt(options);
    return{
        template: answers.template,
        type: answers.component_type,
        propsType: answers.propType,
        styledComponent: answers.styled_component,
    }

}

async function writeComponent(options){
    // get new component name
    const compName = process.argv[2].toLowerCase();
    const dir = './components';
    //create components folder if not exists 
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    //create component folder
    fs.mkdirSync(`${dir}/${compName}`);
    if(options.styledComponent === "yes"){
        //create component styles folder
        fs.mkdirSync(`${dir}/${compName}/styles`);
        //create component styles js file
        fs.writeFileSync(`${process.cwd()}/components/${compName}/styles/${compName}Style.js`, stylesByStyledComponent())
    }
    
    if(options.type === "Component Object Model"){
        //create main component js file
        fs.writeFileSync(`${process.cwd()}/components/${compName}/${compName}.js`, comComponent(compName, options.propsType, options.styledComponent));
    }
}

async function cli(){
    const options = await promptOptions();
    writeComponent(options);
}

cli();
exports.cliPublic = cli;