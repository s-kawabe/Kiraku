// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  schema: [
    {
      'https://kiraku.herokuapp.com/v1/graphql': {
        headers: { 'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET },
      },
    },
  ],
  documents: ['src/{components,pages,apollo}/**/*.{ts,tsx}'],
  overwrite: true,
  generates: {
    'src/apollo/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: 'string',
          timestamptz: 'string',
          bigint: 'number',
          _text: 'string[]',
        },
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          enumValues: 'upper-case#upperCase',
        },
        apolloReactCommonImportFrom: '@apollo/client',
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
}
