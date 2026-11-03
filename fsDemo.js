//import fs from 'fs';
import fs from 'fs/promises';

//readFile() - callback
// fs.readFile('./text.txt', 'utf8', (error, data) => { 
//     if (error) throw error;
//     console.log(data);
// });

// // readFileSync() - synchronous version of readFile()

// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);


// readFile() async/await version
const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
};

//writeFile() async/await version
const writeFile = async () => {
    try {
        await fs.writeFile('text.txt', 'hello i am writing this file');
        console.log('file written successfully');
        
    } catch (error) {
        console.log(error);
    }

};

//appendFile() async/await version
export const appendFile = async () => {
    try {
        await fs.appendFile('text.txt', 'hi i am appending this file');
        console.log('file appended successfully');
        
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();


// export{readFile, writeFile, appendFile};