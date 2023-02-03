export type node = {
    outputs: outputInput[],
    inputs: outputInput[],
    attributes: outputInput[],
    sourceSpan: any,
}


type outputInput = {
    name: string
}