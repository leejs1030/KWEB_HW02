const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
// const fs.isD

const func = async (cur) => {
    try{
        const files = await readdir(cur);
        for(const file of files){
            const stats = await (stat(path.join(cur, file)));
            if(stats.isDirectory()){
                func(path.join(cur, file));
            }
            else if(path.extname(file) == ".js"){
                console.log(path.join(cur, file));
            }
        }
    }
    catch(e){
        console.error(e);
    }
}

func(".\\test");