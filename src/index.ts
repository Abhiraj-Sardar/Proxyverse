import {program} from 'commander'; 
import { parseYAMLConfig, validateConfig } from './config';

interface CreateServerConfig{
    port: number;
    workerCount: number;
}

async function createServer(config: CreateServerConfig){
    const {workerCount} = config;
    const workers = new Array(workerCount);
}

async function main(){
    program.option('--config <path>');
    program.parse();

    
    const options = program.opts();
    console.log(options);
    if(options && 'config' in options){
        const validatedConfig = await validateConfig(await parseYAMLConfig(options.config));
        console.log(validatedConfig);
    }

   
}

main()