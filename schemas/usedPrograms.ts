import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'usedPrograms',
  title: 'Used programs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'link',
      title: 'Link to repo / source',
      type: 'url',
    }),
  ],
})
