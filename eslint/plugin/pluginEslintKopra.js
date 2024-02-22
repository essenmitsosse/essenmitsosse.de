/** @type {import('eslint').Rule.RuleModule} */
const ruleReadonlyProps = {
  create: (context) => ({
    TSInterfaceDeclaration: (node) =>
      node.body.body.forEach((member) => {
        if (member.type !== 'TSPropertySignature' || member.readonly) {
          return
        }

        context.report({
          fix: (fixer) => fixer.insertTextBefore(member, 'readonly '),
          message: 'Interface properties should be `readonly`.',
          node: member,
        })
      }),
    TSTypeLiteral: (node) =>
      node.members.forEach((member) => {
        if (member.type !== 'TSPropertySignature' || member.readonly) {
          return
        }

        context.report({
          fix: (fixer) => fixer.insertTextBefore(member, 'readonly '),
          message: 'Object type properties should be `readonly`.',
          node: member,
        })
      }),
  }),
  meta: {
    docs: {
      description:
        'Ensure all properties in interfaces and type literals are readonly',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    type: 'suggestion',
  },
}

const pluginEslintKopra = { rules: { 'readonly-props': ruleReadonlyProps } }

export default pluginEslintKopra
