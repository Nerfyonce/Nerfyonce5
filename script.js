document.getElementById('generateBtn').addEventListener('click', async function() {
    // Get the card code input by the user
    const cardCode = document.getElementById('cardCodeInput').value;

    // If no card code is provided, show an error message
    if (!cardCode) {
        document.getElementById('output').textContent = 'Please enter a card code.';
        return;
    }

    // Construct API URL with the card code
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/HVNBFK0/cards/${cardCode}?tz=PLT61H6VO2`;
    
    const bearerToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MTQyMDc4LCJuYmYiOjE3MjYxNDExNzgsImlwQWRkcmVzcyI6IjExNC41LjEwOS4xODYiLCJpcGFkZHIiOiIxMTQuNS4xMDkuMTg2Iiwib2lkIjoiMTAwZmQ2YzUtNmFhNy00MzE4LTgzNzItMmQ3M2FjZDEzMjRlIiwic3ViIjoiMTAwZmQ2YzUtNmFhNy00MzE4LTgzNzItMmQ3M2FjZDEzMjRlIiwicGhvbmUiOiIrNjI4NTY1NTc4OTI3MiIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiMjZjMGQwOTgtYTZkZC00NTQ4LThjYzUtYWRkNTNmY2FkNTZmIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MjYxNDExNzh9.u0pIPFSnm8SglEoRQwHS7TBpk2UCgU8rogcqGws5HBa8LoINNM9RtWl9JNjDKItF3VLdeYat32KeXbhck2tMrXXR_iTVbtP09lmsdOD7twXpY0tnd4cl-tiUScIoRKPmZoVOzCpQH3sqpyEcQX6iKOWs-chQvHM7kzkiKz89c4KHOp4USzn0twvmH1NgPE1CoYFe2kuGOZIGHWheMycbxj60jjBxyKSQszZFoGNz3CHYUWFNRGccw0KaweBeZ58Y8Mh7f9ccaxqx_vamJLTMrb32hI5aISmp4M7mAt7Fv9yS5AtHiiHytrZDK7RXKKyYVa71ifjXvEvM8znNXAYaMQ';

    try {
        // Fetch API request
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': bearerToken,
                'Content-Type': 'application/json'
            }
        });

        // Error handling for unsuccessful response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response to JSON format
        const data = await response.json();
        
        // Displaying the result in the output section
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Error handling for any request failure
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});
