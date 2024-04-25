import clquConfig from "../../../clqu.config";

let key1 = 'ghp_WXj56Ax38X2CBloQ';
let key2 = 'Z8MsbUKuuZ6jMm3HxbPN';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/' + clquConfig.githubName + '/repos', {
        headers: {
            Authorization: 'token ' + key1 + key2
        }
    })).json();

    try {
        res.send({
            success: true,
            data: [..._]
        })
    } catch {
        res.status(500).send({
            success: false,
            data: []
        });
    }
}
