import {AutocompleteArrayInput, useDataProvider, useGetList, useRecordContext} from "react-admin";
import {FC, useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import {getManyReferenceFilter} from "@app/common/data/get-meny-reference-filter";

interface ManyToManyInputProps {
    label: string;
    reference: string;
    joinResource: string;
    resourceField: string;
    referenceField: string;
    source:string;
}

export const ManyToManyInput: FC<ManyToManyInputProps> = ({
                                                              label,
                                                              reference,
                                                              joinResource,
                                                              resourceField,
                                                              referenceField,
                                                              source
                                                          }) => {

    const record = useRecordContext()
    const {setValue} = useFormContext()
    const dataProvider = useDataProvider()

    const choices = useGetList(reference)

    const [chosenValuesIds, setChosenValuesIds] = useState<string[]>([])

    useEffect(() => {
        if(!record)return
        const fetchJoinReferences = async () => {
            const chosenValues = await dataProvider.getManyReference(joinResource, {
                id: record.id,
                target: resourceField,
                ...getManyReferenceFilter
            })


            const chosenValuesIds = chosenValues.data?.map(chosenValues => chosenValues[referenceField]
            )
            setChosenValuesIds(chosenValuesIds)
        }
        fetchJoinReferences()
    }, [])

    useEffect(() => {
        setValue(source, chosenValuesIds)

    }, [chosenValuesIds])

    return <AutocompleteArrayInput
        label={label}
        fullWidth
        optionText="title"
        translateChoice={false}
        choices={choices.data ?? []}
        source={source}
    />
}