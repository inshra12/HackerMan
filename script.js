const background = document.querySelector('.background');
function generateCodeLine() {
  const codeLine = document.createElement('div');
  codeLine.className = 'code';
  codeLine.textContent = generateRandomCodeLine();
  background.appendChild(codeLine);

  setTimeout(() => {
    codeLine.remove();
  }, 10000); // Remove the code line after 10 seconds
}

function generateRandomCodeLine() {
  const characters = '0123456789ABCDEF';
  let codeLine = '';

  for (let i = 0; i < 40; i++) {
    codeLine += characters[Math.floor(Math.random() * characters.length)];
  }

  return codeLine;
}

function updateBackground() {
  setInterval(generateCodeLine, 100); // Generate a new code line every 100 milliseconds
}

// Call the function to start updating the background
updateBackground();


let a = [
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
  "Intiliazing hack tool...",
  "Connecting to Instagram...",
  "Connecting to server 1...",
  "Connection Failed...",
  "Retrying............",
  "Connecting to Server 2...",
  "Connected Successfuly...",
  "Username inshra12...",
  "Trying Brute Force...",
  "200k password tried...",
  "Matched Not Found...",
  "Another 200k password Tried...",
  "Matched Not Found...",
  "Another 200k password Tried...",
  "Matched Not Found...",
  "Another 200k password Tried...",
  "Accessing Account...",
  "Hack Succesfull...",
];
const sleep = async (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, value * 200);
  });
};
const hack = async (message) => {
  await sleep(1);
   text.innerHTML= text.innerHTML + message + "<br>";

};

(async()=>{
for(let i=0;i<a.length;i++)
{
    await hack(a[i])
}

})()




