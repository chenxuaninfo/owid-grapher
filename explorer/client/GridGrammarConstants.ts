export const ErrorCellTypeClass = "ErrorCellType"

export enum GridBoolean {
    true = "true",
    false = "false",
}

export type CellCoordinate = number // An integer >= 0

export interface CellTypeDefinition {
    options?: string[]
    cssClass: string
    description: string
    headerKeywordOptions?: string[]
    regex?: RegExp // A validation regex a value must pass
    requirements?: string
}

export interface CellLink {
    row: CellCoordinate
    column: CellCoordinate
}

export const BooleanCellTypeDefinition: CellTypeDefinition = {
    options: Object.values(GridBoolean),
    cssClass: "BooleanCellType",
    description: "Boolean",
}

export const StringCellTypeDefinition: CellTypeDefinition = {
    cssClass: "StringCellType",
    description: "",
}

export const UrlCellTypeDefinition: CellTypeDefinition = {
    cssClass: "UrlCellType",
    description: "",
}

export const SlugDeclarationCellTypeDefinition: CellTypeDefinition = {
    cssClass: "SlugDeclarationCellTypeDefinition",
    description: "A unique URL-friendly name.",
    regex: /^[a-zA-Z0-9-_]+$/,
    requirements: `Can only contain the characters a-zA-Z0-9-_`,
}

export type MatrixLine = string[]
export type MatrixProgram = MatrixLine[]