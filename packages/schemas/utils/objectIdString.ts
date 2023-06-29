const objectIdValidationRegEx = /^[a-f\d]{24}$/i

export function isStringValidObjectId(value: string) {
    return objectIdValidationRegEx.test(value);
}