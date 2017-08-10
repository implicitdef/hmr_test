
const randomString = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

let counter = 0;
let thisInstanceName = randomString();



export function generate(){
  counter++;
  return `[${thisInstanceName}] Display n${counter}`;
}
