
import rule, {RULE_NAME} from '../src/lib/rules/angular-pendo'
import { RuleTester } from '@angular-eslint/utils';
import { convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';

const ruleTester = new RuleTester({
    parser: '@angular-eslint/template-parser'
})

const invalid = [
    convertAnnotatedSourceToFailureCase({
        description: 'should fail becaus is clickable but have no pendoClass',
        annotatedSource: `
        <button (click)='something'></button>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `,
        messageId: 'pendoClass'
    })
]

ruleTester.run(RULE_NAME, rule, {
    valid: [`<button (click)='something' pendoClass='something_descriptive'></button>`],
    invalid: invalid
})

