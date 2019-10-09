// https://ts-ast-viewer.com
import * as ts from 'typescript'

const printer = ts.createPrinter()

function astFactory() {
  return [
    ts.createExpressionStatement(ts.createCall(
      ts.createPropertyAccess(
        ts.createIdentifier("console"),
        ts.createIdentifier("log")
      ),
      undefined,
      [ts.createBinary(
        ts.createBinary(
          ts.createBinary(
            ts.createBinary(
              ts.createBinary(
                ts.createNumericLiteral("1.999"),
                ts.createToken(ts.SyntaxKind.AsteriskToken),
                ts.createNumericLiteral("2")
              ),
              ts.createToken(ts.SyntaxKind.SlashToken),
              ts.createNumericLiteral("3")
            ),
            ts.createToken(ts.SyntaxKind.PlusToken),
            ts.createNumericLiteral("1")
          ),
          ts.createToken(ts.SyntaxKind.PlusToken),
          ts.createNumericLiteral("1")
        ),
        ts.createToken(ts.SyntaxKind.PlusToken),
        ts.createStringLiteral("hello world")
      )]
    ))
  ]
}

// Result: console.log(1.999 * 2 / 3 + 1 + 1 + "hello world")
console.log(printer.printList(
  ts.ListFormat.MultiLine,
  ts.createNodeArray(astFactory()),
  ts.createSourceFile("", "", ts.ScriptTarget.ES2015)
))
