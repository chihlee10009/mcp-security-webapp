const promptInput = document.getElementById('prompt-input');
const submitBtn = document.getElementById('submit-btn');
const responseContainer = document.getElementById('response-container');

submitBtn.addEventListener('click', async () => {
    const prompt = promptInput.value;
    if (!prompt) {
        return;
    }

    responseContainer.innerHTML = 'Loading...';

    try {
        const response = await fetch('/mcp/gti/get_threat_intel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: prompt,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        responseContainer.innerHTML = data.result;
    } catch (error) {
        console.error('Error:', error);
        console.log("joseph was here");
        responseContainer.innerHTML = 'An error occurred. Please try again.';
    }
});
