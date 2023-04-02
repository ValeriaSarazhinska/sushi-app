import buildHasuraProvider from "ra-data-hasura";
import {apolloClient} from "@app/core/apollo-client";
import {DataProvider} from "react-admin";

export const buildDataProvider = async () => {
    const dataProviderHasura = await buildHasuraProvider({
        client: apolloClient as any,
    });
    const dp: DataProvider = {
        getList: (resource, params) =>
            dataProviderHasura.getList(resource, params),
        getOne: (resource, params) =>
            dataProviderHasura.getOne(resource, params),
        getMany: (resource, params) =>
            dataProviderHasura.getMany(resource, params),
        getManyReference: (resource, params) =>
            dataProviderHasura.getManyReference(resource, params),
        update: (resource, params) => {
            delete params.previousData.client_address
            return dataProviderHasura.update(resource, params);
        },
        updateMany: (resource, params) =>
            dataProviderHasura.updateMany(resource, params),
        create: (resource, params) =>
            dataProviderHasura.create(resource, params),
        delete: (resource, params) =>
            dataProviderHasura.delete(resource, params),
        deleteMany: (resource, params) =>
            dataProviderHasura.deleteMany(resource, params),
    }
    return dp
}
