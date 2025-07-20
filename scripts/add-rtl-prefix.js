import { readFileSync, writeFileSync } from 'fs'
import { basename, dirname, extname, join } from 'path'

/**
 * Get command line arguments for input and output files
 * @returns {Object} Object containing inputFile, outputFile, and prefix
 */
const getArgs = () => {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Usage: node add-rtl-prefix.js <input-file> [output-file] [prefix]')
    console.error('Example: node add-rtl-prefix.js bootstrap.ltr.css')
    console.error('Example: node add-rtl-prefix.js bootstrap.ltr.css bootstrap.rtl.css')
    console.error(
      'Example: node add-rtl-prefix.js bootstrap.ltr.css bootstrap.rtl.css "[dir=\'rtl\']"'
    )
    console.error(
      'Example: node add-rtl-prefix.js bootstrap.ltr.css bootstrap.rtl.css "[lang=\'ar\']"'
    )
    process.exit(1)
  }

  const inputFile = args[0]
  let outputFile = args[1]
  const prefix = args[2] || "[dir='rtl']" // Default to [dir='rtl'] if not provided

  // If no output file specified, generate one based on input filename
  if (!outputFile) {
    const dir = dirname(inputFile)
    const name = basename(inputFile, extname(inputFile))
    const ext = extname(inputFile)
    outputFile = join(dir, `${name}.rtl${ext}`)
  }

  return { inputFile, outputFile, prefix }
}

// Get input and output file paths
const { inputFile, outputFile, prefix } = getArgs()

// Load your CSS content
const css = readFileSync(inputFile, 'utf8')

/**
 * Function to add custom prefix to CSS selectors
 * Uses advanced regex pattern to handle various CSS constructs
 * @param {string} css - The input CSS string to process
 * @param {string} prefix - The prefix to add to selectors (e.g., "[dir='rtl']")
 * @returns {string} Processed CSS with prefixes added
 */
const processCSS = (css, prefix) =>
  css.replace(
    /(^(?:\s|[^@{])*?|[},]\s*)(\/\/.*\s+|.*\/\*[^*]*\*\/\s*|@media.*{\s*|@font-face.*{\s*)*([.#*:]?:?-?[_a-zA-Z]+[_a-zA-Z0-9-]*|\*)(?=[^}]*{)/g,
    `$1$2${prefix} $3`
  )

// Process and save
const result = processCSS(css, prefix)
writeFileSync(outputFile, result)

console.log(`✅ Successfully processed ${inputFile}`)
console.log(`📄 Output saved to: ${outputFile}`)
console.log(`🔧 Prefix used: ${prefix}`)
