type Flags = { option1: boolean; option2: boolean };
type ReadonlyFlags = { readonly [K in keyof Flags]: boolean };

//this is a test
// console.log(typeof.Flags());

