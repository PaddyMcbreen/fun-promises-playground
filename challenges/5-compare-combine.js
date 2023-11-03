const fs = require('fs/promises');

function readFiles() {
  const secretFilePath = "D:/NorthCoders/3rdNov/fun-promises-playground/challenges/secret-message.txt";
  const superSecretFilePath = "D:/NorthCoders/3rdNov/fun-promises-playground/challenges/super-secret-message.txt";

  const secretPromise = fs.readFile(secretFilePath)
    .then((secretData) => secretData.toString())
    .catch((err) => {
      console.log({ status: 404, msg: 'File not found: ' + secretFilePath });
    });


  const superSecretPromise = fs.readFile(superSecretFilePath)
    .then((superSecretData) => superSecretData.toString())
    .catch((err) => {
      console.log({ status: 404, msg: 'File not found: ' + superSecretFilePath });
    });

  Promise.all([secretPromise, superSecretPromise])
    .then(([secretText, superSecretText]) => {
      if (secretText.length > superSecretText.length) {
        console.log(`The file 'secret-message.txt' contains the most characters, with ${secretText.length - superSecretText.length} more characters.`);
      } 
      
      else if (superSecretText.length > secretText.length) {
        console.log(`The file 'super-secret-message.txt' contains the most characters, with ${superSecretText.length - secretText.length} more characters.`);
      } 
      
      else {
        console.log("Both files have the same number of characters.");
      }

      const combinedText = secretText + superSecretText;
      return fs.writeFile("D:/NorthCoders/3rdNov/fun-promises-playground/challenges/mega-secret-message.txt", combinedText);
    })

    .then(() => {
      console.log("Contents of both files have been combined into mega-secret-message.txt.");
    })

    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

readFiles();
