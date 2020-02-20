const reducer = require('@karcass/template-reducer')
const Type = reducer.ConfigParameterType

class TemplateReducer extends reducer.AbstractTemplateReducer {
    getConfigParameters() {
        return [
            { name: 'name', description: 'Please enter your name', type: Type.string },
        ]
    }
    async getFilesContentReplacers() {
        return [
            { filename: 'index.js', replacer: (content) => {
                return content.replace('[replacethisname]', this.config.name)
            } },
        ]
    }
    async finish() {
        console.log(`Application installed, execute cd ${this.directoryName} && node index.js to launch it.`)
    }
}
module.exports = { TemplateReducer }