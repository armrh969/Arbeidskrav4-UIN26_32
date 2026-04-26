import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'arbeidskrav',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    }),
  ],
})
