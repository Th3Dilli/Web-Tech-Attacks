let sanitizeHtml = require('sanitize-html');

let dirty = '<b onclick="asdf()"> asdf </b>  <script>alert("Hi")</script>  <SCRIPT>alert("Hi")</SCRIPT> <a></a>';
let clean = sanitizeHtml(dirty);
console.log(clean)
//<b> asdf </b>     <a></a>

console.log(sanitizeHtml.defaults)
/* { allowedTags:
    [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe' ],
   allowedAttributes: { a: [ 'href', 'name', 'target' ], img: [ 'src' ] },
   selfClosing:
    [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
   allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ],
   allowedSchemesByTag: {},
   allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
   allowProtocolRelative: true,
   parser: { decodeEntities: true } } */