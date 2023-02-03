import { createRule } from "../../utils";
import type { TmplAstElement } from '@angular-eslint/bundled-angular-compiler';
import { getTemplateParserServices } from '@angular-eslint/utils';
export const RULE_NAME = 'eslint-plugin-angular-pendo-click'

export default createRule({
    name: RULE_NAME,
    defaultOptions: [],
    meta: {
        docs: {
            description: 'Rule to check if click have pendo class',
            recommended: "strict",
        },
        messages: {
            pendoClass: 'Add the pendo class attribute ex: pendoClass="something_descriptive"'
        },
        type: "problem",
        schema: [],
    },
    create(context) {
        return {
            Element$1(node: TmplAstElement){
                let isClick = false
                let havePendoAttr = false
                if(node.outputs.some( output => output.name === 'click')){
                    isClick = true
                    if(isClick && node.attributes.some(attribute => attribute.name === 'pendoClass')){
                        havePendoAttr = true
                    }
                }

                if(!isClick || havePendoAttr){
                    return
                }

                const parserService = getTemplateParserServices(context)
                const loc = parserService.convertNodeSourceSpanToLoc(node.sourceSpan)

                context.report({
                    loc,
                    messageId: 'pendoClass'
                })
            }
        }
    },
})
