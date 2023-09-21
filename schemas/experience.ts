import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company name',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'iconAlt',
      title: 'Icon alt text',
      type: 'string',
    }),
    defineField({
      name: 'companyWebsite',
      title: 'Link to website',
      type: 'url',
    }),
    defineField({
      name: 'started',
      title: 'Start date',
      type: 'date',
    }),
    defineField({
      name: 'finished',
      title: 'Finished date',
      type: 'date',
      description: 'Leave empty if still working here',
    }),
    defineField({
      type: 'array',
      name: 'thingsDone',
      of: [
        defineField({
          name: 'thingDone',
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'thing',
              title: 'Title of thing',
            }),
            defineField({
              type: 'string',
              name: 'descriptionOfThing',
              title: 'Description of thing',
            }),
          ],
        }),
      ],
    }),
  ],
})
