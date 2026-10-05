// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Parser from "effect/http/MultipartParser"
const fields: string[] = []
const parser = Parser.make({ headers: { "content-type": "multipart/form-data; boundary=fixed" }, onField: (info, value) => fields.push(`${info.name}:${new TextDecoder().decode(value)}`), onFile: () => () => {}, onError: error => fields.push(error._tag), onDone: () => fields.push("done") })
parser.write(new TextEncoder().encode('--fixed\r\nContent-Disposition: form-data; name="answer"\r\n\r\n42\r\n--fixed--\r\n'))
parser.end()
console.log(JSON.stringify(fields))
