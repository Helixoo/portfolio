import clquConfig from "../../../clqu.config";

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/' + clquConfig.githubName + '/repos', {
        headers: {
            Authorization: 'token '+ ${{ secrets.GT_KEY }}
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
