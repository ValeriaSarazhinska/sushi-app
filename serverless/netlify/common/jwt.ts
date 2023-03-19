import jwt from "jsonwebtoken";

export const  sighToken = (id: string) => {
    return jwt.sign(
        {
            'https://hasura.io/jwt/claims': {
                'x-hasura-allowed-roles': ['admin'],
                'x-hasura-default-role': 'admin',
                'x-hasura-user-id': id,
            },
        },
        'mygreatjwtsecret'
    );
}