import * as ts from 'typescript'

console.log(ts.createStringLiteral("hello"))

console.log(ts.createExpressionStatement(ts.createStringLiteral("hello")))
