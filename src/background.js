chrome.declarativeNetRequest.updateSessionRules(
    {
        addRules: [
            {
                "id": 1,
                "priority": 1,
                "action": {
                    "type": "modifyHeaders",
                    "responseHeaders": [
                        { "header": "x-frame-options", "operation": "remove" },
                        { "header": "content-security-policy", "operation": "remove" }
                    ]
                },
                "condition": {
                    "urlFilter": `*`,
                    "resourceTypes": [
                        "main_frame",
                        "sub_frame"
                    ]
                }
            }
        ]
    }, () => {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
    }
);