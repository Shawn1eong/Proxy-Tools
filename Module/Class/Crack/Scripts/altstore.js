/*
[Script]
Altstore beta = type=http-response,pattern=https:\/\/www\.patreon\.com\/api\/oauth2\/v2\/identity?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/altstore.js,script-update-interval=0
[MITM]
hostname = www.patreon.com
*/

let obj = JSON.parse($response.body);
obj ={
        "data": {
            "attributes": {
                "first_name": "Shawn",
                "full_name": "Shawn Leong"
            },
            "id": "30618536",
            "relationships": {
                "memberships": {
                    "data": [{
                        "id": "e3a5c718-d930-4b92-a8b9-677f4699c9a4",
                        "type": "tier"
                    }]
                }
            },
            "type": "member"
        },
        "included": [{
            "attributes": {
                "full_name": "Lang Khach",
                "patron_status": "active_patron"
            },
            "id": "e3a5c718-d930-4b92-a8b9-677f4699c9a4",
            "type": "member"
        }],
        "links": {
            "self":"https://www.patreon.com/api/oauth2/v2/user/30618536"
        }
    }
$done({body: JSON.stringify(obj)});