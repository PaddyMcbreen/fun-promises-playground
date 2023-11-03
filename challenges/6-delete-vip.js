const fs = require('fs/promises');
const inquirer = require('inquirer');

function readFile() {
  
  fs.readFile("D:/NorthCoders/3rdNov/fun-promises-playground/challenges/vip-list.txt")
    .then((result) => {
      const stringfy = result.toString();
      console.log("Here are your current VIPs: ");
      console.log(stringfy);
      console.log("-------------------------------------------");

      inquirer
        .prompt([
          {
            name: 'name',
            message: 'Which VIP would you like to remove?: ',
          },
        ])

        .then((answers) => {
          const vipToRemove = answers.name;
          const updatedVipList = stringfy
            .split('\n')
            .filter((vip) => vip.trim() !== vipToRemove)
            .join('\n');

          
          fs.writeFile(
            "D:/NorthCoders/3rdNov/fun-promises-playground/challenges/vip-list.txt",
            updatedVipList
          )
            .then(() => {
              console.log(`${vipToRemove} has been removed from the VIP list!`);
              console.log("-------------------------------------------");
              console.log("Here is your updated VIP list: ");
              console.log(updatedVipList);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch(() => {
      console.log({ status: 404, msg: 'File not found! - check path' });
    });
}

readFile();
