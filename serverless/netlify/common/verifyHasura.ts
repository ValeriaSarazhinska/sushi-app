import {config} from "../core/config";

export const verifyHasura = (headers) => {
    if (
        !headers['x-sushiapp-secret-key'] ||
        headers['x-sushiapp-secret-key'] !== config.hasuraSushiappSecret
    ) {
        throw new Error(
            JSON.stringify({
                statusCode: 403,
                body: JSON.stringify({message: "'x-sushiapp-secret-key' is missing or value is invalid"}),
            })
        )
    }

}