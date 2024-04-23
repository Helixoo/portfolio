import clquConfig from "../../../clqu.config";

let key1 = 'ghp_8nnTc9fKgUFHo0XX';
let key2 = 'cPvCHsObPi5luU2XsxaG';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/' + clquConfig.githubName + '/repos', {
        headers: {
            Authorization: 'token '+key1+key2
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
