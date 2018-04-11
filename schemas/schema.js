import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent,
  {
    name: 'agent',
    type: 'document',
    title: 'Megler',
    fields: [
      {
        name: 'firstName',
        type: 'string',
      },
      {
        name: 'lastName',
        type: 'string',
      },
      {
        name: 'phone',
        type: 'number',
        /* validation: Rule => Rule.required().min(8).max(8) */
      },
      {
        name: 'email',
        type: 'string'
      },
      {
        name: 'salesPitch',
        type: 'text',
      },
      {
        name: 'about',
        type: 'text',
      },
      {
        name: 'image',
        type: 'image'
      },
      {
        name: 'video',
        type: 'file'
      },
      {
        name: 'sales',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'sale'
              }
            ]
          }
        ],
        preview: {
          select: {
            firstName: 'firstName',
            lastName: 'lastName'
          },
          prepare({ firstName = 'N', lastName = 'N'}) {
            return {
              title: `${firstName} ${lastName}`
            }
          }
        }
      },
      {
        name: 'office',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'office'
            }
          }
        ]
      },
      {
        name: 'experience',
        type: 'number'
      }
    ]
  },
  {
    name: 'sale',
    title: 'Salg',
    type: 'document',
    fields: [
      {
        name: 'streetName',
        title: 'Gatenavn',
        type: 'string'
      }
    ]
  },
  {
    name: 'office',
    title: 'Kontor',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'location',
        type: 'geopoint'
      }
    ]
  }
  ])
})
